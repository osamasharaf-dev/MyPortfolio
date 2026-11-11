export type ProjectImage = { src: string; width: number; height: number; mobile: boolean };
export type Project = {
  slug: string;
  name: string;
  short: string;
  cat: string;
  year: string;
  role: string;
  live: string;
  tagline: string;
  summary: string;
  overview: string;
  features: string[];
  metrics: { value: string; label: string }[];
  stack: string[];
  cover: string;
  images: ProjectImage[];
};

export const CATEGORIES = ["All", "E-commerce", "Brands", "Companies", "Portfolios"] as const;

export const PROJECTS: Project[] = [
  {
    "slug": "milestone",
    "name": "Milestone Store",
    "short": "Milestone",
    "cat": "E-commerce",
    "year": "2026",
    "role": "Full-Stack Engineer",
    "live": "https://milestone.website",
    "tagline": "A complete online store for a Saudi kitchen-appliance brand.",
    "summary": "A complete e-commerce platform for the Milestone kitchen-appliance brand: 250+ products, customer accounts, online ordering and a central admin dashboard.",
    "overview": "Milestone needed a store that feels premium, loads instantly and is simple for the team to run every day. I built the whole platform end to end: the storefront, the backend and database, customer authentication and a central dashboard that manages products, categories, content, users and orders.",
    "features": [
      "250+ products across four kitchen-appliance categories",
      "Detailed product pages with full specification sheets",
      "Customer registration, sign-in, verification and account pages",
      "Online ordering with order history and live status tracking",
      "Admin dashboard for products, categories, content, users and orders",
      "Sales statistics and order status management",
      "Technical SEO, GEO and AEO across the whole store",
      "Deployment, hosting, domain setup and ongoing production support"
    ],
    "metrics": [
      {
        "value": "250+",
        "label": "Products"
      },
      {
        "value": "95+",
        "label": "PageSpeed performance"
      },
      {
        "value": "100",
        "label": "SEO score"
      }
    ],
    "stack": [
      "React",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "Tailwind CSS",
      "Authentication",
      "Technical SEO"
    ],
    "cover": "/images/projects/milestone/cover.webp",
    "images": [
      {
        "src": "/images/projects/milestone/01.webp",
        "width": 1505,
        "height": 710,
        "mobile": false
      },
      {
        "src": "/images/projects/milestone/02.webp",
        "width": 1402,
        "height": 706,
        "mobile": false
      },
      {
        "src": "/images/projects/milestone/03.webp",
        "width": 1390,
        "height": 711,
        "mobile": false
      },
      {
        "src": "/images/projects/milestone/04.webp",
        "width": 1327,
        "height": 717,
        "mobile": false
      },
      {
        "src": "/images/projects/milestone/05.webp",
        "width": 1432,
        "height": 715,
        "mobile": false
      },
      {
        "src": "/images/projects/milestone/06.webp",
        "width": 577,
        "height": 550,
        "mobile": false
      },
      {
        "src": "/images/projects/milestone/07.webp",
        "width": 377,
        "height": 633,
        "mobile": true
      },
      {
        "src": "/images/projects/milestone/08.webp",
        "width": 431,
        "height": 708,
        "mobile": true
      }
    ]
  },
  {
    "slug": "milestone-showroom",
    "name": "Milestone Showroom",
    "short": "Showroom",
    "cat": "Brands",
    "year": "2026",
    "role": "Web Developer and Designer",
    "live": "https://milestonechannels.netlify.app",
    "tagline": "The Integration Art: a one-screen showroom that leads visitors to the store.",
    "summary": "A single-screen showroom website for Milestone. Every scroll swaps the scene in place, and every scene arrives with its own transition.",
    "overview": "The showroom is the front door to the Milestone store. The whole site is one screen: scrolling, swiping or the arrow keys swap each scene in place. The logo draws itself in, the tagline is written letter by letter, appliances rise into a spotlight over a kitchen backdrop, and the channels scene opens with an explosion of every store and social link.",
    "features": [
      "One-screen navigation by scroll, swipe, keyboard and side dots",
      "A different transition for every scene: split, circle reveal, slide, explosion and curtain",
      "Collection with live finish and size switching",
      "Our Channels scene where icons swim around the store and react to the cursor",
      "Fully responsive, with a dedicated phone layout",
      "Respects reduced-motion settings",
      "SEO, AEO and GEO files with structured data"
    ],
    "metrics": [
      {
        "value": "6",
        "label": "Animated scenes"
      },
      {
        "value": "1",
        "label": "Screen, zero page loads"
      },
      {
        "value": "100%",
        "label": "Responsive"
      }
    ],
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "GSAP",
      "Observer",
      "Netlify"
    ],
    "cover": "/images/projects/milestone-showroom/cover.webp",
    "images": [
      {
        "src": "/images/projects/milestone-showroom/01.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/milestone-showroom/02.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/milestone-showroom/03.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/milestone-showroom/04.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/milestone-showroom/05.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/milestone-showroom/06.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/milestone-showroom/07.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/milestone-showroom/08.webp",
        "width": 390,
        "height": 844,
        "mobile": true
      },
      {
        "src": "/images/projects/milestone-showroom/09.webp",
        "width": 390,
        "height": 844,
        "mobile": true
      },
      {
        "src": "/images/projects/milestone-showroom/10.webp",
        "width": 390,
        "height": 844,
        "mobile": true
      }
    ]
  },
  {
    "slug": "digital-codes",
    "name": "Digital Codes For Trading",
    "short": "Digital Codes",
    "cat": "Companies",
    "year": "2026",
    "role": "Web Developer and Designer",
    "live": "https://digital-codes.co",
    "tagline": "The official company website, fast and polished.",
    "summary": "The official website of Digital Codes For Trading: a five-page company profile with custom animations, interactive UI and a 95+ PageSpeed score.",
    "overview": "I designed and developed the company's official website with a custom responsive interface, interactive animations and a clear page structure. The frontend is built on a responsive component architecture with performance optimisation and technical SEO, so the site stays fast and easy to maintain.",
    "features": [
      "Five-page company profile with tailored layouts",
      "Custom animations and interactive UI",
      "Responsive components from phones to wide screens",
      "Structured content for the company, its services and its brands",
      "Technical SEO and metadata on every page",
      "Deployment, domain setup and ongoing maintenance"
    ],
    "metrics": [
      {
        "value": "5",
        "label": "Pages"
      },
      {
        "value": "95+",
        "label": "PageSpeed performance"
      },
      {
        "value": "100",
        "label": "SEO score"
      }
    ],
    "stack": [
      "React",
      "TypeScript",
      "Motion",
      "Tailwind CSS",
      "Technical SEO",
      "Core Web Vitals"
    ],
    "cover": "/images/projects/digital-codes/cover.webp",
    "images": [
      {
        "src": "/images/projects/digital-codes/01.webp",
        "width": 868,
        "height": 715,
        "mobile": false
      },
      {
        "src": "/images/projects/digital-codes/02.webp",
        "width": 1188,
        "height": 690,
        "mobile": false
      },
      {
        "src": "/images/projects/digital-codes/03.webp",
        "width": 1173,
        "height": 713,
        "mobile": false
      }
    ]
  },
  {
    "slug": "noue",
    "name": "NOUÉ Chocolate Gifts",
    "short": "NOUÉ",
    "cat": "Brands",
    "year": "2026",
    "role": "Web Developer and Designer",
    "live": "https://noue-chocolate.vercel.app",
    "tagline": "Gifts, tied by hand. One golden ribbon runs through the whole page.",
    "summary": "A scroll-driven website for a chocolate gift house in Riyadh. One golden ribbon runs from the knot in the logo to the bow in the footer.",
    "overview": "Scroll and the box unties itself, the lid lifts and fifteen pieces of chocolate come into view. The ribbon then leads into four occasions (weddings, newborns, graduation and Eid), a box builder where visitors pick a size, flavours and a note, and a corporate gifting page.",
    "features": [
      "A single golden ribbon that guides the whole scroll story",
      "Box that unties and opens frame by frame",
      "Four occasion chapters with their own colour and mood",
      "Interactive box builder: size, flavours and a personal note",
      "Corporate gifting section",
      "Statically prerendered and fully responsive"
    ],
    "metrics": [
      {
        "value": "15",
        "label": "Chocolate pieces animated"
      },
      {
        "value": "4",
        "label": "Occasions"
      },
      {
        "value": "1",
        "label": "Continuous ribbon"
      }
    ],
    "stack": [
      "Next.js",
      "React",
      "GSAP",
      "ScrollTrigger",
      "Lenis",
      "Vercel"
    ],
    "cover": "/images/projects/noue/cover.webp",
    "images": [
      {
        "src": "/images/projects/noue/01.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/noue/02.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/noue/03.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/noue/04.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/noue/05.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/noue/06.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/noue/07.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/noue/08.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/noue/09.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/noue/10.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/noue/11.webp",
        "width": 390,
        "height": 844,
        "mobile": true
      },
      {
        "src": "/images/projects/noue/12.webp",
        "width": 390,
        "height": 844,
        "mobile": true
      },
      {
        "src": "/images/projects/noue/13.webp",
        "width": 390,
        "height": 844,
        "mobile": true
      }
    ]
  },
  {
    "slug": "oze",
    "name": "OZE Chocolate",
    "short": "OZE",
    "cat": "Brands",
    "year": "2026",
    "role": "Web Developer and Designer",
    "live": "https://oze-chocolate.vercel.app",
    "tagline": "Premium Swiss chocolate in Riyadh, told one scene at a time.",
    "summary": "A one-page scroll website for OZE, a premium Swiss chocolate shop in Riyadh, in English and Arabic, with signature flavours, occasions and WhatsApp ordering.",
    "overview": "Each scroll swaps the scene: melted chocolate pours over the opening, the red OZE seal is pressed by hand, then six signature flavours arrive one by one. A gift box unties itself to lead into weddings, engagements, gatherings and gifts, and the page closes with bespoke orders, a map and a request form.",
    "features": [
      "Scene-by-scene scroll story with video openings",
      "Six signature flavours with their own frames",
      "Gift box that opens into four occasions",
      "Full Arabic (right-to-left) version",
      "WhatsApp ordering, request form and live map",
      "SEO, llms.txt and sitemap with product images"
    ],
    "metrics": [
      { "value": "6", "label": "Signature flavours" },
      { "value": "4", "label": "Occasions" },
      { "value": "2", "label": "Languages" }
    ],
    "stack": ["HTML", "CSS", "JavaScript", "GSAP", "MapLibre", "Vercel"],
    "cover": "/images/projects/oze/cover.webp",
    "images": [
      {
        "src": "/images/projects/oze/01.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/oze/02.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/oze/03.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/oze/04.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/oze/05.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/oze/06.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/oze/07.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/oze/08.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/oze/09.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/oze/10.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      }
    ]
  },
  {
    "slug": "ghurza",
    "name": "GHURZA Couture",
    "short": "GHURZA",
    "cat": "Companies",
    "year": "2026",
    "role": "Web Developer and Designer",
    "live": "https://ghurza.vercel.app",
    "tagline": "A Riyadh couture house, presented as a fashion magazine.",
    "summary": "An Arabic website for a Riyadh couture house, designed as a fashion magazine you browse by scrolling, with an interactive dress gallery.",
    "overview": "Every section is a magazine page that opens from a different edge over the one before it. A dress vortex pulls visitors into the collection, each dress opens with its fabric, details and story, and the atelier section follows a dress from the first conversation to the final fitting.",
    "features": [
      "Magazine-style page turns, each from a different edge",
      "3D dress vortex driven by scroll",
      "Interactive collection: every dress opens with its details and fabric",
      "Atelier journey from conversation to fitting",
      "Right-to-left Arabic layout",
      "No framework, plain and fast"
    ],
    "metrics": [
      {
        "value": "RTL",
        "label": "Arabic first"
      },
      {
        "value": "6",
        "label": "Magazine chapters"
      },
      {
        "value": "0",
        "label": "Frameworks needed"
      }
    ],
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "GSAP",
      "ScrollTrigger",
      "Lenis"
    ],
    "cover": "/images/projects/ghurza/cover.webp",
    "images": [
      {
        "src": "/images/projects/ghurza/01.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/ghurza/02.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/ghurza/03.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/ghurza/04.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/ghurza/05.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/ghurza/06.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/ghurza/07.webp",
        "width": 800,
        "height": 500,
        "mobile": false
      },
      {
        "src": "/images/projects/ghurza/08.webp",
        "width": 750,
        "height": 1624,
        "mobile": true
      },
      {
        "src": "/images/projects/ghurza/09.webp",
        "width": 750,
        "height": 1624,
        "mobile": true
      }
    ]
  },
  {
    "slug": "gd-studio",
    "name": "GD Graphic Design",
    "short": "GD Studio",
    "cat": "Companies",
    "year": "2026",
    "role": "Web Developer and Designer",
    "live": "https://gd-graphic-design-company.vercel.app",
    "tagline": "Crafted to be seen. A studio site where every service is its own scene.",
    "summary": "A one-page, scroll-driven website for a graphic design studio in Riyadh. Each service has its own scene, and every scene opens with its own transition.",
    "overview": "Identity, packaging, print, social media, motion, art direction and websites: each service gets a full scene. The social feed builds tile by tile, the websites scene zooms out of a browser, and the selected work runs as a horizontal gallery.",
    "features": [
      "A full scene for each of the studio's services",
      "A different transition for every scene",
      "Social media feed that builds tile by tile",
      "Websites scene that zooms out of a browser",
      "Horizontal selected-work gallery",
      "Static export, hosted on Vercel"
    ],
    "metrics": [
      {
        "value": "7",
        "label": "Services, 7 scenes"
      },
      {
        "value": "1",
        "label": "Continuous scroll story"
      },
      {
        "value": "100%",
        "label": "Responsive"
      }
    ],
    "stack": [
      "Next.js",
      "React",
      "TypeScript",
      "GSAP",
      "Lenis",
      "Vercel"
    ],
    "cover": "/images/projects/gd-studio/cover.webp",
    "images": [
      {
        "src": "/images/projects/gd-studio/01.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/gd-studio/02.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/gd-studio/03.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/gd-studio/04.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/gd-studio/05.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/gd-studio/06.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/gd-studio/07.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/gd-studio/08.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/gd-studio/09.webp",
        "width": 390,
        "height": 844,
        "mobile": true
      }
    ]
  },
  {
    "slug": "azm",
    "name": "AZM Studio",
    "short": "AZM",
    "cat": "Companies",
    "year": "2026",
    "role": "Web Developer and Designer",
    "live": "https://azm-builds.vercel.app",
    "tagline": "Built in Riyadh. Built to last. A cinematic walk through an architecture studio.",
    "summary": "A cinematic, scroll-driven website for an architecture and interior design studio: the visitor walks from the street, through the door and into the house.",
    "overview": "One continuous scene. An opening film plays, the first scroll walks the camera to the front door, then the camera moves through the house frame by frame at the speed of the visitor's scroll. Six services slide sideways, the process is told over a studio film, and the story ends back in the living room with a conversation.",
    "features": [
      "Scroll-scrubbed frame sequences drawn on canvas",
      "Device-aware assets: full frames on laptops, lighter ones on phones",
      "Coarse-to-fine loading so the scene is usable within seconds",
      "Horizontal services slider driven by vertical scroll",
      "Smooth scrolling with gentle snapping",
      "No framework, no build step"
    ],
    "metrics": [
      {
        "value": "5",
        "label": "Chapters"
      },
      {
        "value": "1",
        "label": "Continuous film-like scene"
      },
      {
        "value": "0",
        "label": "Frameworks needed"
      }
    ],
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Canvas 2D",
      "Lenis",
      "Vercel"
    ],
    "cover": "/images/projects/azm/cover.webp",
    "images": [
      {
        "src": "/images/projects/azm/01.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/azm/02.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/azm/03.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/azm/04.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/azm/05.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/azm/06.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/azm/07.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/azm/08.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/azm/09.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/azm/10.webp",
        "width": 780,
        "height": 1688,
        "mobile": true
      }
    ]
  },
  {
    "slug": "reem-sharaf",
    "name": "Reem Sharaf Portfolio",
    "short": "Reem Sharaf",
    "cat": "Portfolios",
    "year": "2026",
    "role": "Web Developer and Designer",
    "live": "https://reemsharaf.vercel.app",
    "tagline": "A cinematic portfolio for an AI researcher and university lecturer.",
    "summary": "A cinematic one-page portfolio for Eng. Reem Sharaf, software engineer, AI researcher and lecturer. Sections swap in place, each with its own transition.",
    "overview": "Built with plain HTML, CSS and JavaScript, so it is very light and fast. An RS logo draws itself with a loading counter before a curtain opens. Every section has its own design and its own entrance: a door opening, a fall from above, a circular lens, a page flip and more. Every section also has its own indexable page.",
    "features": [
      "Intro where the RS logo draws itself, then a curtain opens",
      "A different entrance for every section",
      "48 skills across 7 fields, each with its icon",
      "Certificates gallery with zoom",
      "A separate indexable page for every section",
      "Full structured data: Person, ProfilePage, FAQ and more"
    ],
    "metrics": [
      {
        "value": "48",
        "label": "Skills shown"
      },
      {
        "value": "10",
        "label": "Unique transitions"
      },
      {
        "value": "0",
        "label": "External libraries"
      }
    ],
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "JSON-LD",
      "Vercel"
    ],
    "cover": "/images/projects/reem-sharaf/cover.webp",
    "images": [
      {
        "src": "/images/projects/reem-sharaf/01.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/reem-sharaf/02.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/reem-sharaf/03.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/reem-sharaf/04.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/reem-sharaf/05.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/reem-sharaf/06.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/reem-sharaf/07.webp",
        "width": 1440,
        "height": 900,
        "mobile": false
      },
      {
        "src": "/images/projects/reem-sharaf/08.webp",
        "width": 768,
        "height": 1024,
        "mobile": true
      }
    ]
  }
];

export const FAN_ORDER = ["ghurza", "gd-studio", "milestone", "oze", "azm", "noue", "milestone-showroom", "digital-codes", "reem-sharaf"];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
