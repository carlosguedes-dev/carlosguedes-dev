import { defineConfig } from 'vite'

export default defineConfig({
  // ─── BASE ───────────────────────────────────────────────────────────
  // O repositório se chama "carlosguedes-dev".
  // Como não é, o GitHub Pages publica o site no subcaminho igual ao nome do repositório.
  // Neste caso, a base DEVE ser '/carlosguedes-dev/'.
  base: '/carlosguedes-dev/',

  build: {
    outDir: 'dist',
  },
})
