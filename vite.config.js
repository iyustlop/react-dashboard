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
        // Vite 8 (Rolldown) solo admite la forma de función.
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          if (id.includes("node_modules/apexcharts") || id.includes("node_modules/react-apexcharts")) {
            return "charts";
          }
          if (id.includes("node_modules/@mui") || id.includes("node_modules/@emotion")) {
            return "mui";
          }
          if (id.includes("node_modules/framer-motion") || id.includes("node_modules/motion")) {
            return "motion";
          }
          if (id.includes("node_modules/@iconscout")) return "icons";
          if (id.includes("node_modules/react-dom") || id.includes("node_modules/react/")) {
            return "react";
          }
          return undefined;
        },
      },
    },
  },
});
