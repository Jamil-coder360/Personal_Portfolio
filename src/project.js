import medoveImage from "./assets/image_med.png";
import typo1 from "./assets/typo1.png"
import typo2 from "./assets/typo2.png"
export const medoveProject = {
  id: "medove-fashion-dashboard",
  slug: "medove-fashion-dashboard",
  title: "Medove Fashion",
  subtitle: "Dashboard Design",
  category: "UI Design",
  date: "15 May 2025",
  client: "Medharum",
  role: "UI/UX Designer",                    // optional
  tools: ["Figma", "Webflow"],
  startDate: "09/01/2020",
  endDate: "09/01/2020",

  heroImage:medoveImage,        // or import path

  overview: {
    description: [
      "Minimalism combined with elements of french typography and brutalism helped us to realise the site exactly as we imagined with this client at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution.",

      "Combined with elements of french typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution client, and close collaboration.",

      "That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them want more."
    ],
    highlights: [
      "Advantage",
      "Accomplished",
      "Marketplace startups",
      "SaaS startups"
    ]
  },

  typography: {
    description: "The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a futuristic tone, and a bold, masculine font synonymous with 'construction'. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky 'construction' vibe. We use Chonery for general display and when we want to drive attention to the content, and the technical and geometric Sans font for the body copy and paste overall hierarchy.",

    fonts: [
      {
        label: "Chonery — Display",
        isMono: false
      },
      {
        label: "Sans — Body",
        isMono: true
      }
    ],

    images: [
      { src: typo1, alt: "Typography exploration 1" },
      { src: typo2, alt: "Typography exploration 2" }
    ]
  },

  conclusion: {
    description: [
      "The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a futuristic tone, and a bold, masculine font synonymous with 'construction'. We came up with something in the middle, leaning towards lighter-weighted fonts. We use Chonery for general display and when we want to drive attention to the content, and the technical and geometric Sans font for the body copy and paste overall hierarchy.",

      "The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a futuristic tone, and a bold, masculine font synonymous with 'construction'. We came up with something in the middle, leaning towards lighter-weighted fonts. We use Chonery for general display and when we want to drive attention to the content, and the technical and geometric Sans font for the body copy and paste overall hierarchy."
    ]
  },

  // You can add more sections later (process, research, final screens, etc.)
  sections: [
    // example for future extensibility
    // { type: "images", images: [...] },
    // { type: "process", steps: [...] }
  ],

  relatedProjects: [
    { slug: "basinik-finance-app", title: "Basinik Finance App" },
    { slug: "oxilex-dashboard", title: "Oxilex Dashboard design" }
  ]
};
import basinikImage from "./assets/image-p.png";   // তোমার ইমেজ চেঞ্জ করো

export const basinikProject = {
  id: "basinik-finance-app",
  slug: "basinik-finance-app",
  title: "Basinik",
  subtitle: "Finance Mobile App",
  category: "Mobile App Design",
  date: "08 March 2025",
  client: "Basinik Finance",
  tools: ["Figma", "Framer"],
  startDate: "12/11/2024",
  endDate: "20/02/2025",
  heroImage: basinikImage,

  overview: {
    description: [
      "A modern banking experience designed for Gen Z. Clean interface with dark mode-first approach.",
      "Focus on micro-interactions and smooth user flows for money transfer, investment, and budgeting."
    ],
    highlights: ["Fintech", "Mobile App", "Dark UI", "Micro-interactions"]
  },

  typography: {
    description: "Modern geometric fonts paired with a clean sans-serif for excellent readability.",
    fonts: [
      { label: "Neue Haas Grotesk — Display", isMono: false },
      { label: "Inter — Body", isMono: false }
    ],
    images: [
      { src: typo1, alt: "" },
      { src: "/assets/basinik-typo-2.jpg", alt: "" }
    ]
  },

  conclusion: {
    description: [
      "Basinik successfully combines security with delightful user experience.",
      "The app achieved 40% higher engagement compared to previous version."
    ]
  },

  relatedProjects: [
    { slug: "medove-fashion-dashboard", title: "Medove Fashion Dashboard" },
    { slug: "nova-ecommerce", title: "Nova E-commerce Platform" }
  ]
};
import oxilexImage from "./assets/image-e.png";

export const oxilexProject = {
  id: "oxilex-dashboard",
  slug: "oxilex-dashboard",
  title: "Oxilex",
  subtitle: "Analytics Dashboard",
  category: "Web Dashboard",
  date: "22 January 2025",
  client: "Oxilex Analytics",
  tools: ["Figma", "Webflow"],
  startDate: "05/10/2024",
  endDate: "15/01/2025",
  heroImage: oxilexImage,

  overview: {
    description: [
      "Powerful analytics dashboard for marketing teams with real-time data visualization.",
      "Designed with focus on complex data presentation made simple and beautiful."
    ],
    highlights: ["Dashboard", "Data Visualization", "SaaS", "Analytics"]
  },

  typography: {
    description: "Balanced between professional and modern feel using Inter and Satoshi.",
    fonts: [
      { label: "Satoshi — Display", isMono: false },
      { label: "Inter — Body", isMono: false }
    ],
    images: []
  },

  conclusion: {
    description: [
      "Oxilex dashboard helped clients reduce reporting time by 60%.",
      "Clean hierarchy and smart use of color made complex data easily digestible."
    ]
  },

  relatedProjects: [
    { slug: "basinik-finance-app", title: "Basinik Finance App" },
    { slug: "medove-fashion-dashboard", title: "Medove Fashion" }
  ]
};

import novaImage from "./assets/image-e.png";

export const novaProject = {
  id: "nova-ecommerce",
  slug: "nova-ecommerce",
  title: "Nova",
  subtitle: "E-commerce Platform",
  category: "Web Design",
  date: "10 April 2025",
  client: "Nova Store",
  tools: ["Figma", "Framer Motion"],
  startDate: "01/02/2025",
  endDate: "05/04/2025",
  heroImage: novaImage,

  overview: {
    description: [
      "Minimal and luxurious e-commerce experience for premium fashion and lifestyle products.",
      "Emphasis on large imagery, smooth animations and excellent mobile experience."
    ],
    highlights: ["E-commerce", "Fashion", "Luxury UI", "Animations"]
  },

  typography: {
    description: "Elegant serif for headings combined with clean sans for body.",
    fonts: [
      { label: "Playfair Display — Heading", isMono: false },
      { label: "Inter — Body", isMono: false }
    ],
    images: []
  },

  conclusion: {
    description: [
      "Nova delivers a premium shopping experience with attention to every detail.",
      "Conversion rate improved significantly after the redesign."
    ]
  },

  relatedProjects: [
    { slug: "medove-fashion-dashboard", title: "Medove Fashion" },
    { slug: "basinik-finance-app", title: "Basinik" }
  ]
};

export const allProjects = [
  medoveProject,
  basinikProject,
  oxilexProject,
  novaProject
];