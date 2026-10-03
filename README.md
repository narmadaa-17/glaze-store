# Glaze: E-commerce Catalog (React + Vite + React Router)

## Run locally
    npm install
    npm run dev          # http://localhost:5173
    npm run build && npm run preview

## Deploy
Vercel: push to GitHub, then Add New Project and import the repo (Vite is auto-detected; vercel.json handles SPA routing).
Netlify: Add site > import repo (netlify.toml sets build `npm run build`, publish `dist`, and the SPA redirect).
Render: New > Static Site. Build `npm run build`, publish dir `dist`, add a Rewrite rule `/*` to `/index.html`.
CLI: `npx vercel --prod` or `npx netlify deploy --prod --dir=dist`

## Performance
- Route-level code splitting (React.lazy) plus a vendor chunk
- Minified JS and CSS from the Vite build
- Images use lazy loading and explicit width/height. For real photos, export WebP/AVIF at ~600px wide.
- Run Lighthouse on the live URL and aim for 90+.
