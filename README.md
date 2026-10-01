# Ingwe Technologies

This repository now contains the fullstack Ingwe Technologies site at its root. It replaces the previous static site, which is preserved in [`legacy/index.html`](legacy/index.html) for reference.

## Project structure

- `frontend/` — React application built with Vite and deployed to Cloudflare Pages, including the project gallery and its media in `frontend/public/gallery/`. `frontend/functions/api/contact.ts` handles production contact submissions.
- `frontend/migrations/` — D1 schema for durable contact submission storage.
- `backend-node/` — Express API retained for local development and reference.
- `backend-python/` — Flask email service retained for local development and reference.
- `legacy/index.html` — archived copy of the former static site.

The Node and Python backends are retained for local development. In production, Cloudflare Pages serves the frontend and its Pages Function, D1 stores form submissions, and Resend sends enquiry notifications to `info@ingwetech.co.za`.

## Run locally

Run the Python service, Node API, and frontend in separate terminals:

```sh
cd backend-python && pip install -r requirements.txt && cp .env.example .env && python app.py
```

```sh
cd backend-node && npm install && cp .env.example .env && npm start
```

```sh
cd frontend && npm install && npm run dev
```

## Deployment

Connect this GitHub repository to Cloudflare Pages and configure:

- Root directory: `frontend`
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

Cloudflare Pages then builds and deploys the frontend on pushes to `main`, with preview deployments for pull requests. The Vite app is configured for a domain-root deployment. The `frontend/functions/api/contact.ts` Pages Function is served at `/api/contact` on the same site.

### Contact form setup

Before accepting production enquiries:

1. Create a Cloudflare D1 database for contact submissions.
2. Run `frontend/migrations/0001_contact_submissions.sql` in the D1 Console.
3. In the Pages project, bind the D1 database under **Settings → Functions → D1 database bindings** using the binding name `DB`.
4. Add `ingwetech.co.za` as a DNS zone in Cloudflare. Before changing nameservers at Domains.co.za, copy the Domains.co.za MX and mail-authentication records into Cloudflare so both mailboxes keep working. Then update the nameservers at Domains.co.za to the Cloudflare values.
5. Create a Resend account, verify `ingwetech.co.za`, and add the sending/authentication DNS records Resend provides to the Cloudflare DNS zone. Keep the Domains.co.za MX records so the `info@` and founder mailboxes continue receiving mail.
6. Add `RESEND_API_KEY` as a secret in the Pages project's production environment. Optional variables are `CONTACT_TO` (defaults to `info@ingwetech.co.za`) and `RESEND_FROM` (defaults to `Ingwe Technologies <website@ingwetech.co.za>`).

The function stores submissions in D1 and sends an email notification to the company inbox. It does not expose a public endpoint for reading stored enquiries. Until D1 and Resend are configured and the deployment is live, the production form is not ready to accept enquiries.
