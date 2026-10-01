// Storage for contact submissions.
//
// This is a JSON file for the demo. To move to a real database later,
// only the three functions below need to change — nothing in server.js
// has to know the difference.

import { readFile, writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SUBMISSIONS_FILE = path.join(__dirname, "data", "submissions.json");

async function readSubmissions() {
  try {
    const raw = await readFile(SUBMISSIONS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    if (err.code === "ENOENT") return [];
    throw err;
  }
}

export async function saveSubmission(submission) {
  const all = await readSubmissions();
  const record = { id: Date.now(), receivedAt: new Date().toISOString(), ...submission };
  all.push(record);
  await writeFile(SUBMISSIONS_FILE, JSON.stringify(all, null, 2));
  return record;
}

export async function listSubmissions() {
  return readSubmissions();
}
