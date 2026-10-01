const configuredApiUrl = import.meta.env.VITE_API_URL;
const apiUrl = configuredApiUrl || (import.meta.env.DEV ? "http://localhost:5000" : "");

export async function submitContact(payload) {
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
