# alvaroquero.dev

[![Astro](https://img.shields.io/badge/Astro-4.16-FF5D01?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Portfolio personal con estilo terminal, construido con **Astro**, **TypeScript** y **Tailwind CSS**.

🌐 **[alvaroquero.dev](https://alvaroquero.dev)**

## Características

- **Estilo terminal** - Tema oscuro tipo GitHub Dark, fuente monospace
- **Single page** - Navegación por scroll con anchor links
- **ASCII art animado** - Nombre con efecto typing letra por letra
- **Contenido en JSON** - Datos editables sin tocar código
- **Responsive** - Diseño adaptado a todos los dispositivos

## Tecnologías

- **Framework:** [Astro](https://astro.build) 4.16
- **Styling:** [Tailwind CSS](https://tailwindcss.com) 3.4
- **Deployment:** [Vercel](https://vercel.com)

## Instalación

```bash
git clone https://github.com/aorek/alvaroquero.dev.git
cd alvaroquero.dev
pnpm install
```

## Uso

```bash
pnpm dev      # Servidor de desarrollo en localhost:4321
pnpm build    # Build de producción
pnpm preview  # Previsualizar build
```

## Estructura

```
src/
├── data/                   # Contenido editable (JSON)
│   ├── profile.json       # Información personal
│   ├── experience.json    # Experiencia laboral
│   ├── projects.json      # Proyectos
│   └── skills.json        # Tecnologías
├── components/
│   ├── Hero.astro         # ASCII art animado
│   ├── Experience.astro   # Timeline laboral
│   ├── Projects.astro     # Grid de proyectos
│   ├── About.astro        # Bio + skills + contacto
│   ├── Navbar.astro       # Navegación fixed
│   └── Footer.astro       # Footer minimalista
├── pages/
│   └── index.astro        # Página única
├── layouts/
│   └── BaseLayout.astro   # Layout terminal dark
└── styles/
    └── global.css         # Estilos terminal
```

## Personalizar contenido

Edita los archivos JSON en `src/data/`:

- `profile.json` - Nombre, bio, redes sociales
- `experience.json` - Historial laboral
- `projects.json` - Proyectos con tecnologías
- `skills.json` - Habilidades por categoría

No necesitas tocar código HTML para actualizar el contenido.

## Deployment

```bash
pnpm build
# Sube la carpeta dist/ a Vercel, Netlify, etc.
```

## Licencia

MIT
