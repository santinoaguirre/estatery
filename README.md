# Estatery — Prueba Técnica Frontend

Proyecto de evaluación para el puesto de Frontend Developer Ssr (Next.js, React, Zustand/Redux, Tailwind). El objetivo es demostrar buenas prácticas de desarrollo, organización, estado global, componentes reutilizables y estilos consistentes.

## Stack
- Next.js (React)
- Zustand (estado global)
- Tailwind CSS (estilos utilitarios)
- TypeScript

## Características clave
- Barra de búsqueda con estado global (Zustand) y actualización reactiva de resultados.
- Componentes reutilizables y desacoplados (por ejemplo, `SearchBar`, tarjetas/listado).
- Estilos con Tailwind y diseño responsive mobile‑first.
- Enrutamiento con Next.js y organización por features.
- Accesibilidad básica
- SEO básico + Open Graph


## Empezar
1) Instalar dependencias
```
# con npm	npm install
# o yarn	yarn
# o pnpm	pnpm install
```

2) Desarrollo
```
# ejecuta el servidor de desarrollo en http://localhost:3000
npm run dev
```

3) Build y producción
```
# compila la aplicación
npm run build

# inicia en modo producción (requiere build previo)
npm run start
```

## Estructura del proyecto (resumen)
- `src/components/` — Componentes UI reutilizables
  - `src/components/searchBar/` — Barra de búsqueda (`searchBar.tsx`)
- `src/store/` — Estado global (por ejemplo, `useSearchStore.ts` con Zustand)
- `public/` — Activos estáticos (imágenes, íconos)

## Decisiones técnicas
- Zustand para estado global: API simple, poco boilerplate y excelente DX. Ideal para filtros y UI state. Si el proyecto exige flujos más complejos, Redux es fácilmente intercambiable.
- Tailwind CSS para velocidad de desarrollo y consistencia visual sin sobrecargar el bundle con CSS global innecesario.
- Next.js por su enrutamiento basado en archivos, optimizaciones de rendimiento y despliegue simplificado.

## Screenshots
### Mobile
![Mobile](public/screenshots/mobile.png)

### Desktop
![Desktop](public/screenshots/desktop.png)
