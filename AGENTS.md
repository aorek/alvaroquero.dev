# Agent Instructions

## Tech Stack

- **Framework:** Astro 7
- **Styling:** Tailwind CSS 4 (via `@tailwindcss/vite`, configured in `src/styles/global.css`)
- **Content:** JSON files in `src/data/`

## Commands

```bash
pnpm dev      # Dev server at http://localhost:4321
pnpm build    # Production build
pnpm check    # Type-check .astro and .ts files
pnpm preview  # Preview production build
```

## Structure

```
src/
├── data/                   # JSON content files
│   ├── profile.json       # Name, bio, about, hobbies, social links
│   ├── experience.json    # Work history
│   ├── projects.json      # Projects with tech stack
│   └── skills.json        # Technologies by category
├── components/
│   ├── Navbar.astro       # Fixed nav with anchor links + theme toggle
│   ├── Hero.astro         # whoami + big name + interactive shell
│   ├── Experience.astro   # Work history as `git log --career`
│   ├── Projects.astro     # Projects as an `ls -l` table
│   ├── About.astro        # About text + skills as a TS object
│   └── Footer.astro       # Copyright + contact links
├── pages/
│   └── index.astro        # Single page with all sections
├── layouts/
│   └── BaseLayout.astro   # Head, SEO meta, fonts, theme init
└── styles/
    └── global.css         # Theme tokens + utility classes
```

## Style

- **Concept:** Modern terminal. Each section opens with a shell command (`$ whoami`, `$ git log --career`, `$ ls -l ~/proyectos`, `$ cat sobre-mi.ts`).
- **Themes:** Dark by default (GitHub dark: `#0d1117` bg, `#c9d1d9` text) with a light theme. The toggle in the navbar stores the choice in `localStorage` and sets `data-theme` on `<html>`.
- **Colors:** Always use the CSS variables in `global.css` (`--bg-*`, `--text-*`, `--accent-*`) through its utility classes (`text-accent-blue`, `bg-secondary`, `border-theme`…). Never hardcode hex values in components, so both themes keep working. A new color must be defined in both the dark and light blocks.
- **Font:** Fira Code, loaded from Google Fonts in `BaseLayout.astro`.
- **Layout:** Content width `max-w-5xl mx-auto px-4`. Sections are separated by `border-t border-theme` and sized to their content (no `min-h-screen`).
- **Navigation:** Anchor links to sections (`#experience`, `#projects`, `#about`). Smooth scrolling and the offset for the fixed navbar are pure CSS (`scroll-behavior`, `scroll-padding-top` in `global.css`); don't add JS scroll handlers.
- **Copy:** Spanish.

## Interactive Shell

The shell in `Hero.astro` builds its command output at build time from the JSON files and passes it to the client script through a `<script type="application/json" id="shell-data">` tag. To add a command, add an entry to the `commands` object in the frontmatter; the shortcut button is generated automatically. `clear` is handled in the client script.

## Editing Content

Edit JSON files in `src/data/`:
- `profile.json` - Personal info, bio, about, hobbies
- `experience.json` - Work history (`endDate: "actual"` marks the current job)
- `projects.json` - Projects list (`demoUrl` is optional)
- `skills.json` - Technologies by category

Content changes show up in every section and in the shell commands.

## No Longer Used

- Blog pages (removed)
- Separate pages (removed - now single page)
- Markdown content (replaced by JSON)
- CV page (removed)
- ASCII art name in the hero (replaced by the big name + shell)
