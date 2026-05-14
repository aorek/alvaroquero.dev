# Agent Instructions

## Tech Stack

- **Framework:** Astro 4.16
- **Styling:** Tailwind CSS 3.4
- **Content:** JSON files in `src/data/`

## Commands

```bash
pnpm dev      # Dev server at http://localhost:4321
pnpm build    # Production build
pnpm preview  # Preview production build
```

## Structure

```
src/
├── data/                   # JSON content files
│   ├── profile.json       # Name, bio, social links
│   ├── experience.json    # Work history
│   ├── projects.json      # Projects with tech stack
│   └── skills.json        # Technologies by category
├── components/
│   ├── Navbar.astro       # Fixed nav with anchor links
│   ├── Hero.astro         # Hero section (whoami style)
│   ├── Experience.astro  # Work experience section
│   ├── Projects.astro     # Projects grid
│   ├── About.astro        # About + skills + contact
│   └── Footer.astro       # Simple terminal footer
├── pages/
│   └── index.astro        # Single page with all sections
├── layouts/
│   └── BaseLayout.astro  # Main layout (dark terminal style)
└── styles/
    └── global.css         # Terminal dark theme
```

## Style

- **Colors:** GitHub dark theme (`#0d1117` bg, `#c9d1d9` text)
- **Font:** Monospace (Fira Code)
- **Navigation:** Anchor links to sections (#experience, #projects, #about)
- **No dark mode toggle** - always dark by default

## Editing Content

Edit JSON files in `src/data/`:
- `profile.json` - Personal info
- `experience.json` - Work history
- `projects.json` - Projects list
- `skills.json` - Technologies

## No Longer Used

- Blog pages (removed)
- Separate pages (removed - now single page)
- Markdown content (replaced by JSON)
- CV page (removed)
- Dark mode toggle (not needed - always dark)
