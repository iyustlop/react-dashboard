import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@data": fileURLToPath(new URL("./src/data", import.meta.url)),
    },
  },
  build: {
    // ApexCharts es grande por sí solo (~527 kB); separarlo evita que el chunk
    // principal herede ese peso y que el warning salte en cada build.
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          charts: ["apexcharts", "react-apexcharts"],
          mui: ["@mui/material", "@emotion/react", "@emotion/styled"],
          motion: ["framer-motion"],
          icons: ["@iconscout/react-unicons"],
        },
      },
    },
  },
});
