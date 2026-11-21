import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Evita que Vite cargue dos instancias de ApexCharts al mezclar los
    // entry points modulares (apexcharts/line, apexcharts/core).
    dedupe: ["apexcharts"],
    alias: {
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@data": fileURLToPath(new URL("./src/data", import.meta.url)),
    },
  },
  build: {
    // ApexCharts es grande por sí solo (~625 kB); separarlo evita que el chunk
    // principal herede ese peso y que el warning salte en cada build.
    chunkSizeWarningLimit: 650,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          charts: ["apexcharts/core", "apexcharts/line", "react-apexcharts/core"],
          mui: ["@mui/material", "@emotion/react", "@emotion/styled"],
          motion: ["framer-motion"],
          icons: ["@iconscout/react-unicons"],
        },
      },
    },
  },
});
