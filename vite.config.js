import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/PixelBones-Website-Production/",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        contact: "contact.html",
        tos: "tos.html",
      },
    },
  },
});
