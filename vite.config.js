import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
    base: '/KH-Shams-Entp/',
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
