# Gerardo Mantaring — Portfolio

Built with [Astro](https://astro.build). Headings in Geist Pixel, body in Geist Mono.

## Run it locally

Node.js (LTS) must be installed. Then, from this folder:

```bash
npm install      # first time only
npm run dev      # http://localhost:4321, reloads as you edit
npm run build    # production build into dist/
```

## Where things live

| What | File |
| --- | --- |
| Projects, categories, contact details | `src/data/work.ts` |
| Home page (ledger index, About teaser, contact) | `src/pages/index.astro` |
| Category pages (`/pixel-art`, `/writing`, …) | `src/pages/[category].astro` |
| Hero | `src/components/Hero.astro` |
| One category section on the home page | `src/components/WorkSection.astro` |
| Placeholder thumbnails | `src/components/Thumb.astro` |
| Colors, fonts, spacing | `src/styles/global.css` |
| Images | `public/images/` |

## Adding a project

1. Put the thumbnail in `public/images/<category>/`, e.g. `public/images/pixel-art/forest-tiles.png`.
2. In `src/data/work.ts`, find the category and add an entry to its `projects` list:

   ```ts
   {
     slug: 'forest-tiles',                        // URL: /pixel-art/forest-tiles
     title: 'Forest Tiles',
     tag: 'Environment tiles · Aseprite',
     thumb: 'images/pixel-art/forest-tiles.png',  // leave out to show a placeholder
     alt: 'A tileset of mossy stones and pine trees',
   },
   ```

   Sound entries take `length: '02:41'` instead of a thumbnail; Writing entries take `excerpt: 'Opening line…'`.
3. Order in the list = order on the site. The home page shows the first three; "See all" appears by itself when there are more. The project counts in the hero update on their own.

Thumbnails are cropped to fill each category's shape: Pixel Art 1:1, Games 4:3, Video 16:9, Illustrations 4:5. Pixel art stays crisp when scaled up.

## Publishing on GitHub Pages

1. Create a GitHub repository and push this folder to it.
2. In `astro.config.mjs`, set `site` (and `base` if the repo isn't named `<username>.github.io`).
3. In the repo: **Settings → Pages → Source: GitHub Actions**.
4. Add the deploy workflow from Astro's guide:
   https://docs.astro.build/en/guides/deploy/github/
