# Dunnett Group — website

Static three-page site for Dunnett Group Consulting Ltd. No build step, no
framework — plain HTML/CSS/JS, so it hosts free anywhere (GitHub Pages,
Cloudflare Pages, Netlify) and is easy to edit.

## Pages
- `index.html` — home / landing
- `services.html` — What We Do (services, support options, packages, case studies)
- `contact.html` — Book a Call / Contact
- `styles.css` — shared styling (single source of truth for the look)
- `script.js` — mobile nav + contact-form handling
- `assets/logo.jpeg` — logo

## Brand
- **Navy** `#1F3A5F` · **Gold** `#C2A14A` · **Olive** `#6B7A3C` · Slate `#4A5568`
- Headings: Montserrat · Body: Open Sans (loaded from Google Fonts)
- Taken from the logo and pricing PDF, per Craig's brief.

## Deploying (the Just Launch workflow)
1. Push this folder to a new GitHub repo.
2. Enable **GitHub Pages** (Settings → Pages → deploy from `main` / root) — or
   connect the repo to **Cloudflare Pages**.
3. Point the GoDaddy domain at the host (CNAME / A records). Add a `CNAME` file
   with the domain if using GitHub Pages.

## ⚠️ Open items before launch
- **Confirm the domain spelling.** Craig's email used both `dunnetgroup.com`
  (one T) and `dunnettgroup.com` (two T). The PDF footer and most emails use
  **dunnettgroup.com** (two T) — confirm which is actually registered before
  pointing DNS. All links in the site currently use two T's.
- **Connect the contact form.** It's front-end only right now. Wire `action="#"`
  in `contact.html` to a real endpoint (Formspree, Netlify Forms, or a GoDaddy
  email form) so submissions reach an inbox. Until then it shows a fallback
  message pointing to the phone/email.
- **Pricing is deliberately NOT on the site** (per Craig — confidential).
  Packages show inclusions only.
- Optional future pages discussed: Meet the Team, News feed.

## Editing
Everything visual lives in `styles.css`. Text edits go straight into the
relevant `.html` file. Keep the header and footer identical across all three
pages for consistency.
