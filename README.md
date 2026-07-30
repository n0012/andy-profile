# Andy Losier — Profile Site

Public profile site for Andy Losier, built as an application artifact for student-affairs
roles in Colorado higher education. Live at
**https://n0012.github.io/andy-profile/**

## Stack

Vite + React 18 + Tailwind 3.4 + lucide-react. Static build, no backend. Deployed to
GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Develop

```bash
cd site
npm install
npm run dev      # http://localhost:8080
```

`vite.config.js` sets `base: '/andy-profile/'` to match the Pages project subpath. Asset
URLs in `index.html` and `App.jsx` are relative for the same reason — a leading slash
would resolve against the domain root and 404 in production.

## Content

All copy lives in the data arrays at the top of `site/src/App.jsx` (`STATS`, `APPROACH`,
`EXPERIENCE`, `SERVICE`, `HONORS`, `SKILLS`). Edit those, not the JSX.

## What is deliberately not published

The source resume contains material excluded from the public site:

- Home street address — city and state only
- Personal phone number
- Named references and their contact details — replaced with "References available on request"
- Anything else Andy has not explicitly cleared for publication

Source PDFs live in `sources/`, and the working plan lives in `PLAN.md`. Both are
gitignored: they quote the raw resume, so they carry the redacted material verbatim.
This repository is public.
