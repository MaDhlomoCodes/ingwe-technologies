import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // The frontend is deployed at the domain root on Cloudflare Pages.
  base: "/",
});
