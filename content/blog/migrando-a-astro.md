---
title: "Migrando de Next.js a Astro"
description: "Mi experiencia migrando mi portfolio personal de Next.js a Astro y las lecciones aprendidas"
pubDate: 2024-05-12
tags: ["astro", "nextjs", "migracion", "tutorial"]
draft: false
heroImage: "/blog-placeholder-2.jpg"
---

# Migrando de Next.js a Astro

Recientemente decidí migrar mi portfolio personal de Next.js a Astro, y en este post quiero compartir mi experiencia y las razones detrás de esta decisión.

## ¿Por qué migrar?

### Rendimiento
Astro genera sitios estáticos por defecto, lo que significa tiempos de carga ultra rápidos. Para un portfolio personal que es principalmente contenido estático, esto es ideal.

### Content Collections
El sistema de Content Collections de Astro hace que sea super fácil gestionar contenido en Markdown con validación de tipos TypeScript.

### Markdown-first
Astro está diseñado pensando en contenido markdown desde el principio, perfecto para un blog.

## El proceso de migración

### 1. Setup inicial
```bash
npm create astro@latest
```

### 2. Configuración de Content Collections
Crear el archivo `src/content/config.ts` con los schemas de Zod.

### 3. Migración de componentes
Convertir componentes React a componentes Astro cuando no necesitan interactividad.

### 4. Migración de estilos
Cambiar de Chakra UI a Tailwind CSS para un bundle más pequeño.

## Lecciones aprendidas

1. **Menos es más**: No todo componente necesita ser React
2. **Type safety**: Content Collections con Zod dan seguridad de tipos increíble
3. **Performance matters**: Los usuarios notan la diferencia en velocidad

## Conclusión

La migración fue más sencilla de lo esperado y los resultados valen la pena. Mi sitio ahora carga más rápido y es más fácil de mantener.

¿Estás considerando migrar a Astro? ¡Te lo recomiendo!
