import scrumban from "../assets/modules/scrumban.png";
import helpDesk from "../assets/modules/help-desk.png";
import whatsapp from "../assets/modules/whatsapp.png";
import crm from "../assets/modules/crm.png";
import gamificacao from "../assets/modules/gamificacao.png";
import iaAd from "../assets/modules/ia-ad.png";
import comunicacao from "../assets/modules/comunicacao.png";

export const MODULES = [
  {
    id: "scrumban",
    name: "Scrumban",
    color: "#3B82F6",
    image: scrumban,
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
  },
  {
    id: "help-desk",
    name: "Help Desk",
    color: "#8B5CF6",
    image: helpDesk,
    summary:
      "Central de tickets com TME/TMA, operadores, SLAs, conversão em tarefa interna e permissões por chamado.",
    bullets: [
      "Dashboard operacional e indicadores de atendimento",
      "Tickets com categorias, prioridades e escalonamento",
      "Conversão de ticket em ordem de serviço / tarefa",
      "Configuração de SLAs e regras",
      "Permissões granulares por ticket",
    ],
  },
  {
    id: "whatsapp",
    name: "WhatsApp Business",
    color: "#22C55E",
    image: whatsapp,
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
  },
  {
    id: "crm",
    name: "CRM Completo",
    color: "#F59E0B",
    image: crm,
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
  },
  {
    id: "gamificacao",
    name: "Análises e Gamificação",
    color: "#EC4899",
    image: gamificacao,
    summary: "Relatórios, performance por equipe, ranking, badges, metas e feed de conquistas.",
    bullets: [
      "Relatórios gerenciais de produtividade",
      "Performance, feedback e visão por equipes",
      "Ranking, badges, metas e desafios",
      "Feed de atividades da equipe",
    ],
  },
  {
    id: "ia",
    name: "IA Nativa (Ad)",
    color: "#06B6D4",
    image: iaAd,
    summary:
      "Assistente SGAD: saúde operacional, consumo de tokens, insights, fluxos gerados por IA e resumos.",
    bullets: [
      "Score de saúde operacional (0–100)",
      "Monitoramento de tokens, chamadas e custo",
      "Insights sob demanda e atalhos operacionais",
      "Geração de fluxos de atendimento por IA",
      "Resumos de Wiki e de conversas",
    ],
  },
  {
    id: "comunicacao",
    name: "Comunicação",
    color: "#14B8A6",
    image: comunicacao,
    summary: "Mural interno, chat com grupos e Wiki em Markdown com apoio de IA.",
    bullets: [
      "Mural com posts, curtidas e comentários",
      "Chat: grupos, tópicos, anexos e vínculo a tickets/tarefas",
      "Wiki em Markdown com resumos por IA",
      "Central de notificações",
    ],
  },
  {
    id: "admin",
    name: "Admin e Segurança",
    color: "#6366F1",
    image: iaAd,
    summary:
      "Usuários, papéis, auditoria, backups, SMTP, importação em massa e personalização do login.",
    bullets: [
      "Usuários, papéis e permissões granulares",
      "Dados da empresa, equipes e branding no login",
      "Logs de auditoria e backups",
      "SMTP e importação com validação em background",
    ],
  },
  {
    id: "cadastro",
    name: "Cadastro Central",
    color: "#F97316",
    image: crm,
    summary: "Clientes e endereços numa base única para Scrumban, suporte, WhatsApp e CRM.",
    bullets: [
      "Cadastro de clientes com histórico integrado",
      "Endereços vinculados",
      "Dados compartilhados entre todos os módulos",
    ],
  },
];
