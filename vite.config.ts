import { defineConfig } from "vite";
import htmlPurge from "vite-plugin-purgecss";
import { resolve } from "path";

export default defineConfig({
  plugins: [ htmlPurge([htmlPurge()])],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        pricing: resolve(__dirname, "html/pricing.html"),
        about: resolve(__dirname, "html/about-us.html"),
      },
    },
  },
});