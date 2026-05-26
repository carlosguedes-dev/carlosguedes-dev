import { defineConfig } from 'vite'

export default defineConfig({
  // ─── BASE ───────────────────────────────────────────────────────────
  // O repositório se chama "carlosguedes-dev".
  // Para ser o site principal (raiz), deveria se chamar "carlosguedes-dev.github.io".
  // Como não é, o GitHub Pages publica o site no subcaminho igual ao nome do repositório.
  //   → https://carlosguedes-dev.github.io/carlosguedes-dev/
  //
  // Neste caso, a base DEVE ser '/carlosguedes-dev/'.
  //
  base: '/carlosguedes-dev/',
  // ────────────────────────────────────────────────────────────────────

  build: {
    outDir: 'dist',
  },
})
