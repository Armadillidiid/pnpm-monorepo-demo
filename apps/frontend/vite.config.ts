import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@monorepo/ui": path.resolve(__dirname, "../../packages/ui/src/main.ts"),
    },
  },
  plugins: [react()],
});
