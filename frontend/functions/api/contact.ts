interface ContactSubmission {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

interface Env {
  DB: D1Database;
  RESEND_API_KEY: string;
  CONTACT_TO?: string;
  RESEND_FROM?: string;
}

const DEFAULT_RECIPIENT = "info@ingwetech.co.za";
const DEFAULT_SENDER = "Ingwe Technologies <website@ingwetech.co.za>";

function text(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function json(data: unknown, status = 200): Response {
  return Response.json(data, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let input: Record<string, unknown>;
  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return json({ error: "Please check the form and try again." }, 400);
    }
    input = body as Record<string, unknown>;
  } catch {
    return json({ error: "Please check the form and try again." }, 400);
  }

  // Quietly discard basic bot submissions caught by the hidden honeypot field.
  if (text(input.website, 200)) return json({ status: "ok" }, 201);

  const submission: ContactSubmission = {
    name: text(input.name, 120),
    email: text(input.email, 254),
    company: text(input.company, 160),
    phone: text(input.phone, 50),
    service: text(input.service, 120),
    message: text(input.message, 5000),
  };

  if (!submission.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)) {
    return json({ error: "Please provide your name and a valid email address." }, 400);
  }

  const id = crypto.randomUUID();
  const receivedAt = new Date().toISOString();
  await env.DB.prepare(
    `INSERT INTO contact_submissions
      (id, received_at, name, email, company, phone, service, message, notification_status)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'pending')`,
  )
    .bind(
      id,
      receivedAt,
      submission.name,
      submission.email,
      submission.company,
      submission.phone,
      submission.service,
      submission.message,
    )
    .run();

  const markNotification = async (status: "sent" | "failed") => {
    await env.DB.prepare(
      "UPDATE contact_submissions SET notification_status = ? WHERE id = ?",
    )
      .bind(status, id)
      .run();
  };

  if (!env.RESEND_API_KEY) {
    await markNotification("failed");
    return json(
      { error: "We saved your enquiry, but email notification is not configured yet. Please contact us directly by email or phone." },
      503,
    );
  }

  const message = [
    "A new enquiry was submitted through the Ingwe Technologies website.",
    "",
    `Name: ${submission.name}`,
    `Company: ${submission.company || "Not provided"}`,
    `Email: ${submission.email}`,
    `Phone: ${submission.phone || "Not provided"}`,
    `Service: ${submission.service || "Not specified"}`,
    "",
    "Message:",
    submission.message || "Not provided",
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.RESEND_FROM || DEFAULT_SENDER,
        to: [env.CONTACT_TO || DEFAULT_RECIPIENT],
        reply_to: submission.email,
        subject: `Website enquiry from ${submission.name}`,
        text: message,
      }),
    });

    if (!response.ok) {
      await markNotification("failed");
      return json(
        { error: "We saved your enquiry, but could not send the email notification. Please contact us directly by email or phone." },
        503,
      );
    }

    await markNotification("sent");
    return json({ status: "ok", id }, 201);
  } catch {
    await markNotification("failed");
    return json(
      { error: "We saved your enquiry, but could not send the email notification. Please contact us directly by email or phone." },
      503,
    );
  }
};
