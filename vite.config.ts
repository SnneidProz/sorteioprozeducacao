import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Substitua 'nome-do-repositorio' pelo nome exato do seu repositório no GitHub
  // Exemplo: se o repo for 'https://github.com/usuario/sorteio-proz', use base: '/sorteio-proz/'
  base: '/nome-do-repositorio/', 
})