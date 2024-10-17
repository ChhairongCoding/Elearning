import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Use a function to access 'mode' properly
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    css: {
      postcss: path.resolve(__dirname, "./postcss.config.js"),
    },
    base: mode === "development" ? "/" : "/", // Adjust for production path
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
