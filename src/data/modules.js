const pngGlob = import.meta.glob("../assets/modules/*.png", { eager: true, import: "default" });
const webpGlob = import.meta.glob("../assets/modules/*.webp", { eager: true, import: "default" });

function assets(fileBase) {
  const pngKey = `../assets/modules/${fileBase}.png`;
  const webpKey = `../assets/modules/${fileBase}.webp`;
  return {
    image: pngGlob[pngKey],
    imageWebp: webpGlob[webpKey],
  };
}

function mod(fileBase, data) {
  return { ...data, ...assets(fileBase) };
}

/** Com .webp gerados (npm run generate:webp), o picture passa a servir WebP com fallback PNG. */
export const MODULES = [
  mod("scrumban", {
    id: "scrumban",
    name: "Scrumban",
    color: "#3B82F6",
    imageAlt: "Dashboard do Scrumban com métricas de sprint, backlog e tarefas por status",
    summary:
      "Scrum e Kanban no mesmo lugar: dashboards, sprints, backlog, tarefas, timesheet e timeline de produtividade.",
    bullets: [
      "Dashboard com métricas, saúde do sprint e progresso",
      "Tarefas com prioridades, responsáveis e dependências",
      "Backlog, sprints e retrospectiva",
      "Minhas tarefas, aprovações e histórico",
      "Projetos, atividades e estados do fluxo personalizáveis",
      "Timesheet e timeline de produtividade",
    ],
  }),
  mod("help-desk", {
    id: "help-desk",
    name: "Help Desk",
    color: "#8B5CF6",
    imageAlt: "Central de tickets do Help Desk com fila de atendimento e SLAs",
    summary:
      "Central de tickets com TME/TMA, operadores, SLAs, conversão em tarefa interna e permissões por chamado.",
    bullets: [
      "Dashboard operacional e indicadores de atendimento",
      "Tickets com categorias, prioridades e escalonamento",
      "Conversão de ticket em ordem de serviço / tarefa",
      "Configuração de SLAs e regras",
      "Permissões granulares por ticket",
    ],
  }),
  mod("whatsapp", {
    id: "whatsapp",
    name: "WhatsApp Business",
    color: "#22C55E",
    imageAlt: "Painel do WhatsApp Business com inbox e fluxos de automação",
    summary:
      "API oficial META: inbox, dashboard em tempo real, fluxos, filas inteligentes, IA de sentimento e LGPD.",
    bullets: [
      "Inbox unificado e painel de atendimentos",
      "Fluxos visuais (URA/chatbot) e templates META",
      "Quatro algoritmos de fila de distribuição",
      "CSAT/NPS, resumos por IA e análise de sentimento",
      "Ponte bidirecional e apoio interno ao operador",
      "Identificação por CNPJ e aceites LGPD",
    ],
  }),
  mod("crm", {
    id: "crm",
    name: "CRM Completo",
    color: "#F59E0B",
    imageAlt: "Funil de vendas do CRM com leads, oportunidades e propostas",
    summary:
      "Funil comercial completo: leads, oportunidades, propostas, campanhas e integração Serasa (até 500/mês).",
    bullets: [
      "Dashboard CRM e relatórios executivos",
      "Leads com scoring e funil Kanban",
      "Oportunidades, contatos, empresas e produtos",
      "Propostas, clientes e atividades",
      "Campos personalizados e campanhas",
      "Consulta Serasa incluída no pacote (limite mensal)",
    ],
  }),
  mod("gamificacao", {
    id: "gamificacao",
    name: "Análises e Gamificação",
    color: "#EC4899",
    imageAlt: "Rankings e badges de gamificação com metas por equipe",
    summary: "Relatórios, performance por equipe, ranking, badges, metas e feed de conquistas.",
    bullets: [
      "Relatórios gerenciais de produtividade",
      "Performance, feedback e visão por equipes",
      "Ranking, badges, metas e desafios",
      "Feed de atividades da equipe",
    ],
  }),
  mod("ia-ad", {
    id: "ia",
    name: "IA Nativa (Ad)",
    color: "#06B6D4",
    imageAlt: "Painel do assistente IA Ad com insights e consumo de tokens",
    summary:
      "Assistente SGUAD: saúde operacional, consumo de tokens, insights, fluxos gerados por IA e resumos.",
    bullets: [
      "Score de saúde operacional (0–100)",
      "Monitoramento de tokens, chamadas e custo",
      "Insights sob demanda e atalhos operacionais",
      "Geração de fluxos de atendimento por IA",
      "Resumos de Wiki e de conversas",
    ],
  }),
  mod("comunicacao", {
    id: "comunicacao",
    name: "Comunicação",
    color: "#14B8A6",
    imageAlt: "Chat interno com grupos, tópicos e Wiki integrada",
    summary: "Mural interno, chat com grupos e Wiki em Markdown com apoio de IA.",
    bullets: [
      "Mural com posts, curtidas e comentários",
      "Chat: grupos, tópicos, anexos e vínculo a tickets/tarefas",
      "Wiki em Markdown com resumos por IA",
      "Central de notificações",
    ],
  }),
  mod("admin-seguranca", {
    id: "admin",
    name: "Admin e Segurança",
    color: "#6366F1",
    imageAlt: "Configurações de equipes, permissões e auditoria",
    summary:
      "Gestão de equipes e membros, usuários, papéis, auditoria, backups, SMTP, importação e personalização do login.",
    bullets: [
      "Gestão de equipes, líderes e membros com permissões",
      "Usuários, papéis e permissões granulares",
      "Dados da empresa e branding no login",
      "Logs de auditoria e backups",
      "SMTP e importação com validação em background",
    ],
  }),
  mod("cadastro-central", {
    id: "cadastro",
    name: "Cadastro Central",
    color: "#F97316",
    imageAlt: "Cadastro central de clientes com histórico integrado",
    summary: "Clientes e endereços numa base única para Scrumban, suporte, WhatsApp e CRM.",
    bullets: [
      "Cadastro de clientes com histórico integrado",
      "Endereços vinculados",
      "Dados compartilhados entre todos os módulos",
    ],
  }),
];
