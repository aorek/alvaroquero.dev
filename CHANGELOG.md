# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [2.0.0] - 2026-05-14

### 🎉 Refactorización completa a single-page con estilo terminal

Reescritura completa del portfolio: migración de Next.js con múltiples páginas, blog, React y Chakra UI a una single-page con estilo terminal oscuro, contenido JSON y Astro.

### ✨ Añadido

#### Componentes
- `Hero.astro` - Sección hero con ASCII art animado y efecto typing letra por letra
- `Experience.astro` - Timeline de experiencia laboral con datos desde JSON
- `Projects.astro` - Grid de proyectos con tech stack
- `About.astro` - Sección about con skills por categoría y contacto

#### Contenido
- `src/data/profile.json` - Información personal (nombre, bio, redes)
- `src/data/experience.json` - Historial laboral
- `src/data/projects.json` - Proyectos con tecnologías
- `src/data/skills.json` - Habilidades por categoría

#### Estilo
- Tema terminal oscuro fijo (GitHub Dark: `#0d1117` bg, `#c9d1d9` text)
- Scrollbar custom con colores del tema
- Efecto typing para ASCII art del nombre
- Navegación fixed con anchor links a secciones (#experience, #projects, #about)

#### Rendimiento
- Bundle JS ~150 KB (solo efecto typing del ASCII art)
- Sin React runtime
- Sin dependencias de terceros para UI
- Sitio completamente estático

### 🔄 Cambiado

#### Dependencias
- Framework: de Next.js 13 a Astro 4.16
- Estilos: de Chakra UI a Tailwind CSS 3.4
- Gestor paquetes: de npm a pnpm
- Eliminadas: React, React DOM, jsPDF, Chakra UI, Emotion
- Simplificadas: `astro.config.mjs`, `tailwind.config.mjs`

#### UI
- Navegación: de scroll con dark mode toggle → navbar fixed minimalista
- Footer: de secciones múltiples → footer tipo terminal
- Layout: de header/footer slots → layout simple
- Páginas: de múltiples rutas a single page con scroll a secciones

#### Contenido
- Migrado de Markdown con Content Collections a JSON plano en `src/data/`
- Eliminados blog, páginas estáticas y proyectos de ejemplo

### 🗑️ Eliminado

#### Páginas
- About, Formation, CV, Blog (listado y detalle), Projects (listado y detalle)

#### Componentes
- `Header.astro`, `BlogPostCard.astro`, `ProjectCard.astro`, `PDFExportButton.tsx`

#### Dependencias
- `next`, `react`, `react-dom`, `@chakra-ui/react`, `@emotion/styled`, `@emotion/react`
- `framer-motion`, `jspdf`, `@astrojs/react`, `@astrojs/sitemap`, `@tailwindcss/typography`

#### Archivos
- `content/` completa (blog, pages, projects, config.ts, CONTENT_GUIDE.md)
- Configuración Next.js, Content Collections, dark mode toggle

### 🔧 Estructura actual

```
src/
├── data/                   # Contenido JSON
│   ├── profile.json       # Información personal
│   ├── experience.json    # Experiencia laboral
│   ├── projects.json      # Proyectos
│   └── skills.json        # Tecnologías
├── components/             # Componentes Astro
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

---

## [1.0.0] - 2024-XX-XX

### Versión inicial con Next.js

- Portfolio personal construido con Next.js 13
- Blog con MDX
- Proyectos showcase
- Tema con Chakra UI
- Dark mode

---

## Tipos de cambios

- **Añadido** para nuevas características
- **Cambiado** para cambios en funcionalidad existente
- **Obsoleto** para características que serán eliminadas
- **Eliminado** para características eliminadas
- **Corregido** para corrección de bugs
- **Seguridad** para vulnerabilidades

[2.0.0]: https://github.com/aorek/alvaroquero.com/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/aorek/alvaroquero.com/releases/tag/v1.0.0
