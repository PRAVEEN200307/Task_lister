import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        login: './login.html',
        singup:'./signup.html',
        contributer:'./contributers.html'
      }
    }
  }
})