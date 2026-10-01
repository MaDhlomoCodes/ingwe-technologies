const configuredApiUrl = import.meta.env.VITE_API_URL;
const apiUrl = configuredApiUrl || (import.meta.env.DEV ? "http://localhost:5000" : "");

export async function submitContact(payload) {
  if (!apiUrl) {
    const body = [
      `Name: ${payload.name}`,
      `Company: ${payload.company || "Not provided"}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone || "Not provided"}`,
      `Service: ${payload.service || "Not specified"}`,
      "",
      payload.message || "",
    ].join("\n");
    const subject = encodeURIComponent(`Website enquiry from ${payload.name}`);
    window.location.href = `mailto:Info@ingwetech.co.za?subject=${subject}&body=${encodeURIComponent(body)}`;
    return { delivery: "email" };
  }

  const res = await fetch(`${apiUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || "Failed to submit");
  }
  return res.json();
}
