// Placeholder content for the home page overview.
// Replace titles/blurbs as real projects are added; `slug` becomes the project page URL.

export type ProjectImage = {
  /** Path inside public/. Omit to show an empty "image coming soon" plate of this size. */
  src?: string;
  caption: string;
  /** Native size in pixels; images are never shown larger than this. */
  width: number;
  height: number;
  /** Columns taken in the 6-column gallery on wide screens. Default 2. */
  span?: 2 | 3 | 6;
};

export type Project = {
  slug: string;
  title: string;
  /** Short label under the title: medium, tool, or form. */
  tag: string;
  /** Thumbnail path inside public/, e.g. 'images/pixel-art/my-sprite.png'. Omit to show a placeholder. */
  thumb?: string;
  /** Describes the thumbnail for screen readers. */
  alt?: string;
  /** Which part of the thumbnail to keep when it's cropped, as CSS object-position. Default 'center'. */
  thumbPosition?: string;
  /** Sound only: track length shown in the list. */
  length?: string;
  /** Writing only: opening line shown in the list. */
  excerpt?: string;
  /** Project page: short description. */
  description?: string;
  /** Project page: tools used, e.g. ['Aseprite']. */
  tools?: string[];
  /** Project page: gallery, in order. */
  images?: ProjectImage[];
  /** Year(s) made, e.g. '2013' or '2024–2025'. Rendered everywhere but hidden by
   *  the `.year` rule in global.css; delete that rule to show them. */
  year?: string;
  /** Project page: main button, e.g. { label: 'Play on itch.io', href: '…' }. */
  link?: { label: string; href: string };
  /** Project page: extra label/value rows beside the title, e.g. Role, Team, Genre. */
  facts?: { label: string; value: string }[];
  /** Project page: awards and features, one line each. */
  awards?: { title: string; detail: string; href?: string }[];
  /** Project page: YouTube video ID (the part after watch?v=), embedded above the gallery. */
  youtube?: string;
  /** Project page: controls, e.g. [{ keys: 'Arrow keys', action: 'Move' }]. */
  controls?: { keys: string; action: string }[];
  /** Project page: short verbatim quotes from players or press ("…" marks a cut). */
  reviews?: { quote: string; author: string; note?: string }[];
  /** Sample entry. Shown only until the category gets its first real project. */
  placeholder?: boolean;
  /** Project page: heading over the reviews. Default 'What players said'. */
  reviewsTitle?: string;
  /** Project page: where the reviews come from, linked under them. */
  reviewsSource?: { label: string; href: string };
};

const mosquito = 'images/pixel-art/Mosquito';
const cats = 'images/pixel-art/Cats';
const man = 'images/pixel-art/Man';
const dirk = 'images/pixel-art/Dirk';
const paladin = 'images/pixel-art/Paladin';
const mumei = 'images/game-development/dear-mumei';
const stars = 'images/game-development/to-the-stars';
const mayoiga = 'images/video-animation/mayoiga';
const ill = 'images/illustrations';
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export type Category = {
  slug: string;
  name: string;
  /** Short name for the index. */
  short: string;
  heading: string;
  intro: string;
  /** thumbs = image grid; list = text-only rows */
  display: 'thumbs' | 'list';
  /** Thumbnail art style and shape for placeholders. */
  art?: 'pixel' | 'game' | 'video' | 'illustration';
  projects: Project[];
};

export const PREVIEW_COUNT = 3;

const allCategories: Category[] = [
  {
    slug: 'pixel-art',
    name: 'Pixel Art',
    short: 'Pixel Art',
    heading: 'Small scenes, built one square at a time.',
    intro:
      'Sprites, tiles, and still scenes drawn in Aseprite, where every pixel is a choice.',
    display: 'thumbs',
    art: 'pixel',
    projects: [
      {
        slug: 'mosquito',
        title: 'Mosquito',
        tag: 'Character & enemy sprites · Aseprite',
        thumb: `${mosquito}/03-pixel-art-test-sprite-attack-gerardo-mantaring.gif`,
        // wide 2:1 GIF; keep the character's body (left of centre) in the square crop
        thumbPosition: '19% center',
        alt: 'Animated pixel art: a bandaged, flower-covered creature with a syringe on its back, attacking',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tools: ['Aseprite'],
        images: [
          { src: `${mosquito}/01-pixel-art-test-sprite-idle-gerardo-mantaring.gif`, caption: 'Test sprite – Idle', width: 1120, height: 640 },
          { src: `${mosquito}/02-pixel-art-test-sprite-healer-gerardo-mantaring.gif`, caption: 'Test sprite – Heal', width: 1120, height: 640 },
          { src: `${mosquito}/03-pixel-art-test-sprite-attack-gerardo-mantaring.gif`, caption: 'Test sprite – Attack', width: 1280, height: 640 },
          { src: `${mosquito}/04-pixel-art-basic-enemy-1-gerardo-mantaring.gif`, caption: 'Basic enemy 1', width: 384, height: 384 },
          { src: `${mosquito}/05-pixel-art-basic-enemy-2-gerardo-mantaring.gif`, caption: 'Basic enemy 2', width: 384, height: 384 },
          { src: `${mosquito}/06-pixel-art-basic-enemy-3-gerardo-mantaring.gif`, caption: 'Basic enemy 3', width: 384, height: 384 },
          { src: `${mosquito}/07-pixel-art-elite-enemy-1-gerardo-mantaring.gif`, caption: 'Elite enemy 1', width: 576, height: 576 },
          { src: `${mosquito}/08-pixel-art-elite-enemy-2-gerardo-mantaring.gif`, caption: 'Elite enemy 2', width: 576, height: 576 },
          { src: `${mosquito}/09-pixel-art-elite-enemy-3-gerardo-mantaring.gif`, caption: 'Elite enemy 3', width: 576, height: 576 },
          { src: `${mosquito}/10-pixel-art-crawler-worm-enemy-1-gerardo-mantaring.gif`, caption: 'Crawler enemy 1', width: 384, height: 384, span: 3 },
          { src: `${mosquito}/11-pixel-art-crawler-worm-enemy-2-gerardo-mantaring.gif`, caption: 'Crawler enemy 2', width: 384, height: 384, span: 3 },
          { src: `${mosquito}/12-pixel-art-boss-enemy-1-gerardo-mantaring.gif`, caption: 'Boss enemy 1', width: 768, height: 768, span: 3 },
          { src: `${mosquito}/13-pixel-art-boss-enemy-2-gerardo-mantaring.gif`, caption: 'Boss enemy 2', width: 768, height: 768, span: 3 },
        ],
      },
      {
        slug: 'paladin',
        title: 'Paladin',
        tag: 'Animated close-up portrait',
        thumb: `${paladin}/01-pixel-art-animation-paladin-close-up-gerardo-mantaring.gif`,
        alt: 'Animated pixel art: an extreme close-up of a wide-eyed paladin with a cross-shaped mark on his face',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        images: [
          { src: `${paladin}/01-pixel-art-animation-paladin-close-up-gerardo-mantaring.gif`, caption: 'Close-up', width: 1320, height: 1080, span: 6 },
        ],
      },
      {
        slug: 'man',
        title: 'Man',
        tag: 'Animated character sprite',
        thumb: `${man}/02-pixel-art-animation-man-sprite-idle-gerardo-mantaring.gif`,
        alt: 'Animated pixel art: a bearded man in a dark open jacket, standing idle',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        images: [
          { src: `${man}/01-pixel-art-animation-man-sprite-gerardo-mantaring.gif`, caption: 'Turnaround – Idle', width: 1920, height: 640, span: 6 },
          { src: `${man}/02-pixel-art-animation-man-sprite-idle-gerardo-mantaring.gif`, caption: 'Idle', width: 640, height: 640 },
          { src: `${man}/03-pixel-art-animation-man-sprite-hair-comb-gerardo-mantaring.gif`, caption: 'Hair comb', width: 640, height: 640 },
          { src: `${man}/04-pixel-art-animation-man-sprite-talk-gerardo-mantaring.gif`, caption: 'Talk', width: 640, height: 640 },
          { src: `${man}/05-pixel-art-animation-man-sprite-talk-gerardo-mantaring.gif`, caption: 'Turnaround – Talk', width: 1920, height: 640, span: 6 },
        ],
      },
      {
        slug: 'cats',
        title: 'Cats',
        tag: 'Animated cat sprites',
        thumb: `${cats}/05-pixel-art-tabby-cat-walking-gerardo-mantaring.gif`,
        alt: 'Animated pixel art: an orange tabby cat walking',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        images: [
          { src: `${cats}/01-pixel-art-ragdoll-cat-idle-gerardo-mantaring.gif`, caption: 'Ragdoll cat – Idle', width: 300, height: 300, span: 3 },
          { src: `${cats}/02-pixel-art-ragdoll-cat-sleeping-gerardo-mantaring.gif`, caption: 'Ragdoll cat – Sleeping', width: 300, height: 300, span: 3 },
          { src: `${cats}/03-pixel-art-thai-cat-idle-gerardo-mantaring.gif`, caption: 'Thai cat – Idle', width: 300, height: 300, span: 3 },
          { src: `${cats}/04-pixel-art-thai-cat-sleeping-gerardo-mantaring.gif`, caption: 'Thai cat – Sleeping', width: 300, height: 300, span: 3 },
          { src: `${cats}/05-pixel-art-tabby-cat-walking-gerardo-mantaring.gif`, caption: 'Tabby cat – Walking', width: 300, height: 300, span: 6 },
        ],
      },
      {
        slug: 'dirk',
        title: 'Dirk',
        tag: 'Animated character sprite',
        thumb: `${dirk}/01-pixel-art-animation-dirk-idle-gerardo-mantaring.gif`,
        alt: 'Animated pixel art: a cat-like character in an orange hood, standing idle',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        images: [
          { src: `${dirk}/01-pixel-art-animation-dirk-idle-gerardo-mantaring.gif`, caption: 'Idle', width: 288, height: 288 },
          { src: `${dirk}/02-pixel-art-animation-dirk-walk-gerardo-mantaring.gif`, caption: 'Walk', width: 288, height: 288 },
          { src: `${dirk}/03-pixel-art-animation-dirk-run-gerardo-mantaring.gif`, caption: 'Run', width: 288, height: 288 },
        ],
      },
    ],
  },
  {
    slug: 'game-development',
    name: 'Game Development',
    short: 'Game Dev',
    heading: 'Games made alone, from puzzle boxes to whole worlds.',
    intro:
      'Independent games designed, drawn, and scored by one person, built in PuzzleScript, Construct 2, RPG Maker, and Unreal Engine 4.',
    display: 'thumbs',
    art: 'game',
    projects: [
      {
        slug: 'dear-mumei',
        title: 'Dear Mumei',
        tag: 'Platformer · Unity · HoloJam #6',
        year: '2025',
        thumb: `${mumei}/cover.gif`,
        alt: 'Dear Mumei title art: letters and envelopes scattered on a wooden desk',
        description: "A gust of wind scatters Mumei's mail. Getting it back may lead her places.",
        tools: ['Unity'],
        link: { label: 'Play on itch.io', href: 'https://lazypeacock.itch.io/holojam-6-project' },
        facts: [
          // from Jero's own jam comment: "I'm just the artist"; he also revamped the tilesheet edges
          { label: 'Role', value: 'Artist' },
          { label: 'Team', value: 'LazyPeacock, emptyhaven (Jero M.), Luca Chuba, Spootie' },
          { label: 'Event', value: 'HoloJam #6' },
          { label: 'Platform', value: 'Browser' },
        ],
        awards: [
          { title: '#4 in Ambience', detail: 'out of 57 entries, HoloJam #6', href: 'https://itch.io/jam/holojam-6/rate/3602143' },
          { title: '#13 Overall', detail: 'out of 57 entries, HoloJam #6', href: 'https://itch.io/jam/holojam-6/rate/3602143' },
        ],
        reviews: [
          {
            quote: "Beautiful game! … Mumei's sprite is super cute and the intro/ending sequences were a really nice touch.",
            author: 'David Wu SoftDev',
            note: 'HoloJam #6 judge',
          },
          {
            quote: 'Wow, what a wonderful game! … The art was very cute, especially the ending screen.',
            author: 'Nyt3Bl4d3',
            note: 'Jam participant',
          },
          {
            quote: 'What a sweet game! I thought the gameplay was solid and the jump puzzles were just right. Great atmosphere too with the nice music and art.',
            author: 'BUNPPANG',
            note: 'Jam participant',
          },
          {
            quote: 'Beautiful game, we’ll miss the little brown owl.',
            author: 'Irvinexcq',
            note: 'Jam participant',
          },
        ],
        reviewsSource: { label: 'Read all comments on the jam page', href: 'https://itch.io/jam/holojam-6/rate/3602143' },
        controls: [
          { keys: 'WASD / Arrow keys', action: 'Move' },
          { keys: 'J / X / Space', action: 'Jump, advance text' },
          { keys: 'Esc', action: 'Pause' },
        ],
        images: [
          { src: `${mumei}/01-screenshot.png`, caption: 'Screenshot – Lorem ipsum', width: 1440, height: 1080, span: 6 },
          { src: `${mumei}/02-screenshot.png`, caption: 'Screenshot – Lorem ipsum', width: 1440, height: 1080, span: 3 },
          { src: `${mumei}/03-screenshot.png`, caption: 'Screenshot – Lorem ipsum', width: 1440, height: 1080, span: 3 },
          { src: `${mumei}/04-screenshot.png`, caption: 'Screenshot – Lorem ipsum', width: 1440, height: 1080, span: 3 },
          { src: `${mumei}/05-screenshot.png`, caption: 'Screenshot – Lorem ipsum', width: 1440, height: 1080, span: 3 },
          { caption: 'Gameplay GIF – coming soon', width: 1440, height: 1080, span: 6 },
        ],
      },
      {
        slug: 'to-the-stars',
        title: 'to the stars',
        tag: 'Puzzle · PuzzleScript',
        year: '2013',
        thumb: `${stars}/cover.png`,
        alt: 'to the stars: a pixel art ship interior with fires, crates and two small figures',
        description:
          'Your wife believed that we belonged to the stars, and so she decided to fly towards the closest one, our Sun! Chasing after her, you find her ship floating aimlessly. Now, you have to track her down in the wreckage of her ship as you go from area to area, playing her music boxes along the way.',
        tools: ['PuzzleScript'],
        link: { label: 'Play on itch.io', href: 'https://emptyhaven.itch.io/to-the-stars' },
        facts: [
          { label: 'Role', value: 'Solo developer' },
          { label: 'Genre', value: 'Sokoban-style puzzle' },
          { label: 'Platform', value: 'Browser' },
        ],
        awards: [
          { title: 'Front Page Feature', detail: 'GameJolt.com' },
          {
            title: 'Featured Game',
            detail: 'IndieGames.com Weblog, Browser Pick',
            href: 'https://web.archive.org/web/20131126104708/http://indiegames.com/2013/11/browser_pick_to_the_stars.html',
          },
        ],
        // verbatim from "Browser Pick: To the Stars by Jero", IndieGames.com, Nov 22 2013
        reviewsTitle: 'What the press said',
        reviews: [
          {
            quote:
              "The rooms aren't as constricting as other PuzzleScript games, with plenty of space to move around and arrange the crates to your heart's desire.",
            author: 'Tim W.',
            note: 'IndieGames.com Browser Pick',
          },
        ],
        reviewsSource: {
          label: 'Read the full IndieGames.com write-up (archived)',
          href: 'https://web.archive.org/web/20131126104708/http://indiegames.com/2013/11/browser_pick_to_the_stars.html',
        },
        controls: [
          { keys: 'Arrow keys', action: 'Move' },
          { keys: 'R', action: 'Restart' },
        ],
        images: [
          { src: `${stars}/01-screenshot.png`, caption: 'Screenshot – Lorem ipsum', width: 950, height: 350, span: 6 },
          { caption: 'Screenshot – coming soon', width: 950, height: 712, span: 3 },
          { caption: 'Screenshot – coming soon', width: 950, height: 712, span: 3 },
        ],
      },
      { slug: 'placeholder-rpg', title: 'Placeholder RPG', tag: 'RPG · RPG Maker', placeholder: true },
      { slug: 'placeholder-platformer', title: 'Placeholder Platformer', tag: 'Action · Construct 2', placeholder: true },
      { slug: 'placeholder-3d-prototype', title: 'Placeholder 3D Prototype', tag: 'Exploration · Unreal Engine 4', placeholder: true },
    ],
  },
  {
    slug: 'video-animation',
    name: 'Video Editing & Animation',
    short: 'Video & Animation',
    heading: 'Cuts, motion, and timing for clients and for fun.',
    intro:
      'Video editing in Adobe Premiere Pro, from freelance client work to personal animation.',
    display: 'thumbs',
    art: 'video',
    projects: [
      {
        slug: 'mayoiga-mv',
        title: 'Mayoiga',
        tag: 'Fan-made music video',
        year: '2024',
        thumb: `${mayoiga}/thumb.jpg`,
        alt: 'Still from the Mayoiga music video: an illustrated girl in a wide brown hat in front of a field of yellow flowers',
        description:
          'A fan-made music video for "Mayoiga" by Hitsujibungaku, featuring the VTuber Neppienep, with English subtitles.',
        youtube: '8I_Kps2f8dk',
        link: { label: 'Watch on YouTube', href: 'https://www.youtube.com/watch?v=8I_Kps2f8dk' },
        facts: [
          { label: 'Role', value: 'Direction, Storyboard, Illustration, Animation & Compositing' },
          { label: 'Song', value: 'Mayoiga — Hitsujibungaku' },
          { label: 'Featuring', value: 'Neppienep, Vtuber' },
          { label: 'Length', value: '5:21' }, 
        ],
      },
      { slug: 'placeholder-client-edit', title: 'Placeholder Client Edit', tag: 'Freelance edit · Premiere Pro', placeholder: true },
      { slug: 'placeholder-animation', title: 'Placeholder Animation', tag: 'Short animation', placeholder: true },
      { slug: 'placeholder-trailer', title: 'Placeholder Game Trailer', tag: 'Trailer edit', placeholder: true },
      { slug: 'placeholder-music-video', title: 'Placeholder Music Video', tag: 'Music video', placeholder: true },
    ],
  },
  {
    slug: 'illustrations',
    name: 'Illustrations',
    short: 'Illustrations',
    heading: 'Drawings, zines, and the people in them.',
    intro:
      'Illustration and graphic design since 2010, including zines drawn and self-published in Photoshop and MediBang Paint Pro.',
    display: 'thumbs',
    art: 'illustration',
    projects: [
      {
        slug: 'neppie',
        title: 'Neppie',
        tag: 'Fan art · Animated illustrations',
        thumb: `${ill}/Neppie/04-illustration-neppie-fan-art-assertive-mantaring.png`,
        alt: 'Fan art of Neppienep: a girl in a blue bunny-eared cap and overalls, standing with arms out',
        description: `Fan art of the VTuber Neppienep.`,
        tools: ['MediBang Paint Pro'],
        images: [
          { src: `${ill}/Neppie/01-illustration-neppie-fan-art-rawr-mantaring.gif`, caption: 'Rawr', width: 1920, height: 1080, span: 3 },
          { src: `${ill}/Neppie/02-illustration-neppie-fan-art-tap-mantaring.gif`, caption: 'Tap', width: 1920, height: 1080, span: 3 },
          { src: `${ill}/Neppie/03-illustration-neppie-fan-art-yap-mantaring.gif`, caption: 'Yap', width: 1920, height: 1080, span: 3 },
          { src: `${ill}/Neppie/04-illustration-neppie-fan-art-assertive-mantaring.png`, caption: 'Assertive', width: 534, height: 630, span: 3 },
        ],
      },
      {
        slug: 'travel-notebook',
        title: 'Travel Notebook',
        tag: 'Ink sketches · Canada',
        thumb: `${ill}/Travel-notebook/01-illustration-portraits-travel-canada-gerardo-mantaring.jpg`,
        alt: 'Sketchbook page of ink portraits of strangers on a train, each with a handwritten label',
        description: `Portraits of fellow passengers, sketched in ink while travelling in Canada.`,
        tools: ['Pen and paper'],
        images: [
          { src: `${ill}/Travel-notebook/01-illustration-portraits-travel-canada-gerardo-mantaring.jpg`, caption: 'Portraits on the train', width: 669, height: 944, span: 6 },
        ],
      },
      {
        slug: 'journey',
        title: 'Journey',
        tag: 'Oil painting · Fan art',
        thumb: `${ill}/Journey/01-oil-painting-Journey-fan-art-gerardo-mantaring.jpg`,
        thumbPosition: '62% center',
        alt: 'Oil painting: a small red-robed traveller crossing a snowy slope between dark towering pillars',
        description: `An oil painting inspired by the game Journey.`,
        tools: ['Oil on canvas'],
        images: [
          { src: `${ill}/Journey/01-oil-painting-Journey-fan-art-gerardo-mantaring.jpg`, caption: 'Journey fan art', width: 670, height: 502, span: 6 },
        ],
      },
      {
        slug: 'bus-ride',
        title: 'Bus Ride',
        tag: 'Digital illustration',
        thumb: `${ill}/Bus-ride/01-illustration-bus-ride-sunrise-gerardo-mantaring.jpg`,
        thumbPosition: '55% center',
        alt: 'Illustration: a young man in a yellow jacket and earphones looking out of a bus window',
        description: lorem,
        images: [
          { src: `${ill}/Bus-ride/01-illustration-bus-ride-sunrise-gerardo-mantaring.jpg`, caption: 'Awake', width: 799, height: 599, span: 3 },
          { src: `${ill}/Bus-ride/02-illustration-bus-ride-sunrise-gerardo-mantaring.jpg`, caption: 'Asleep at sunrise', width: 800, height: 599, span: 3 },
        ],
      },
      {
        slug: 'tango',
        title: 'Tango',
        tag: 'Animation study',
        thumb: `${ill}/Tango/01-animation-study-tango-dancing-gerardo-mantaring.gif`,
        alt: 'Animated line drawing of a simple figure dancing the tango',
        description: `An animation study of tango movement. ${lorem}`,
        images: [
          { src: `${ill}/Tango/01-animation-study-tango-dancing-gerardo-mantaring.gif`, caption: 'Tango dancing', width: 336, height: 252, span: 6 },
        ],
      },
      { slug: 'placeholder-zine', title: 'Placeholder Zine', tag: 'Self-published zine', placeholder: true },
      { slug: 'placeholder-portrait', title: 'Placeholder Portrait', tag: 'Digital illustration', placeholder: true },
      { slug: 'placeholder-poster', title: 'Placeholder Poster', tag: 'Graphic design', placeholder: true },
      { slug: 'placeholder-comic', title: 'Placeholder Comic', tag: 'Comic pages', placeholder: true },
    ],
  },
  {
    slug: 'writing',
    name: 'Writing',
    short: 'Writing',
    heading: 'Poems, stories, and the occasional comic script.',
    intro:
      'Poetry, creative nonfiction, and fiction both realist and speculative, shaped by years of writing workshops.',
    display: 'list',
    projects: [
      { slug: 'insects', title: 'Insects', tag: 'Poetry collection', excerpt: 'Placeholder: an opening line from the collection goes here.', placeholder: true },
      { slug: 'placeholder-essay', title: 'Placeholder Essay', tag: 'Creative nonfiction', excerpt: 'Placeholder: the first sentence of the essay goes here.', placeholder: true },
      { slug: 'placeholder-story', title: 'Placeholder Story', tag: 'Speculative fiction', excerpt: 'Placeholder: the opening line of the story goes here.', placeholder: true },
      { slug: 'placeholder-comic-script', title: 'Placeholder Comic Script', tag: 'Comic book script', excerpt: 'Placeholder: the first panel description goes here.', placeholder: true },
    ],
  },
  {
    slug: 'sound',
    name: 'Sound Design & Composition',
    short: 'Sound',
    heading: 'Chiptunes, soundscapes, and the noises in between.',
    intro:
      'Original music and sound effects, written in FL Studio and Famitracker and shaped in Audacity.',
    display: 'list',
    projects: [
      { slug: 'placeholder-chiptune', title: 'Placeholder Chiptune', tag: 'Chiptune · Famitracker', length: '02:41', placeholder: true },
      { slug: 'placeholder-game-score', title: 'Placeholder Game Score', tag: 'Original soundtrack · FL Studio', length: '04:12', placeholder: true },
      { slug: 'placeholder-ambience', title: 'Placeholder Ambience', tag: 'Soundscape · Audacity', length: '03:05', placeholder: true },
      { slug: 'placeholder-sfx-pack', title: 'Placeholder SFX Pack', tag: 'Sound effects', length: '01:20', placeholder: true },
    ],
  },
];

// Placeholders fill a category only until its first real project is added; then they all drop out.
export const categories: Category[] = allCategories.map((c) =>
  c.projects.some((p) => !p.placeholder)
    ? { ...c, projects: c.projects.filter((p) => !p.placeholder) }
    : c,
);

export const contact = {
  email: 'jero@mantaring.org',
  links: [
    { label: 'itch.io', href: 'https://emptyhaven.itch.io/' },
    { label: 'Carrd', href: 'https://jero-portfolio.carrd.co/' },
  ],
};
