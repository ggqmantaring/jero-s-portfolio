// Content for the About section on the home page. Edit freely; the layout picks it up.

export const about = {
  /** Section heading. */
  heading: 'What Jero brings to a team.',

  /** Short pitch, written for studios and employers. */
  pitch:
    'A multidisciplinary game artist and developer with a writer’s training: Jero designs characters, animates sprites, builds and ships small games, writes, and scores them. Comfortable working solo end-to-end or as the artist on a jam team.',

  /** Skills, each with the year he started (shown as "since …"). Leave `since` empty to hide it. */
  skills: [
    { name: 'Pixel art & sprite animation', detail: 'Characters, enemies, idle/walk/attack cycles', since: '' },
    { name: 'Illustration & character design', detail: 'Digital, ink, and oil; self-published zines', since: '2010' },
    { name: 'Game design & development', detail: 'Puzzle and platformer games, solo and in jam teams', since: '2013' },
    { name: 'Writing & narrative', detail: 'Poetry, fiction, comic scripts, game dialogue', since: '2008' },
    { name: 'Sound design & chiptune', detail: 'Original music and sound effects for games', since: '2019' },
    { name: 'Video editing & motion', detail: 'Freelance and personal edits, music videos', since: '2020' },
  ],

  /** Tools, grouped. */
  tools: [
    { group: 'Art', items: ['Aseprite', 'Adobe Photoshop', 'MediBang Paint Pro', 'Oil & ink'] },
    { group: 'Game engines', items: ['Unity', 'Unreal Engine 4', 'Construct 2', 'RPG Maker', 'PuzzleScript'] },
    { group: 'Audio', items: ['FL Studio', 'Famitracker', 'Audacity'] },
    { group: 'Video', items: ['Adobe Premiere Pro'] },
  ],

  /** Degrees. */
  education: [
    { title: 'BS Interactive Entertainment & Multimedia Computing', where: 'De La Salle–College of Saint Benilde' },
    { title: 'BA Creative Writing', where: 'University of the Philippines Diliman' },
  ],

  /** Awards and features. Leave the list empty ([]) to hide this block. */
  recognition: [
    { title: '#4 Ambience, #13 Overall', where: 'HoloJam #6 (57 entries), for “Dear Mumei”' },
    { title: 'Featured Game & Front Page Feature', where: 'IndieGames.com and GameJolt, for “to the stars”' },
    { title: 'First Place, Poetry', where: 'Amelia Lapeña Bonifacio Award, for “Insects”' },
  ],
};
