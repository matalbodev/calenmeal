import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssr from "vite-plugin-ssr/plugin";
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ssr(), svgr()],
  logLevel: 'info',
  resolve: {
    alias: {
      // Prefix path aliases with '#'
      "#root": __dirname,
    },
  },
});
