/** Planos de mensagens — WhatsApp Business API oficial (META), cobrados à parte da assinatura SGUAD. */

export const WHATSAPP_MESSAGE_PLANS = [
  {
    id: "start",
    name: "Start",
    badge: null,
    features: [
      "1 número conectado",
      "50 aberturas de conversas",
      "500 disparos",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    badge: "Equilíbrio",
    featured: true,
    features: [
      "Tudo do Start",
      "+ 150 aberturas de conversas",
      "+ 1.500 disparos",
    ],
  },
  {
    id: "business",
    name: "Business",
    badge: "Alto volume",
    features: [
      "Tudo do Pro",
      "+ 200 aberturas de conversas",
      "+ 3.000 disparos",
    ],
  },
];

export const WHATSAPP_EXTRA_DISPAROS = [
  { id: "e500", disparos: "500 disparos", preco: "R$ 40,00" },
  { id: "e1000", disparos: "1.000 disparos", preco: "R$ 60,00" },
  { id: "e5000", disparos: "5.000 disparos", preco: "R$ 250,00" },
];
