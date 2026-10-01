const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function fetchGallery() {
  const res = await fetch(`${API_URL}/api/gallery`);
  if (!res.ok) throw new Error("Failed to load gallery");
  return res.json();
}

export async function submitContact(payload) {
  const res = await fetch(`${API_URL}/api/contact`, {
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
