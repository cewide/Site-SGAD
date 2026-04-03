/**
 * URL da página de cadastro (conta, login e senha) no sistema SGAD.
 * Defina VITE_SGAD_SIGNUP_URL no ficheiro .env na raiz do projeto.
 */
export const SIGNUP_URL =
  (import.meta.env.VITE_SGAD_SIGNUP_URL && String(import.meta.env.VITE_SGAD_SIGNUP_URL).trim()) ||
  "https://sgad.aefsoftwares.com.br/usuarios";
