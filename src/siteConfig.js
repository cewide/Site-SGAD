/**
 * URL da página de cadastro do SGAD (criação de conta, login e senha).
 * Crie um ficheiro .env na raiz do projeto com:
 *   VITE_SGAD_SIGNUP_URL=https://seu-dominio-real/cadastro
 */
export const SGAD_SIGNUP_URL =
  (import.meta.env.VITE_SGAD_SIGNUP_URL && String(import.meta.env.VITE_SGAD_SIGNUP_URL).trim()) ||
  "https://app.sgad.com.br/cadastro";
