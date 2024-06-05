import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/fileSuratMahasiswa':{
        target: 'https://2l6t727s-5000.asse.devtunnels.ms',
        changeOrigin: true, 
        secure: false
      }
    }
  }
})
