import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        products: resolve(__dirname, 'products.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        blog: resolve(__dirname, 'blog.html'),
        login: resolve(__dirname, 'login.html'),
        demo: resolve(__dirname, 'demo.html'),
      }
    }
  }
})
