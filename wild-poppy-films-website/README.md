# Wild Poppy Films

Marketing site for Wild Poppy Films, an independent film production company.

Next.js 14 (App Router) · TypeScript · styled-components · deployed on Vercel.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the EmailJS values
npm run dev                  # http://localhost:3000
```

`npm run build && npm run start` runs the production build locally. Worth doing before
pushing: the production build is what reveals type errors, static-generation problems
and the real image behaviour.

## How it fits together

All content lives in **`src/data.ts`** — films, team members, social links, navigation.
Adding a film there is all that's needed: the films directory, the individual film page,
the sitemap and the static pre-render list are all derived from it.

```
src/
  app/            routes (App Router). Server components: metadata lives here.
  components/     one folder per component: Component.tsx + Component.styled.tsx
    pages/        page-level components, imported by the matching route
  config/site.ts  canonical URL, company name/description - used by metadata & sitemap
  data.ts         all site content
  styles/         theme (colours, breakpoints, spacing) and global styles
  utils/          films lookup, credit formatting, structured data, animations
  _types/         shared TypeScript types
```

Two conventions worth knowing:

- **Styling** is styled-components. Each component has a sibling `.styled.tsx` marked
  `"use client"`. The theme in `src/styles/theme/theme.tsx` holds every colour and
  breakpoint — prefer `theme.colors.*` over literal hex values.
- **Page metadata** (titles, descriptions, social cards) must be exported from the route
  file in `src/app/`, not the page component, because only the route is a server
  component.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `node scripts/optimize-images.mjs` | Report on oversized images in `src/images` (add `--write` to re-encode them in place) |
| `node scripts/generate-icons.mjs` | Regenerate `public/` favicon, app icons and the Open Graph card from the logo artwork |

Run `optimize-images` after adding photos — camera originals are typically 4 MB+ and
should be capped before being committed.

## Environment variables

See `.env.example`. The EmailJS keys drive the contact form; `NEXT_PUBLIC_SITE_URL` sets
the canonical origin used by metadata, `sitemap.xml` and `robots.txt`, and must be set
in the Vercel project settings for production.
