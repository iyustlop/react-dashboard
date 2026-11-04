# My Dashboard

Dashboard de ejemplo construido con Vite 7 y React 19: tarjetas con gráficos, tabla de pedidos, actualizaciones y reseñas de clientes.

## Requisitos

- Node.js 22 (ver `.devcontainer/`)
- npm

## Instalación y uso

```bash
npm install
npm run dev       # servidor de desarrollo en http://localhost:5173
```

## Scripts

| Script                 | Descripción                                         |
| ---------------------- | --------------------------------------------------- |
| `npm run dev`          | Servidor de desarrollo con HMR.                     |
| `npm run build`        | Build de producción en `dist/`.                     |
| `npm run preview`      | Sirve el build de producción.                       |
| `npm run lint`         | ESLint sobre todo el repo.                          |
| `npm run test`         | Tests con Vitest + Testing Library (una ejecución). |
| `npm run test:watch`   | Tests en modo watch.                                |
| `npm run format`       | Formatea con Prettier.                              |
| `npm run format:check` | Comprueba el formato sin escribir.                  |
| `npm run verify`       | `lint` → `test` → `build`.                          |

## Estructura

```
src/
  App.jsx                 layout principal (Sidebar + MainDash + RightSide)
  components/
    Card/                 tarjeta compacta y expandible (ApexCharts)
    Cards/                lista de tarjetas
    CustomerReview/       gráfico de reseñas
    MainDash/             columna central
    RightSide/            actualizaciones + reseñas
    Sidebar/              navegación
    Table/                tabla de pedidos (MUI)
    Updates/              lista de actividad reciente
  data/
    data.js               datos de ejemplo
    chartOptions.js       opciones compartidas de ApexCharts
  test/setup.js           configuración de Testing Library
```

Los alias `@assets`, `@components` y `@data` están definidos en `vite.config.js`.

## Stack

Vite, React, MUI (solo la tabla), ApexCharts, Framer Motion, Unicons, Vitest, Testing Library, ESLint y Prettier.

## CI

`.github/workflows/ci.yml` ejecuta `npm ci`, `lint`, `test` y `build` en cada push a `initial`/`main` y en pull requests.
