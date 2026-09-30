# alvaroquero.dev

[![Astro](https://img.shields.io/badge/Astro-7-FF5D01?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Portfolio personal con estilo terminal, construido con **Astro**, **TypeScript** y **Tailwind CSS**.

🌐 **[alvaroquero.dev](https://alvaroquero.dev)**

## Características

- **Estilo terminal** - Cada sección arranca con un comando (`$ whoami`, `$ git log --career`, `$ ls -l ~/proyectos`, `$ cat sobre-mi.ts`)
- **Shell interactiva** - Comandos como `help`, `stack`, `experiencia`, `proyectos`, `contacto` o `hobbies`, generados en build desde los JSON
- **Tema oscuro y claro** - Oscuro por defecto (GitHub Dark), con toggle que recuerda la elección
- **Single page** - Navegación por anchor links con scroll suave en CSS puro
- **Contenido en JSON** - Datos editables sin tocar código
- **Responsive** - Diseño adaptado a todos los dispositivos

## Tecnologías

- **Framework:** [Astro](https://astro.build) 7
- **Styling:** [Tailwind CSS](https://tailwindcss.com) 4 (vía `@tailwindcss/vite`, configurado en `src/styles/global.css`)
- **Fuente:** [Fira Code](https://fonts.google.com/specimen/Fira+Code)

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
pnpm check    # Type-check de archivos .astro y .ts
pnpm preview  # Previsualizar build
```

## Estructura

```
src/
├── data/                   # Contenido editable (JSON)
│   ├── profile.json       # Información personal, bio y hobbies
│   ├── experience.json    # Experiencia laboral
│   ├── projects.json      # Proyectos
│   └── skills.json        # Tecnologías
├── components/
│   ├── Navbar.astro       # Navegación fixed + toggle de tema
│   ├── Hero.astro         # whoami + nombre + shell interactiva
│   ├── Experience.astro   # Experiencia como `git log --career`
│   ├── Projects.astro     # Proyectos como tabla `ls -l`
│   ├── About.astro        # Sobre mí + skills como objeto TS
│   └── Footer.astro       # Copyright + enlaces de contacto
├── pages/
│   └── index.astro        # Página única
├── layouts/
│   └── BaseLayout.astro   # Head, SEO, fuentes e init del tema
└── styles/
    └── global.css         # Tokens de tema + clases de utilidad
```

## Personalizar contenido

Edita los archivos JSON en `src/data/`:

- `profile.json` - Nombre, bio, hobbies, redes sociales
- `experience.json` - Historial laboral (`endDate: "actual"` marca el trabajo actual)
- `projects.json` - Proyectos con tecnologías (`demoUrl` es opcional)
- `skills.json` - Habilidades por categoría

Los cambios se reflejan en todas las secciones y en los comandos de la shell.

## Deployment

```bash
pnpm build
# Sube la carpeta dist/ a cualquier hosting estático
```

## Licencia

MIT
