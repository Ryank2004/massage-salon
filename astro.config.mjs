import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ["@vite/client", "some-heavy-package"]
    }
  }
});
