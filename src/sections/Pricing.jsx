import { useEffect, useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { COMPETITORS } from "../data/marketing.js";
import { WHATSAPP_DEMO_URL, WHATSAPP_DISPLAY } from "../config.js";
import { WhatsAppPackagesPanel } from "./WhatsAppPackages.jsx";

function minTotal(list) {
  return list.reduce((acc, row) => {
    const m = row.price.match(/\d+/);
    return acc + (m ? parseInt(m[0], 10) : 0);
  }, 0);
}

export function Pricing() {
  const [waOpen, setWaOpen] = useState(false);
  const total = minTotal(COMPETITORS);
  const fmt = (n) => n.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  useEffect(() => {
    function syncHash() {
      if (window.location.hash === "#pacotes-whatsapp") setWaOpen(true);
    }
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  return (
    <section id="precos" className="scroll-mt-24 bg-slate-900/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-400">Preços</p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">Um valor. Tudo incluído.</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">Compare com o custo de ferramentas separadas.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="flex h-full min-h-[28rem] flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:min-h-[32rem] sm:p-8">
            <h3 className="mb-6 flex shrink-0 items-center gap-2 text-lg font-bold text-white">
              <X className="text-red-400" size={20} />
              Ferramentas em separado
            </h3>
            <ul className="min-h-0 flex-1 divide-y divide-white/10">
              {COMPETITORS.map((c) => (
                <li key={c.name} className="flex justify-between gap-4 py-3 text-sm">
                  <div>
                    <div className="font-medium text-white">{c.name}</div>
                    <div className="text-xs text-slate-500">{c.tool}</div>
                  </div>
                  <div className="shrink-0 font-semibold text-slate-300">
                    {c.price}
                    <span className="font-normal text-slate-500">/mês</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex shrink-0 justify-between border-t border-white/10 pt-4 text-sm">
              <span className="text-slate-400">Total mínimo estimado</span>
              <span className="text-xl font-bold text-red-400">R$ {fmt(total)}+/mês</span>
            </div>
          </div>

          <div className="relative flex h-full min-h-[28rem] flex-col overflow-hidden rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 to-sky-500/10 p-6 sm:min-h-[32rem] sm:p-8">
            <span className="absolute right-0 top-0 rounded-bl-xl bg-emerald-500 px-3 py-1 text-xs font-bold text-white">
              Mais popular
            </span>
            <h3 className="mb-2 flex items-center gap-2 pr-24 text-lg font-bold text-white">
              <Check className="text-emerald-400" size={20} />
              SGAD — tudo incluído
            </h3>
            <p className="mb-4 text-sm font-medium text-sky-300/90">
              Tudo incluído por menos que uma única ferramenta do mercado.
            </p>
            <div className="mb-2 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold sm:text-6xl">R$ 97</span>
              <span className="text-slate-400">/mês</span>
            </div>
            <p className="mb-6 text-sm font-medium text-emerald-400">
              Economize mais de R$ {fmt(total - 97)}/mês em relação a ferramentas separadas
            </p>
            <p className="mb-3 text-sm font-semibold text-white">9 módulos incluídos</p>
            <ul className="mb-4 min-h-0 flex-1 space-y-2 text-sm text-slate-300">
              {[
                "Scrumban",
                "Help Desk",
                "WhatsApp Business",
                "CRM Completo",
                "Análises e Gamificação",
                "IA Nativa (Ad)",
                "Comunicação",
                "Admin e Segurança",
                "Cadastro Central",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <Check className="mt-0.5 shrink-0 text-emerald-400" size={16} />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mb-6 text-xs text-slate-400 sm:text-sm">
              Sem fidelidade · Suporte incluído · Teste gratuito
            </p>
            <div className="mt-auto shrink-0">
              <a
                href={WHATSAPP_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 py-4 text-center text-lg font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:shadow-emerald-500/40"
              >
                Agendar demonstração
              </a>
              <p className="mt-3 text-center text-xs text-slate-500">
                WhatsApp · {WHATSAPP_DISPLAY} · A&amp;F Softwares
              </p>
            </div>
          </div>
        </div>

        <div id="pacotes-whatsapp" className="scroll-mt-24 mt-10 rounded-2xl border border-white/10 bg-slate-900/40">
          <button
            id="pacotes-whatsapp-trigger"
            type="button"
            onClick={() => setWaOpen((v) => !v)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/[0.04] sm:px-6 sm:py-5"
            aria-expanded={waOpen}
            aria-controls="pacotes-whatsapp-panel"
          >
            <span>
              <span className="block text-base font-semibold text-white sm:text-lg">Ver pacotes de mensagens WhatsApp</span>
              <span className="mt-1 block text-sm text-slate-500">
                Cobrança à parte conforme volume · API oficial META
              </span>
            </span>
            <ChevronDown
              size={22}
              className={`shrink-0 text-emerald-400 transition-transform ${waOpen ? "rotate-180" : ""}`}
              aria-hidden
            />
          </button>
          <div
            id="pacotes-whatsapp-panel"
            role="region"
            aria-labelledby="pacotes-whatsapp-trigger"
            aria-hidden={!waOpen}
            className={`border-t border-white/10 px-5 pb-8 pt-2 sm:px-6 ${waOpen ? "" : "hidden"}`}
          >
            {waOpen ? <WhatsAppPackagesPanel /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
