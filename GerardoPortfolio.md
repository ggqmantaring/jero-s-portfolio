# Gerardo Portfolio — Project Notes

Portfolio site for **Gerardo Mantaring** (he/him). Astro 7, to be hosted on GitHub Pages.
Run locally: `npm run dev` → http://localhost:4321. `README.md` covers setup and deploying.

---

## About Gerardo

**Roles:** writer, pixel artist, independent game developer, illustrator, sound designer, video editor, teacher/tutor. From the Philippines. His itch.io handle is **emptyhaven**. Whenever it's mentioned, write it as **emptyhaven (Gerardo M.)**. Press in 2013 credited him as "Jero".

**Education**
- BS Interactive Entertainment & Multimedia Computing, De La Salle–College of Saint Benilde (May 2017 – July 2024)
- BA Creative Writing, UP Diliman (July 2008 – April 2014). Poetry, creative nonfiction, realist and speculative fiction, YA, comic book writing, workshop.
- Online courses: *Video Games and Learning*, UW–Madison (Dec 16, 2013); *Introduction to Art: Concepts & Techniques*, Penn State (July 16, 2013)

**Experience**
- Illustration and graphic design since 2010; self-published zines for 3 years. Photoshop, Aseprite, MediBang Paint Pro
- Indie game development since 2020. Construct 2, PuzzleScript, RPG Maker, Unreal Engine 4
- Sound design and composition since 2019. FL Studio, Audacity, Famitracker
- Video editing (professional and freelance) since 2020. Premiere Pro
- English teacher, Xavier School Nuvali, May 2015 – March 2016 (Grades 8–9); moderator of the English Creative Writing Club. Also tutors (goes on the About page).

**Awards & features**
- First Place, Poetry — 2013 Amelia Lapeña Bonifacio Award, for *Insects*
- Front Page Feature — GameJolt, 2013, for *to the stars*
- Featured Game — IndieGames.com Weblog Browser Pick, Nov 2013, for *to the stars*

**Contact:** jero@mantaring.org · emptyhaven.itch.io · jero-portfolio.carrd.co

---

## Design decisions

**Look and feel**
- Dark ink hero and footer, cream content in between. No light/dark toggle.
- Fonts: **Geist Pixel** for headings, **Geist Mono** for body (the user's choice; the design-hook warning about them is suppressed).
- Colors (`global.css`): ink `#0b0c11`, navy `#1f2a78`, cream `#efe8da`, peach `#f2bf93`, amber `#e8963f`.
- Inspiration is in `../inspiration-library`: ink on paper, a navy/cream diptych, a blue-and-peach light leak, a pixel hero in the style of Depththread, and a ledger layout.
- Buttons: solid amber with ink text; on hover they turn ink (#0b0c11, the hero's darkest color) with amber text and an amber border.
- Hero background: a soft blurred glow until the user's custom image arrives. Light-leak, horizon and dot variants were rejected.
- The hero meets the content with a straight edge. The ragged ink edge (`InkEdge.astro`) appears only above the footer. A film grain covers the whole page.
- Every band shares one content column: 1320px max minus the gutters (the `.wrap` class).
- Wordmark: "GERARDO MANTARING ■", subtitle "Words · Pixels · Games".

**Home page**
- Hero: placeholder tagline "small worlds, made by hand" with a third-person bio; the user is rewriting both. Buttons: "let's work together" (to contact) and "browse my work". Stats: project count (big), number of fields, and "open to new opportunities". The counts come from the data automatically.
- Ledger layout: a sticky numbered index on the left, which becomes a sticky dropdown bar on phones.
- Sections: 01 Pixel Art · 02 Game Dev · 03 Video & Animation · 04 Sound · 05 Writing · 06 Illustrations · 07 About (teaser).
- Each section shows 3 projects, then "See all" (when there are more) links to the category page. On phones the thumbnails become a swipeable row. Sound and Writing are text-only lists.
- Footer: "let's work together", contact details, "© 2010–[build year] Gerardo Mantaring. All rights reserved."

**Project pages** (`src/pages/[category]/[project].astro`, one template for all)
- Breadcrumbs (Home / Category / Project) → dark header (title, tag, description, details) → gallery of white plates captioned "Fig. 01" → previous/next links → footer.
- The gallery is 6 columns; each image's `span` sets its width: 2 = three per row, 3 = two per row, 6 = full width. Images never show above their native size, and pixel art stays crisp.
- An image with no `src` shows a dashed "Image coming soon" plate. "Pieces" counts only real images.
- **Years are hidden:** `year` is rendered everywhere but hidden by `.year { display: none }` in `global.css`. Delete that rule to show them.
- Optional fields, each shown only when filled in:
  - `link`: "Play on itch.io ↗", shown in the header **and** over the bottom-left of the first image. Games link out; they aren't embedded.
  - `facts`: Role, Team, Event…
  - `awards`: each line gets a glowing pixel-trophy icon. Jam rankings count, worded like "#4 in Ambience — out of 57 entries, HoloJam #6".
  - `reviews`, `reviewsTitle` and `reviewsSource`: short **verbatim** quotes with author and note, "…" marking any cut. They sit **right under the first image**, with the rest of the gallery after them. The title defaults to "What players said"; to the stars uses "What the press said".
  - `controls`: "How to play"
  - `youtube`: a video ID, embedded 16:9 above the gallery (privacy-friendly youtube-nocookie). Pages without images hide "Pieces".
  - `thumbPosition`: which part of the thumbnail to keep when it's cropped
- Gallery images render through `Plate.astro`. Game pages hide the "Pieces" count.

---

## Content and files

- **All content lives in `src/data/work.ts`.** Images go in `public/images/<category>/<project>/`, numbered `01-`, `02-`, and so on.
- **Formats:** PNG for stills, GIF for animations. For gameplay clips, MP4 is preferred (no sound, 3–10 s, usually 5–10× smaller than GIF). If using GIF: ≤ 960px wide, about 15 fps, 3–6 s, under 2 MB (4 MB at most).
- Pixel art GIFs so far are exported already enlarged and have transparent backgrounds.

**Project status** (pixel art descriptions are still lorem ipsum)

| Project | Category | Images | Still missing |
| --- | --- | --- | --- |
| Mosquito | Pixel Art | 13 GIFs; thumbnail = Attack, cropped | Description |
| Cats | Pixel Art | 5 GIFs | Description, tool |
| Man | Pixel Art | 5 GIFs | Description, tool, confirm captions |
| Dirk | Pixel Art | 3 GIFs | Description, tool |
| Paladin | Pixel Art | 1 GIF (opaque) | Description, tool |
| Dear Mumei | Game Dev | Cover GIF + 5 screenshots (from itch.io); jam ranks #4 Ambience, #13 Overall of 57; 4 player quotes; real one-line description | Team roles and links, captions, gameplay clip, confirm year (2025) |
| Mayoiga (MV) | Video | YouTube embed 8I_Kps2f8dk + thumbnail; fan MV of Hitsujibungaku's song featuring Neppienep, Jun 2024, 5:21, on his "Jero" channel | Role, tools, real description |
| Neppie | Illustrations | 3 GIFs + 1 PNG (fan art of Neppienep); MediBang Paint Pro | Description, confirm captions (Rawr/Tap/Yap/Assertive) |
| Travel Notebook | Illustrations | 1 ink sketchbook page (train, Canada); pen and paper | Description |
| Journey | Illustrations | 1 oil painting (fan art of the game Journey); oil on canvas | Description |
| Bus Ride | Illustrations | 2 JPGs (awake / asleep); image 1 is also the About portrait | Description, confirm captions |
| Tango | Illustrations | 1 GIF animation study (336×252) | Description; maybe move to Video & Animation |
| to the stars | Game Dev | Cover + 1 screenshot (from itch.io); real description; IndieGames.com quote (Tim W., Nov 22 2013) | 2+ screenshots, gameplay clip, a GameJolt feature link |

Gerardo was the **artist** on Dear Mumei; his own jam comment says so, and he also revamped the tilesheet edges. Dear Mumei's other jam comments are at itch.io/jam/holojam-6/rate/3602143 if more quotes are needed.

**Placeholders** are flagged `placeholder: true` in `work.ts`. A category shows them only until its first real project is added, and then they all drop out automatically (done in Pixel Art, Game Dev, Video & Animation, and Illustrations). The hero and index counts include real projects only. *Insects* (Writing) is a real title, but it's flagged as a placeholder until it gets real content; remove its flag when it does.

---

## To do

**Waiting on the user**
- Custom hero background: 2880×1800 WebP or JPG, ≤ 500 KB, in `public/images/hero/`, with a calm left side (it's cropped to fill). Decide: one image for every page or one per page? A phone crop is optional (1170×2532).
- Hero tagline and copy
- The missing project details in the table above (see the question prompts the user received)
- Real projects for the other categories
- Decide whether to show years, and whether to keep the ink edge above the footer

**Next to build**
- Revise the home-page About section: copy, portrait, highlights, layout
- About page: full bio, tutoring, education, awards
- Design the category ("See all") pages; they're still basic stubs with no nav or footer
- Video support in the gallery (MP4/WebM: autoplay, muted, loop), once the first clip arrives

**Later**
- Pixel art exported at 1×: add a per-image display scale, then re-export the heavy GIFs (Mosquito "Heal" 746 KB, "Attack" 307 KB, which is also the home thumbnail)
- Favicon
- GitHub repo, `site` and `base` in `astro.config.mjs`, and the deploy workflow
