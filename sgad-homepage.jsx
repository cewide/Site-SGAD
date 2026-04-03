import { useState, useEffect, useRef } from "react";
import {
  LayoutDashboard,
  Headphones,
  MessageCircle,
  Briefcase,
  BarChart3,
  Bot,
  MessagesSquare,
  Settings,
  Database,
  ChevronDown,
  ChevronRight,
  Check,
  ArrowRight,
  Zap,
  Shield,
  Brain,
  DollarSign,
  Menu,
  X,
  Star,
  Users,
  Clock,
  TrendingUp,
  Layers,
  Sparkles,
  Send,
  Trophy,
  MousePointerClick,
} from "lucide-react";

/* ───────────────────── helpers ───────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeIn({ children, className = "", delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ───────────────────── logo ───────────────────── */
function SGADLogo({ size = 36 }) {
  const id = "sgad_" + size;
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer rounded square — blue gradient with 3D feel */}
      <rect x="2" y="2" width="116" height="116" rx="28" fill={`url(#${id}_bg)`} />
      {/* Top highlight edge */}
      <rect x="2" y="2" width="116" height="116" rx="28" fill={`url(#${id}_shine)`} />
      {/* Inner border glow */}
      <rect x="6" y="6" width="108" height="108" rx="24" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
      {/* White rounded container (the board frame) */}
      <rect x="26" y="28" width="68" height="64" rx="10" fill="white" />
      <rect x="26" y="28" width="68" height="64" rx="10" stroke="rgba(0,0,0,0.06)" strokeWidth="1" fill="none" />
      {/* Column 1 — left (two short cards stacked) */}
      <rect x="33" y="36" width="16" height="20" rx="4" fill={`url(#${id}_card)`} />
      <rect x="33" y="60" width="16" height="24" rx="4" fill={`url(#${id}_card)`} />
      {/* Column 2 — center (one tall card) */}
      <rect x="52" y="36" width="16" height="24" rx="4" fill={`url(#${id}_card)`} />
      {/* Column 3 — right (one tall card) */}
      <rect x="71" y="36" width="16" height="48" rx="4" fill={`url(#${id}_card)`} />
      <defs>
        <linearGradient id={`${id}_bg`} x1="60" y1="0" x2="60" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="0.5" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id={`${id}_shine`} x1="60" y1="0" x2="60" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.18" />
          <stop offset="0.4" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="black" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id={`${id}_card`} x1="50" y1="36" x2="50" y2="84" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DBEAFE" />
          <stop offset="1" stopColor="#BFDBFE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ───────────────────── data ───────────────────── */
const modules = [
  { icon: LayoutDashboard, name: "Scrumban", desc: "Gerencie projetos com a agilidade do Scrum e a flexibilidade do Kanban em um só lugar.", color: "#3B82F6" },
  { icon: Headphones, name: "Help Desk", desc: "Atenda seus clientes com SLA, tickets inteligentes e conversão automática em tarefas.", color: "#8B5CF6" },
  { icon: MessageCircle, name: "WhatsApp Business", desc: "Atendimento omnichannel com chatbot, filas inteligentes e análise de sentimento por IA.", color: "#22C55E" },
  { icon: Briefcase, name: "CRM Completo", desc: "Pipeline visual, propostas, campanhas e consulta Serasa para fechar mais negócios.", color: "#F59E0B" },
  { icon: BarChart3, name: "Análises e Gamificação", desc: "Rankings, badges, metas e desafios que transformam produtividade em engajamento real.", color: "#EC4899" },
  { icon: Bot, name: "IA Nativa (Ad)", desc: "Assistente que gera fluxos, resume atendimentos, analisa sentimento e entrega insights.", color: "#06B6D4" },
  { icon: MessagesSquare, name: "Comunicação", desc: "Chat interno, wiki com IA, mural de avisos e base de conhecimento para sua equipe.", color: "#14B8A6" },
  { icon: Settings, name: "Admin e Segurança", desc: "Permissões granulares, logs de auditoria, backups e conformidade com LGPD.", color: "#6366F1" },
  { icon: Database, name: "Cadastro Central", desc: "Base única de clientes e contatos compartilhada entre todos os módulos.", color: "#F97316" },
];

const competitors = [
  { name: "Gestão de Projetos", tool: "Ferramenta de projetos e tarefas", price: "R$ 50–200" },
  { name: "Help Desk", tool: "Plataforma de atendimento e tickets", price: "R$ 100–400" },
  { name: "CRM", tool: "Sistema de CRM e vendas", price: "R$ 100–500" },
  { name: "WhatsApp Business", tool: "Plataforma de automação WhatsApp", price: "R$ 200–800" },
  { name: "Comunicação Interna", tool: "Ferramenta de chat corporativo", price: "R$ 30–100" },
  { name: "IA / Automação", tool: "Assistente IA e automações", price: "R$ 100–300" },
];

const faqs = [
  { q: "O SGAD substitui mesmo todas essas ferramentas?", a: "Sim. O SGAD integra nativamente gestão de projetos, help desk, CRM, WhatsApp Business, IA e comunicação. Não é integração via API — é um sistema único onde tudo conversa de verdade." },
  { q: "R$ 97/mês parece bom demais. Qual é o truque?", a: "Nenhum. Somos uma empresa enxuta e eficiente. O valor inclui todos os 9 módulos, IA nativa e suporte. Pacotes de mensagens WhatsApp são cobrados à parte conforme seu volume." },
  { q: "Consigo testar antes de pagar?", a: "Sim. Oferecemos período de teste gratuito para você explorar todos os módulos sem compromisso e sem precisar cadastrar cartão de crédito." },
  { q: "É difícil migrar meus dados?", a: "Não. O SGAD tem importação inteligente com mapeamento visual de campos, validação prévia e correção inline. O processo roda em background sem travar o sistema." },
  { q: "Funciona bem no celular?", a: "Sim. O SGAD é responsivo e funciona em qualquer dispositivo. Sua equipe pode gerenciar tarefas, atender clientes e acompanhar métricas de qualquer lugar." },
  { q: "E se eu precisar de ajuda?", a: "Você conta com suporte por chat e WhatsApp, base de conhecimento completa com Wiki integrada e o assistente Ad com IA para tirar dúvidas em tempo real." },
];

const differentials = [
  { icon: Layers, title: "Tudo em Um", desc: "9 módulos integrados nativamente. Nada de colar ferramentas separadas." },
  { icon: Brain, title: "IA Nativa Inclusa", desc: "O assistente Ad analisa, resume, sugere e automatiza — sem custo extra." },
  { icon: DollarSign, title: "R$ 97/mês. Só isso.", desc: "Todos os módulos por menos do que você paga em uma só ferramenta." },
  { icon: Zap, title: "Integração Real", desc: "Ticket vira tarefa. Lead do WhatsApp alimenta o CRM. Tudo conectado." },
  { icon: Shield, title: "Seguro e Compliant", desc: "LGPD, logs de auditoria, permissões granulares e backups automáticos." },
  { icon: Trophy, title: "Gamificação", desc: "Rankings, badges e metas que engajam sua equipe de verdade." },
];

/* ───────────────────── components ───────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = "text-sm font-medium transition-colors hover:text-blue-400";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/20 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <SGADLogo size={36} />
          <span className="text-xl font-bold text-white tracking-tight">
            SGAD
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#modulos" className={linkClass}>Módulos</a>
          <a href="#diferenciais" className={linkClass}>Diferenciais</a>
          <a href="#precos" className={linkClass}>Preços</a>
          <a href="#faq" className={linkClass}>FAQ</a>
          <a
            href="#cta-final"
            className="ml-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:translate-y-px transition-all active:scale-95"
          >
            Teste Grátis
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-md border-t border-white/5 px-5 pb-6 pt-4 flex flex-col gap-4 text-slate-300">
          <a href="#modulos" onClick={() => setOpen(false)} className={linkClass}>Módulos</a>
          <a href="#diferenciais" onClick={() => setOpen(false)} className={linkClass}>Diferenciais</a>
          <a href="#precos" onClick={() => setOpen(false)} className={linkClass}>Preços</a>
          <a href="#faq" onClick={() => setOpen(false)} className={linkClass}>FAQ</a>
          <a
            href="#cta-final"
            onClick={() => setOpen(false)}
            className="mt-2 text-center px-5 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold"
          >
            Teste Grátis
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BG gradient mesh */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-400/6 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center px-5 py-32">
        {/* Badge */}
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-medium mb-8 backdrop-blur-sm">
            <Sparkles size={14} />
            Plataforma All-in-One com IA Nativa
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.1}>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Uma plataforma.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300 bg-clip-text text-transparent">
              Tudo que sua empresa precisa.
            </span>
          </h1>
        </FadeIn>

        {/* Subheadline */}
        <FadeIn delay={0.2}>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Projetos, suporte, CRM, WhatsApp, IA e gamificação em um único sistema integrado.
            Pare de pagar por 5 ferramentas. Comece a usar uma que faz tudo.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cta-final"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all active:scale-95 flex items-center gap-2"
            >
              Comece Grátis
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#modulos"
              className="px-8 py-4 rounded-xl border border-white/10 text-slate-300 font-semibold hover:bg-white/5 transition-all"
            >
              Conhecer Módulos
            </a>
          </div>
        </FadeIn>

        {/* Price anchor */}
        <FadeIn delay={0.4}>
          <p className="mt-8 text-sm text-slate-500">
            Todos os 9 módulos por apenas <span className="text-orange-400 font-semibold">R$ 97/mês</span> · Sem fidelidade · Teste grátis
          </p>
        </FadeIn>

        {/* Replaces bar */}
        <FadeIn delay={0.5}>
          <div className="mt-16 pt-8 border-t border-white/5">
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-5 font-medium">
              Substitui suas ferramentas de
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-slate-500 text-sm font-medium">
              {["Gestão de Projetos", "Help Desk", "CRM", "WhatsApp", "Automação", "Chat Interno", "IA"].map((t) => (
                <span key={t} className="hover:text-slate-300 transition-colors">{t}</span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section id="modulos" className="relative bg-slate-950 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">9 Módulos Integrados</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Tudo conectado. Tudo em um.
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
              Cada módulo funciona sozinho e brilha junto. Um ticket vira tarefa. Um lead do WhatsApp alimenta o CRM. A IA cruza tudo e entrega insights.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m, i) => (
            <FadeIn key={m.name} delay={i * 0.06}>
              <div className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `${m.color}18` }}
                >
                  <m.icon size={22} style={{ color: m.color }} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{m.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Stats bar */}
        <FadeIn delay={0.3}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-gradient-to-r from-blue-500/5 to-blue-600/5 border border-blue-500/10">
            {[
              { value: "9", label: "Módulos" },
              { value: "75+", label: "Funcionalidades" },
              { value: "3", label: "Dashboards" },
              { value: "1", label: "Assistente IA" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{s.value}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section id="diferenciais" className="relative bg-slate-900/50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">Diferenciais</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Por que escolher o SGAD?
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((d, i) => (
            <FadeIn key={d.title} delay={i * 0.07} className="flex">
              <div className="flex flex-col p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/20 transition-all group w-full">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5 group-hover:bg-blue-500/15 transition-colors shrink-0">
                  <d.icon size={22} className="text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{d.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{d.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const totalMin = competitors.reduce((s, c) => {
    const n = parseInt(c.price.replace(/[^\d]/g, ""));
    return s + n;
  }, 0);

  const fmt = (v) => v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <section id="precos" className="relative bg-slate-950 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-3">Comparação de Preço</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Pare de pagar por 6 ferramentas
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto text-lg">
              Veja quanto você economiza usando o SGAD no lugar de soluções separadas.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Competitor breakdown */}
          <FadeIn delay={0.1}>
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 sm:p-8">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <X size={18} className="text-red-400" />
                Ferramentas separadas
              </h3>
              <div className="space-y-4">
                {competitors.map((c) => (
                  <div key={c.name} className="flex items-center justify-between py-3 border-b border-white/[0.05] last:border-0">
                    <div>
                      <div className="text-white text-sm font-medium">{c.name}</div>
                      <div className="text-slate-500 text-xs">{c.tool}</div>
                    </div>
                    <div className="text-slate-300 font-semibold text-sm">{c.price}<span className="text-slate-500 font-normal">/mês</span></div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-slate-400 font-medium text-sm">Total estimado mínimo</span>
                <span className="text-red-400 font-bold text-xl">R$ {fmt(totalMin)}+/mês</span>
              </div>
            </div>
          </FadeIn>

          {/* SGAD card */}
          <FadeIn delay={0.2}>
            <div className="rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 to-sky-500/5 p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-emerald-500 text-white text-xs font-bold rounded-bl-xl">
                MELHOR OPÇÃO
              </div>
              <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                <Check size={18} className="text-emerald-400" />
                SGAD — Tudo Incluso
              </h3>
              <p className="text-slate-400 text-sm mb-8">9 módulos + IA nativa + suporte</p>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl sm:text-6xl font-extrabold text-white">R$ 97</span>
                <span className="text-slate-400 text-lg">/mês</span>
              </div>
              <p className="text-emerald-400 text-sm font-medium mb-8">
                Economia de mais de R$ {fmt(totalMin - 97)}/mês comparado a ferramentas separadas
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Todos os 9 módulos inclusos",
                  "IA nativa (Assistente Ad) inclusa",
                  "WhatsApp Business com chatbot",
                  "CRM completo com funil visual",
                  "Gamificação e análises",
                  "Sem fidelidade — cancele quando quiser",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#cta-final"
                className="block w-full text-center px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-lg shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:-translate-y-0.5 transition-all active:scale-[0.98]"
              >
                Começar Teste Grátis
              </a>
              <p className="text-center text-slate-500 text-xs mt-3">Sem cartão de crédito · Cancele a qualquer momento</p>
            </div>
          </FadeIn>
        </div>

        {/* Message packages note */}
        <FadeIn delay={0.3}>
          <p className="text-center text-slate-500 text-sm mt-8">
            * Pacotes de mensagens WhatsApp são cobrados separadamente conforme o volume de envio da sua empresa.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="relative bg-slate-900/50 py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-5">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-3">Dúvidas Frequentes</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Perguntas que você pode ter
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="text-white font-medium text-sm sm:text-base pr-4">{f.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isOpen ? "300px" : "0" }}
                  >
                    <p className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section id="cta-final" className="relative bg-slate-950 py-24 sm:py-32 overflow-hidden">
      {/* BG glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-emerald-500/6 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto text-center px-5">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
            <Zap size={14} />
            Comece agora. É grátis.
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Sua empresa merece uma gestão{" "}
            <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
              inteligente e integrada
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Teste todos os 9 módulos do SGAD gratuitamente. Sem cartão de crédito, sem compromisso, sem surpresas.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-lg shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all active:scale-95"
          >
            Criar Minha Conta Grátis
            <ArrowRight size={20} />
          </a>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm">
            <span className="flex items-center gap-1.5"><Check size={14} className="text-emerald-400" /> Teste grátis</span>
            <span className="flex items-center gap-1.5"><Check size={14} className="text-emerald-400" /> Sem cartão</span>
            <span className="flex items-center gap-1.5"><Check size={14} className="text-emerald-400" /> Sem fidelidade</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/[0.05] py-12">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <SGADLogo size={32} />
            <span className="text-white font-bold">SGAD</span>
            <span className="text-slate-500 text-sm ml-2">por A&F Softwares</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm">
            <a href="#modulos" className="hover:text-slate-300 transition-colors">Módulos</a>
            <a href="#diferenciais" className="hover:text-slate-300 transition-colors">Diferenciais</a>
            <a href="#precos" className="hover:text-slate-300 transition-colors">Preços</a>
            <a href="#faq" className="hover:text-slate-300 transition-colors">FAQ</a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/[0.05] text-center text-slate-600 text-xs">
          © {new Date().getFullYear()} A&F Softwares. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────── App ───────────────────── */
export default function SGADHomepage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white" style={{ fontFamily: "'Outfit', 'Segoe UI', system-ui, sans-serif" }}>
      {/* Google Font */}
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <Navbar />
      <Hero />
      <Modules />
      <Differentials />
      <Pricing />
      <FAQ />
      <CTAFinal />
      <Footer />
    </div>
  );
}
