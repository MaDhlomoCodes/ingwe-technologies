import "dotenv/config";
import express from "express";
import cors from "cors";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

import { saveSubmission, listSubmissions } from "./db.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const PYTHON_SERVICE_URL = process.env.PYTHON_SERVICE_URL || "http://localhost:5001";

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.get("/api/gallery", async (req, res) => {
  const raw = await readFile(path.join(__dirname, "data", "gallery.json"), "utf-8");
  res.json(JSON.parse(raw));
});

// Lets you (or Njabulo) check what's come in without opening the JSON file directly.
app.get("/api/submissions", async (req, res) => {
  res.json(await listSubmissions());
});

app.post("/api/contact", async (req, res) => {
  const { name, email, company, phone, service, message } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: "name and email are required" });
  }

  const record = await saveSubmission({ name, email, company, phone, service, message });

  // Best-effort notify — a slow or down notification service shouldn't
  // make the person submitting the form think it failed, since the
  // submission is already saved.
  try {
    await fetch(`${PYTHON_SERVICE_URL}/notify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, company, phone, service, message }),
    });
  } catch (err) {
    console.error("[backend-node] Could not reach notification service:", err.message);
  }

  res.status(201).json({ status: "ok", id: record.id });
});

app.listen(PORT, () => {
  console.log(`[backend-node] Ingwe API running on http://localhost:${PORT}`);
});
