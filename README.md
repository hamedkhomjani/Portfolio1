# Hamed Khomjani — Portfolio

Personal portfolio for Hamed Khomjani, a UX/UI designer with frontend development skills. Built around an "Industrial Premium" visual language: near-black surfaces, chrome-silver accents, precise typography, and restrained motion.

**Live site:** https://hamedkhomjani.github.io/Portfolio1/

## Stack

- **React 19** + **Vite 8**
- Custom CSS with design tokens (no UI framework)
- Self-hosted Inter variable font
- Responsive AVIF/WebP imagery generated with Sharp

## Features

- Dark, light, blueprint, and system theme modes with zero-flicker initialization
- Cursor-reactive hero background (grid + spotlight), disabled for reduced motion
- Detailed and compact grid views for selected work, persisted in local storage
- Accessible case-study modals (focus trap, Escape to close, scroll lock)
- Keyboard-accessible navigation with active-section highlighting
- Responsive layout from 320px up
- Open Graph/Twitter metadata, JSON-LD person schema, sitemap, and robots.txt

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173/Portfolio1/
```

Other scripts:

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # ESLint
npm run images   # regenerate optimized project images
npm run og       # regenerate the social sharing card
```

## Project structure

```
design-assets/projects/   Original PNG screenshots (not deployed)
public/projects/          Generated AVIF + WebP derivatives
public/fonts/             Self-hosted Inter variable font
scripts/                  Image and OG-card generation scripts
src/components/           Hero, About, Projects, Skills, Contact, Navigation
src/data/projects.js      Project content and case-study copy
src/hooks/                Theme and scroll-reveal hooks
src/styles/               Design tokens and global styles
```

## Editing project content

All project cards and case studies come from `src/data/projects.js`. Each entry includes:

- `title`, `subtitle`, `role`, `tech`, `description`, `link`
- `image` — base filename of the optimized image, without width or extension
- `caseStudy.contributions` and `caseStudy.outcomes` — bullet lists shown in the modal

## Image pipeline

Source screenshots live in `design-assets/projects/` so the originals are never shipped. To add or replace an image:

1. Add a PNG or JPEG to `design-assets/projects/` using a lowercase slug (for example `my-project.png`).
2. Run `npm run images`.
3. Set `image: 'my-project'` on the project in `src/data/projects.js`.

The script produces `640`, `800`, `1024`, and `1400` pixel-wide AVIF and WebP files in `public/projects/`. The project component serves them through `<picture>` with `srcset`, so browsers download the smallest suitable file (for example, phones at 1.75× DPR pick the 800 px variant instead of 1024 px).

Regenerate the Open Graph image after changing branding:

```bash
npm run og
```

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the site and publishes `dist/` to the `gh-pages` branch on every push to `main`.

`vite.config.js` sets the base path to `/Portfolio1/` for GitHub Pages and `/` when the `NETLIFY` environment variable is present, so the same codebase also deploys to Netlify.

`public/_headers` configures long-lived caching for Netlify (one year, immutable, for the fingerprint-named `/assets` files; 30 days for fonts and project images). GitHub Pages does not support custom headers and uses a short default cache, so repeat visits there will revalidate. If GitHub Pages remains the primary host and repeat-visit speed matters, put Cloudflare in front of it or move primary hosting to Netlify.

`npm run build` also runs `scripts/inline-css.mjs`, which inlines the single generated stylesheet into `index.html`. That removes a render-blocking request and lets the page paint from the first response.

Canonical and social URLs currently point to the GitHub Pages address. Update the `canonical`, `og:url`, `og:image`, `twitter:image`, `robots.txt`, and `sitemap.xml` entries if a custom domain becomes primary.

## Contact

- Email: eng.h.khomjani@gmail.com
- LinkedIn: https://www.linkedin.com/in/hamed-khomjani/
- GitHub: https://github.com/hamedkhomjani
- Behance: https://www.behance.net/hamedkhomjanidesign
