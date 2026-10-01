"""
Ingwe Technologies — notification microservice.

One job: receive a contact form submission from the Node API and turn it
into an email to whoever should see new leads.

If SMTP_HOST/SMTP_USER/SMTP_PASS are set in the environment, it sends a
real email. If they're not, it logs the email it *would* have sent, so the
whole flow can be demoed before any real inbox is wired up.
"""
import os
import smtplib
from email.message import EmailMessage

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
CORS(app)

SMTP_HOST = os.getenv("SMTP_HOST")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER")
SMTP_PASS = os.getenv("SMTP_PASS")
NOTIFY_TO = os.getenv("NOTIFY_TO", "info@ingwetech.co.za")


def build_email(submission: dict) -> EmailMessage:
    msg = EmailMessage()
    msg["Subject"] = f"New enquiry from {submission.get('name', 'Unknown')}"
    msg["From"] = SMTP_USER or "no-reply@ingwetech.co.za"
    msg["To"] = NOTIFY_TO
    msg.set_content(
        "New contact form submission\n"
        "----------------------------\n"
        f"Name: {submission.get('name')}\n"
        f"Company: {submission.get('company', '-')}\n"
        f"Email: {submission.get('email')}\n"
        f"Phone: {submission.get('phone', '-')}\n"
        f"Service required: {submission.get('service', '-')}\n\n"
        f"Message:\n{submission.get('message', '-')}\n"
    )
    return msg


def send_email(submission: dict) -> dict:
    msg = build_email(submission)

    if not (SMTP_HOST and SMTP_USER and SMTP_PASS):
        # No credentials configured — log instead of sending, so the demo
        # still works end to end without a real mailbox.
        print("=" * 60)
        print("[backend-python] SMTP not configured. Would have sent:")
        print(msg)
        print("=" * 60)
        return {"sent": False, "logged": True}

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
        server.starttls()
        server.login(SMTP_USER, SMTP_PASS)
        server.send_message(msg)
    return {"sent": True, "logged": False}


@app.post("/notify")
def notify():
    submission = request.get_json(silent=True) or {}
    if not submission.get("name") or not submission.get("email"):
        return jsonify({"error": "name and email are required"}), 400

    result = send_email(submission)
    return jsonify({"status": "ok", **result})


@app.get("/health")
def health():
    return jsonify({"status": "ok"})


if __name__ == "__main__":
    app.run(port=5001, debug=True)
