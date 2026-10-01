import { useState } from "react";
import { submitContact } from "../api.js";

const emailAddress = "Info@ingwetech.co.za";

export default function Contact() {
  const [status, setStatus] = useState({ type: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    setStatus({ type: "sending", message: "Sending your enquiry…" });

    try {
      await submitContact(payload);
      form.reset();
      setStatus({ type: "success", message: "Thank you. Your enquiry has been received." });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "We couldn’t send that just now. Please contact us by email or phone." });
    }
  }

  return (
    <>
      <section className="page-banner">
        <div className="container page-banner-inner">
          <div className="eyebrow eyebrow-light"><span /> Get in touch</div>
          <h1>Let’s talk about<br /><em>what you need.</em></h1>
          <p>Share a little about your project or operational requirement. Our team will help work out the right next step.</p>
        </div>
      </section>
      <section className="section contact-page">
        <div className="container contact-layout">
          <aside className="contact-details">
            <div className="eyebrow"><span /> Speak to Ingwe</div>
            <h2>A real conversation<br /><em>starts here.</em></h2>
            <p>For project enquiries, sourcing requirements and general questions, contact Njabulo Mbatha and the Ingwe team.</p>
            <div className="contact-detail"><span>Contact person</span><strong>Njabulo Mbatha</strong><small>Founder &amp; Director</small></div>
            <div className="contact-detail"><span>Phone</span><a href="tel:+27789547360">078 954 7360</a></div>
            <div className="contact-detail"><span>Email</span><a href={`mailto:${emailAddress}`}>{emailAddress}</a></div>
            <div className="contact-detail"><span>Based in</span><strong>Meyerton, Gauteng<br />South Africa</strong></div>
            <div className="social-links">
              <a href="https://www.facebook.com/share/1DwPWGhXqB/" target="_blank" rel="noreferrer">Facebook ↗</a>
              <a href="https://www.instagram.com/ingwe_technologies" target="_blank" rel="noreferrer">Instagram ↗</a>
              <a href="https://www.tiktok.com/@ingwe.technologie" target="_blank" rel="noreferrer">TikTok ↗</a>
            </div>
          </aside>
          <div className="contact-form-wrap">
            <div className="eyebrow"><span /> Send an enquiry</div>
            <h2>Tell us about your project.</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-honeypot" aria-hidden="true">
                <label>Leave this field empty<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
              </div>
              <div className="form-row">
                <label>Full name<input name="name" autoComplete="name" maxLength={120} placeholder="Your name" required /></label>
                <label>Company<input name="company" autoComplete="organization" maxLength={160} placeholder="Company (optional)" /></label>
              </div>
              <div className="form-row">
                <label>Email address<input name="email" type="email" autoComplete="email" maxLength={254} placeholder="you@company.com" required /></label>
                <label>Phone number<input name="phone" type="tel" autoComplete="tel" maxLength={50} placeholder="Your number (optional)" /></label>
              </div>
              <label>Service of interest
                <select name="service" defaultValue="">
                  <option value="">Choose a service</option>
                  <option>Drone services</option>
                  <option>Technology solutions</option>
                  <option>Equipment sourcing and hire</option>
                  <option>More than one service</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label>How can we help?<textarea name="message" rows="5" maxLength={5000} placeholder="A few details about your requirements will help us prepare." /></label>
              <button className="button button-red" type="submit" disabled={status.type === "sending"}>Send enquiry <span aria-hidden="true">↗</span></button>
              {status.message && <p className={`form-status ${status.type}`} role="status">{status.message}</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
