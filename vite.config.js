import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * SPA: o HTML inicial inclui JSON-LD, meta sociais, noscript com resumo e robots/sitemap em /public.
 * Prerender estático completo (HTML = conteúdo React): avaliar `vite-prerender-plugin` ou
 * `@prerenderer/rollup-plugin` quando houver suporte estável com React 19 no teu ambiente de build.
 */
export default defineConfig({
  plugins: [react()],
});
