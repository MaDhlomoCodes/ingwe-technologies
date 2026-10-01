# Ingwe Technologies — Fullstack Demo

A demo rebuild of the Ingwe Technologies site as a proper fullstack app:

```
React (frontend)  --POST /api/contact-->  Node/Express (backend-node)
                                                 |
                                                 | POST /notify
                                                 v
                                          Python/Flask (backend-python)
                                                 |
                                                 v
                                          sends email notification
```

- **frontend/** — React app (Vite) with Home, About, Services, Gallery, and
  Contact pages. The contact form posts to the Node API.
- **backend-node/** — Express API. Validates and stores contact submissions
  (`data/submissions.json`) and serves gallery data, then calls the Python
  service so someone actually gets notified.
- **backend-python/** — Flask microservice with one job: turn a submission
  into an email. Works without real SMTP credentials too — it just logs the
  email to the console instead of sending it, so you can demo end to end
  before you plug in real credentials.

## Running it locally

Open three terminals.

**1. Python notification service**
```
cd backend-python
pip install -r requirements.txt
cp .env.example .env      # fill in SMTP_* to send real emails, or leave blank to log instead
python app.py             # runs on http://localhost:5001
```

**2. Node API**
```
cd backend-node
npm install
cp .env.example .env
npm start                 # runs on http://localhost:5000
```

**3. React frontend**
```
cd frontend
npm install
cp .env.example .env
npm run dev               # runs on http://localhost:5173
```

Fill out the contact form on the site, submit it, and watch the Node and
Python terminals — you'll see the submission land, get stored, and trigger
a (real or logged) email.

## Where data actually goes

Right now submissions are appended to `backend-node/data/submissions.json`
— enough to prove the flow end to end for a demo. Swapping that for a real
database (Postgres, MySQL) is a small, contained change: replace the three
functions in `backend-node/db.js` and nothing else needs to move.

## What's a stub vs. what's real

- The gallery still uses the same placeholder tiles as the static site —
  drop real images into `frontend/src/assets/gallery/` and update
  `backend-node/data/gallery.json` to point at them.
- Email sending is real *if* you provide SMTP credentials in
  `backend-python/.env`. Without them, it logs what it would have sent —
  useful for demoing without touching a real inbox yet.
