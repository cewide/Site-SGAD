/**
 * CTA principal do site: WhatsApp para agendar demonstração ou falar com consultor.
 *
 * Opcional no .env:
 *   VITE_WHATSAPP_CTA_URL — URL completa (substitui tudo)
 *   VITE_WHATSAPP_NUMBER — só dígitos, ex. 551146731054
 *   VITE_WHATSAPP_MESSAGE — texto inicial da conversa
 */

const DEFAULT_NUMBER = "551146731054"; // +55 11 4673-1054

/** Texto amigável para mostrar no site (não altera o link). */
export const WHATSAPP_DISPLAY = "+55 (11) 4673-1054";

const DEFAULT_MESSAGE =
  "Olá! Vim pelo site do SGAD e gostaria de agendar uma demonstração ou falar com um consultor.";

function digitsOnly(s) {
  return String(s || "").replace(/\D/g, "");
}

const envUrl = import.meta.env.VITE_WHATSAPP_CTA_URL?.trim();
const envPhone = digitsOnly(import.meta.env.VITE_WHATSAPP_NUMBER) || DEFAULT_NUMBER;
const envMessage = import.meta.env.VITE_WHATSAPP_MESSAGE?.trim() || DEFAULT_MESSAGE;

/** Link wa.me com número e mensagem (ou URL completa via env). */
export const WHATSAPP_DEMO_URL =
  envUrl || `https://wa.me/${envPhone}?text=${encodeURIComponent(envMessage)}`;

/** E-mail institucional exibido no rodapé. Opcional: VITE_CONTACT_EMAIL */
export const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL?.trim() || "contato@afsoftwares.com.br";
