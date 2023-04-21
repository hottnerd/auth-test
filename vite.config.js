import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
    proxy:{
      "^/api":{
        target: "https://auth-test-api-amzm.onrender.com",
        changeOrigin: true,
        secure: true,      
        ws: true,
      }
    
    }
  }
})
