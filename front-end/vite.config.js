import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";
import { fileURLToPath, URL } from "url";
const __dirname = path.dirname(fileURLToPath(new URL(import.meta.url)));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@mahasiswa": path.resolve(__dirname, "./src/mahasiswa/pages/"),
      "@mhsComponents": path.resolve(__dirname, "./src/mahasiswa/components/"),
      "date-fns/_lib/format/longFormatters":
        "date-fns/esm/_lib/format/longFormatters/index.js", 
    },
  },
})
