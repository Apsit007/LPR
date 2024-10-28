import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnpluginIcons from "unplugin-icons/vite";
import UnpluginFonts from "unplugin-fonts/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnpluginIcons({
      jsx: "react",
      compiler: "jsx",
      autoInstall: true
    }),
    UnpluginFonts({
      google: {
        families: [
          {
            name: "Sarabun",
            styles: "wght@300;400;500;600;700;800;900;1000",
          },
          {
            name: "Noto Sans Thai",
            styles: "wght@300;400;500;600;700;800;900;1000",
          },
          {
            name: "Kanit",
            styles: "wght@300;400;500;600;700;800;900;1000",
          },
        ],
      },
    }),

  ],
})
