# Ingwe Technologies

This repository now contains the fullstack Ingwe Technologies site at its root. It replaces the previous static site, which is preserved in [`legacy/index.html`](legacy/index.html) for reference.

## Project structure

- `frontend/` — React application built with Vite and deployed to GitHub Pages, including the project gallery and its media in `frontend/public/gallery/`.
- `backend-node/` — Express API for contact submissions and gallery data.
- `backend-python/` — Flask service for email notifications.
- `legacy/index.html` — archived copy of the former static site.

The Node and Python backends are included for local development. They require separate hosting to serve production API requests; this repository's Pages workflow deploys the frontend only.

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

GitHub Actions builds `frontend/` and deploys `frontend/dist/` to GitHub Pages whenever changes are pushed to `main`, and when manually triggered. Enable **GitHub Actions** as the Pages build and deployment source in the repository's Pages settings. Configure backend hosting and the frontend's API endpoint separately before relying on API-backed features in production.
