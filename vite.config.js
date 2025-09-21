import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
    base: '/Material-Tailwind-Kit-React/',
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
