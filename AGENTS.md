# AGENTS.md

Notas para agentes que trabajen en este repo. La fuente de verdad es `package.json`, `vite.config.js`, `eslint.config.js` y `vitest.config.js`.

## Stack

- Vite 7 + React 19, JavaScript (sin TypeScript), CSS plano por componente.
- MUI solo para la tabla de pedidos; ApexCharts para gráficos; Framer Motion para expandir tarjetas; Unicons para iconos.
- Sin router ni capa de API: la selección del `Sidebar` es estado local y los datos están hardcodeados en `src/data/data.js`.

## Comandos

- Gestor de paquetes: npm (`package-lock.json`). Instalación: `npm install`.
- `npm run dev` → Vite en el puerto 5173. `npm run preview` sirve `dist/`.
- Verificación completa: `npm run verify` (`lint` → `test` → `build`). No hay typecheck.
- `npm run test` ejecuta Vitest una vez; `npm run test:watch` en watch.
- `npm run format` aplica Prettier; `npm run format:check` solo comprueba.

## Estructura

- Entrada: `src/main.jsx` → `src/App.jsx` → `Sidebar` + `MainDash` (`Cards`, `Table`) + `RightSide` (`Updates`, `CustomerReview`).
- Alias en `vite.config.js`: `@assets`, `@components`, `@data` (p. ej. `@components/Card/Card`). Úsalos en lugar de rutas relativas largas.
- Cada componente vive en `src/components/<Nombre>/` con su `<Nombre>.css` y, si tiene tests, `<Nombre>.test.jsx`.
- Datos de ejemplo en `src/data/data.js`; opciones de ApexCharts compartidas en `src/data/chartOptions.js`.
- Tests: `vitest.config.js` reutiliza la config de Vite; setup en `src/test/setup.js` (jsdom + jest-dom).

## Gotchas

- React 19 usa el runtime automático de JSX: **no** añadas `import React from "react"`; ESLint lo marca como no usado.
- `eslint.config.js` activa `eslint-plugin-react` solo para `react/jsx-uses-vars`. Mantenlo: sin esa regla, imports usados únicamente en JSX (p. ej. `motion`) dan falso `no-unused-vars`. No reintroduzcas un `varsIgnorePattern` amplio.
- En ApexCharts, `toolbar` y `dropShadow` deben ir dentro de `chart`; en la raíz de `options` se ignoran en silencio. Usa `createAreaChartOptions` en vez de duplicar opciones.
- Cada tarjeta expandible necesita un `layoutId` único de Framer Motion; compartirlo entre tarjetas rompe la animación.
- Las variables CSS globales (`--orange`, `--pink`, `--glass`, colores de tarjeta, etc.) se declaran en `#root` dentro de `src/App.css`, no en `:root`; solo resuelven dentro del árbol de la app.
- `vite.config.js` define `manualChunks` (react, charts, mui, motion, icons). Si añades una dependencia pesada, asígnala a un chunk. El chunk `charts` (ApexCharts) ronda los 527 kB, por eso `chunkSizeWarningLimit` está en 600.
- Los tests evitan expandir `Card` porque montaría ApexCharts en jsdom. Para probar la tarjeta, usa el estado compacto o mockea `react-apexcharts`.
- El layout es responsive con breakpoints en `src/App.css` (1200px y 768px); los estilos de cada componente tienen sus propios media queries.
