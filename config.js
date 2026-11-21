const CONFIG = {
  studio: {
    nameLeft: "ATA",
    nameRight: "YAĞIZ EDİRNE",
    taglines: [
      "My work is shaped by a strong interest in how materials and processes influence not just how a product functions, but how it is perceived and experienced. I approach design as a balance between making and understanding, combining hands-on material exploration with research into user behavior, perception, and needs.",
      "Alongside my design practice, studying psychology has allowed me to look deeper into how people interact with objects, helping me design with more intention and sensitivity.",
    ],
  },

  hero: {
    lines: [],
    stamp: "",           // ← large word at the bottom of the hero
    image: "",           // ← main picture; empty = black placeholder (was "images/hero-leaves.jpg")
    video: "videos/hero.mp4",         // ← main video (autoplays muted, loops); empty = use the picture / black block
    poster: "images/hero-poster.jpg", // ← still frame shown while the video loads
    credits: [
    ],
  },

  // Each gallery entry:  image, position / zoom / origin (how it is cropped in the box),
  // label (name), category, duration (shown on the work's own page), description (short, shown on hover),
  // pages (the portfolio pages of this work, shown one under the other in scroll order on its own page),
  // story (alternative: the work's own page, row by row: each row has `texts` and the `images` that belong to them, shown side by side;
  //   `heading` = a title above the row, `stack: true` = pictures full width with the text underneath, `caption` = small text under the pictures; a spread with `full` is one full-width picture),
  // sections (list of {title, text}: simple titled text for the work's own page; blank lines start a new paragraph),
  // details (longer text, string or list of paragraphs, shown on the work's own page),
  // media (pictures and videos shown one after another on the work's own page, with arrows; a .mp4 path is a video)
  // images (extra pictures for the work's own page, after the main one, when media is not set)
  // inside spreads, each picture has `w` (its width in the portfolio, out of a 900 wide slide) so it keeps the same proportion on the page
  projects: [
    {
      title: "WORKS",
      client: "CONCEPT PRODUCT DESIGN",
      year: "2025",
      gallery: [
        {
          image: "images/product-design-02.jpg",
          media: ["images/product-design-02.jpg"],
          position: "91% 50%",
          label: "Hyacinth",
          category: "Concept product design",
          duration: "1 month",
          description: "A hologramic flower sculpture that acts both as an anchor and interrupter for the creative.",
          pages: ["images/pages/page-16.jpg", "images/pages/page-17.jpg", "images/pages/page-18.jpg", "images/pages/page-19.jpg"]
        },
        {
          image: "images/product-design-01.jpg",
          media: ["images/product-design-01.jpg"],
          position: "52% 50%",
          label: "Remembrance",
          category: "Lighting design",
          duration: "1 month",
          description: "Light, which usually reveals the world around it, here reveals the cost of the object itself.",
          pages: ["images/pages/page-05.jpg", "images/pages/page-06.jpg", "images/pages/page-07.jpg", "images/pages/page-08.jpg", "images/pages/page-09.jpg"]
        },
        {
          image: "images/product-design-03.jpg",
          media: ["images/product-design-03.jpg"],
          position: "19% 50%",
          label: "Capture",
          category: "Camera design",
          duration: "1 month",
          description: "A camera that could also be worn as an accessory.",
          pages: ["images/pages/page-11.jpg", "images/pages/page-12.jpg", "images/pages/page-13.jpg", "images/pages/page-14.jpg"]
        },
        {
          image: "images/product-design-04.jpg",
          media: ["images/product-design-04.jpg"],
          position: "48% 50%",
          label: "Cognito",
          category: "Workflow device design",
          duration: "1 month",
          description: "The solution is not another screen, but a calm desk object.",
          pages: ["images/pages/page-21.jpg", "images/pages/page-22.jpg", "images/pages/page-23.jpg", "images/pages/page-24.jpg", "images/pages/page-25.jpg", "images/pages/page-26.jpg"]
        },
        { image: "images/other-works-01.jpg", media: ["videos/other-works-01.mp4", "images/other-works-01.jpg"], position: "5% 50%", zoom: 2, origin: "50% 12%", label: "Angel, sitting. (2025)", category: "Digital painting", description: "Add your description here" },
        {
          image: "images/monsters/all.jpg",
          position: "50% 50%",
          label: "Mythological Creatures of Ancient Greece",
          category: "Sculpture",
          description: "Sculptures made from wood, paper and rope.",
          pagesGap: 12,
          pages: [
            [{ src: "images/monsters/01-argus.jpg", caption: "Argus" }, { src: "images/monsters/02-medusa.jpg", caption: "Medusa" }],
            { src: "images/monsters/03-pegasus.jpg", caption: "Pegasus" },
            [{ src: "images/monsters/04-sirens.jpg", caption: "Sirens" }, { src: "images/monsters/05-harpies.jpg", caption: "Harpies" }],
            { src: "images/monsters/08-minotaur.jpg", caption: "Minotaur" },
            [{ src: "images/monsters/07-cyclops.jpg", caption: "Cyclops" }, { src: "images/monsters/06-scylla.jpg", caption: "Scylla" }],
            { src: "images/monsters/09-cerberus.jpg", caption: "Cerberus" },
            [{ src: "images/monsters/10-centaurs.jpg", caption: "Centaurs" }, { src: "images/monsters/11-hydra.jpg", caption: "Hydra" }],
            [{ src: "images/monsters/12-sphinx.jpg", caption: "Sphinx" }, { src: "images/monsters/13-echidna.jpg", caption: "Echidna" }]
          ]
        },
        {
          image: "images/product-design-05.jpg",
          media: ["images/product-design-05.jpg"],
          position: "50% 50%",
          label: "Flower Bouquet Chocolate Packaging",
          category: "Food packaging design",
          duration: "1 month",
          description: "Inspired by the classic gift for Mother’s Day- the flower bouquet- this nostalgic packaging combines chocolate with a floral twist, offering two gifts in one packaging.",
          pages: ["images/packaging/page-01.jpg", "images/packaging/page-02.jpg", "images/packaging/page-03.jpg"]
        },
        {
          image: "images/textile-sample.jpg",
          media: ["images/textile/page-01.jpg"],
          position: "50% 50%",
          zoom: 1.5,
          origin: "50% 50%",
          label: "Roots",
          category: "Textile design",
          description: "What is taken, should be given back.",
          pages: ["images/textile/page-03.jpg", "images/textile/page-04.jpg", "images/textile/page-05.jpg", "images/textile/page-06.jpg", "images/textile/page-07.jpg", "images/textile/page-08.jpg", "images/textile/page-09.jpg", "images/textile/page-10.jpg", "images/textile/page-11.jpg", "images/textile/page-12.jpg", "images/textile/page-13.jpg", "images/textile/page-14.jpg", "images/textile/page-17.jpg"]
        },
        {
          image: "images/basin-01.jpg",
          media: ["images/basin-01.jpg"],
          position: "50% 50%",
          label: "RuralRidge Pedestal Basin",
          category: "Sanitaryware design",
          duration: "1 month",
          description: "Designed for simplicity and practicality, this Pedestal Basin blends classical charm with a modern touch, offering a spacious, customizable solution for everyday tasks in traditional or rural homes.",
          pages: ["images/basin/page-02.jpg", "images/basin/page-03.jpg", "images/basin/page-04.jpg"]
        },
        { image: "images/mirror-05.jpg", position: "50% 55%", label: "Mirror No.1", category: "Smoke and silver mirror", description: "Add your description here" },
        {
          image: "images/mirrors/04.jpg",
          media: ["images/mirrors/01.jpg", "images/mirrors/02.jpg", "images/mirrors/03.jpg", "images/mirrors/04.jpg"],
          position: "50% 50%",
          zoom: 2,
          origin: "60% 50%",
          label: "Mirrors No.2",
          category: "Silver mirror",
          description: "Add your description here"
        },
        { image: "images/digital-painting-01.jpg", position: "50% 50%", label: "Untitled", category: "Digital painting", description: "Add your description here" },
        { image: "images/mirror-07.jpg", media: ["images/mirror-07-page.jpg"], position: "50% 50%", zoom: 2.4, origin: "50% 66%", label: "Mirror No.4", category: "Smoke and silver mirror", description: "Add your description here" },
        { image: "images/digital-painting-02.jpg", position: "50% 50%", label: "Untitled", category: "Digital painting", description: "Add your description here" },
        { image: "images/mirror-06-tile.jpg", media: ["images/mirror-06-page.jpg"], position: "50% 50%", label: "Mirror No.3", category: "Smoke and silver mirror", description: "Add your description here" },
        { image: "images/digital-painting-03.jpg", position: "50% 50%", label: "Untitled", category: "Digital painting", description: "Add your description here" },
      ],
    },
  ],

  about: {
    image: "images/about.jpg",   // ← about picture; empty = black placeholder
    quote: {
      lines: [
        "What happened is, we grew lonely",
        "living among the things,",
        "so we gave the clock a face,",
        "the chair a back,",
        "the table four stout legs",
        "which will never suffer fatigue.",
      ],
      author: "Lisel Mueller",
    },
    description: [
      "I'm a third-year Industrial Design student at Özyeğin University in Istanbul, double-majoring in Psychology.",
      "My work explores how materials and processes shape both function and experience, ",
      "combining hands-on making with research into user behavior and perception.",
    ],
    credits: [
      "Contact:",
      "Ata Yağız Edirne",
      "edirneatay@gmail.com",
      "+905319770520",
    ],
  },

  footer: {
    name: "CONTACT ME!",
    meta: [
      "Istanbul, Turkey",
      "2026",
    ],
  },
};
