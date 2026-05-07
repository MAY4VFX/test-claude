# Influencer Landing

A single-page lifestyle / travel / fashion influencer site built with Next.js 15 (App Router), Tailwind CSS v4, and TypeScript. Designed as a fast, SEO-friendly landing page that's easy to personalize and deploy on Vercel.

## Tech stack

- Next.js 15 (App Router, Server Components)
- Tailwind CSS v4 (CSS-first theme via `@theme inline`)
- TypeScript
- `next/font/google` — Playfair Display + Inter
- Unsplash for placeholder imagery

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Customize your persona

All persona content (name, bio, photos, stats, social links, email) lives in a single file:

```
src/data/profile.ts
```

Edit that file and the site updates everywhere — Hero, About, Navbar, Footer, page metadata, and OpenGraph tags.

## Project structure

```
src/
  app/
    layout.tsx        # Fonts, metadata, root shell
    page.tsx          # Composes Hero + About + Footer
    globals.css       # Tailwind + theme tokens (colors, fonts)
  components/
    Navbar.tsx        # Sticky transparent → blurred header (client)
    Hero.tsx          # Full-viewport hero with CTAs
    About.tsx         # Portrait + bio + stat cards
    Footer.tsx        # Social links + contact
  data/
    profile.ts        # Single source of truth for persona content
```

## Build

```bash
npm run build
npm run start
```

## Deploy on Vercel

Push to GitHub and import the repo at <https://vercel.com/new>. No extra configuration is required.
