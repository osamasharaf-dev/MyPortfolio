# osamasharaf.dev

Personal website of **Osama Sharaf**, Full Stack Developer in Riyadh.

Built with Next.js 15 (App Router), React 19, TypeScript, GSAP and Lenis. Fonts are self-hosted, every page is statically prerendered, and the home page runs as a one-screen experience where each scroll moves to the next scene with its own transition.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm start
```

## Where to edit content

| What | File |
| --- | --- |
| Name, titles, summary, contact links, stats, experience, education, budgets | `src/data/profile.ts` |
| Projects, descriptions, screenshots | `src/data/projects.ts` |
| Fonts and colours shown on each project page | `src/data/brand.ts` |
| Technical skills and their icons | `src/data/skills.ts` |
| CV file | `public/resume/OsamaSharaf.pdf` |
| Project screenshots | `public/images/projects/<slug>/` |

## Pages

`/` · `/about` · `/projects` · `/project/<slug>` · `/skills` · `/how-i-work` · `/experience` · `/education` · `/contact`

## Short links

| Link | Goes to |
| --- | --- |
| `/pr/<slug>`, `/p/<slug>`, `/projects/<slug>`, `/work/<slug>` | `/project/<slug>` |
| `/project/gd`, `/project/chocolate`, `/project/reem`, `/project/store` and other aliases | the right project |
| `/work`, `/portfolio` | `/projects` |
| `/cv`, `/resume` | the CV PDF |
| `/hire`, `/hire-me` | `/contact` |
| `/wa`, `/whatsapp` | WhatsApp chat with a ready message |
| `/in`, `/linkedin` | LinkedIn |
| `/github` | GitHub |

A mistyped address shows the 404 page, which suggests the closest real page.

## SEO, AEO and GEO

- Metadata, canonical URLs and Open Graph images for every page
- JSON-LD: Person, WebSite, ProfilePage, ItemList, CreativeWork for each project, BreadcrumbList and FAQPage
- `sitemap.xml` generated from the data files, including screenshots
- `robots.txt` that welcomes search engines and AI answer engines
- `llms.txt`, `llms-full.txt` and `ai-catalog.json` with a clear summary of the profile and every project

## Deploy

Push to GitHub and import the repository in Vercel or Netlify. No extra settings are needed besides the EmailJS variables. Point the domain `osamasharaf.dev` to the project.
