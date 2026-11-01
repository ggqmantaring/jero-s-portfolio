// Site-wide look settings you can tweak by hand. Save the file and the page reloads.

export type EdgeSettings = {
  /**
   * 'ink'      — ragged ink rising into the band above
   * 'straight' — a clean, straight cut
   * 'image'    — your own artwork, set in `image`
   */
  style: 'ink' | 'straight' | 'image';
  /** How tall the edge is, in pixels: on small screens → on wide screens. */
  height: { min: number; max: number };
  /** Settings for style: 'ink'. */
  ink: {
    /** How far the drips reach. 0 = flat line, 70 = default, 120 = very long. */
    dripLength: number;
    /** How close together the drips are. Smaller = wider, calmer drips; bigger = thin, spiky ones. Default 0.07 (try 0.001–0.15). */
    dripDensity: number;
    /** Softness of the drip edges. 0 = crisp, 3 = default, 8 = blurry. */
    softness: number;
    /** Change this number to get a different random drip pattern. */
    pattern: number;
    /** The faint halo around the ink, like ink soaking into paper. */
    halo: { show: boolean; color: string; opacity: number };
  };
  /**
   * Settings for style: 'image'. Put the file in public/images/edges/.
   * Draw it with a transparent top and a solid bottom in the band's color (see each edge below).
   * PNG or SVG, about 2880 px wide.
   */
  image: {
    src: string;
    /** 'stretch' = one image across the full width; 'repeat' = tile it side by side at its own width. */
    fit: 'stretch' | 'repeat';
  };
};

/**
 * The edge where the page content meets the dark contact footer (every page).
 * Band color for a custom image: #0b0c11.
 */
export const footerEdge: EdgeSettings = {
  style: 'ink',
  height: { min: 64, max: 140 },
  ink: {
    dripLength: 120,
    dripDensity: 0.001,
    softness: 8,
    pattern: 1,
    halo: { show: true, color: '#3a2e26', opacity: 0.55 },
  },
  image: {
    src: 'images/edges/footer-edge.png',
    fit: 'stretch',
  },
};

/**
 * The edge where a project page meets its "Related projects" band (darker paper).
 * Starts as a copy of the footer edge; change it independently if you like.
 * Band color for a custom image: #e5dcc8.
 */
export const relatedEdge: EdgeSettings = {
  style: 'straight',
  height: { min: 48, max: 110 },
  ink: {
    dripLength: 120,
    dripDensity: 0.001,
    softness: 8,
    pattern: 4,
    halo: { show: true, color: '#9a8a6a', opacity: 0.35 },
  },
  image: {
    src: 'images/edges/related-edge.png',
    fit: 'stretch',
  },
};

/**
 * The dark hero at the top of the home page. `background` also applies to the
 * dark header of project pages unless `applyToProjectPages` is false.
 */
export const hero = {
  /** The big pixel headline. A small amber block is added at the end automatically. */
  headline: 'Games. Pixels. Words.',
  /** The paragraph under the headline. */
  intro:
    'Jero Mantaring is a writer, pixel artist, and independent game developer, building small worlds out of words, pixels, and sound.',

  /** The solid amber button. `href` can be a section ('#contact', '#work') or any link. */
  primaryButton: { show: true, label: "let's work together", href: '#contact' },
  /** The plain text link next to it. */
  secondaryButton: { show: true, label: 'browse my work', href: '#work' },

  /** The column of stats on the right. The two counts update from the project list automatically. */
  stats: {
    show: true,
    projectsLabel: 'On file',
    fieldsLabel: 'Disciplines',
    statusLabel: 'Status',
    /** Leave empty ('') to hide the status line. */
    status: 'open to new opportunities',
    /** The small pulsing amber square next to the status. */
    pulse: true,
  },

  /** Space above the headline and below the buttons, in pixels on wide screens (smaller on phones). */
  spacing: { aboveHeadline: 150, belowContent: 120 },

  background: {
    /**
     * 'glow'  — the soft blurred blue-and-peach light (current)
     * 'image' — your own artwork, set in `image` below
     * 'solid' — plain dark ink
     */
    style: 'glow' as 'glow' | 'image' | 'solid',

    /** Settings for style: 'glow'. */
    glow: {
      /** The warm light. */
      warm: '#f2bf93',
      /** The cool light. */
      cool: '#2f4abe',
      /** The deep shadow tone. */
      deep: '#1f2a78',
      /** Overall strength, 0 (invisible) to 1. Default 0.9. */
      intensity: 0.9,
      /** Blur in pixels. Lower = sharper shapes. Default 28. */
      blur: 28,
      /** Tilt of the light, in degrees. Default -8. */
      angle: -8,
    },

    /**
     * Settings for style: 'image'. Put the file in public/images/hero/
     * (2880×1800 WebP or JPG, under 500 KB). It's cropped to fill.
     */
    image: {
      src: 'images/hero/hero.webp',
      /** Which part to keep when cropping, e.g. 'center', 'right center', '70% 40%'. */
      position: 'center',
      /** Darkens the image so the text stays readable. 0 = untouched, 0.5 = half dark. */
      darken: 0.35,
    },

    /** Use the same background on the dark header of project pages. */
    applyToProjectPages: true,
  },
};
