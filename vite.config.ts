import { defineConfig } from 'vite'

export default defineConfig({
  // ─── BASE ───────────────────────────────────────────────────────────
  // Repositório: github.com/carlosguedes-dev/carlosguedes-dev
  // Como o nome do repositório é igual ao username, este é o repositório
  // PRINCIPAL da conta. O site será publicado na raiz:
  //   → https://carlosguedes-dev.github.io/
  //
  // Neste caso, base DEVE ser '/' (sem subdiretório).
  //
  base: '/',
  // ────────────────────────────────────────────────────────────────────

  build: {
    outDir: 'dist',
  },
})
