import { Check, X } from "lucide-react";
import { COMPETITORS } from "../data/marketing.js";
import { WHATSAPP_DEMO_URL, WHATSAPP_DISPLAY } from "../config.js";

function minTotal(list) {
  return list.reduce((acc, row) => {
    const m = row.price.match(/\d+/);
    return acc + (m ? parseInt(m[0], 10) : 0);
  }, 0);
}

export function Pricing() {
  const total = minTotal(COMPETITORS);
  const fmt = (n) => n.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <section id="precos" className="bg-slate-950 py-24 sm:py-32">
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
              Recomendado
            </span>
            <h3 className="mb-2 flex items-center gap-2 pr-24 text-lg font-bold text-white">
              <Check className="text-emerald-400" size={20} />
              SGAD — tudo incluído
            </h3>
            <p className="mb-4 text-sm text-slate-400">9 módulos + IA + suporte</p>
            <div className="mb-2 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold sm:text-6xl">R$ 97</span>
              <span className="text-slate-400">/mês</span>
            </div>
            <p className="mb-6 text-sm font-medium text-emerald-400">
              Economize mais de R$ {fmt(total - 97)}/mês em relação a ferramentas separadas
            </p>
            <ul className="mb-6 min-h-0 flex-1 space-y-2 text-sm text-slate-300">
              {[
                "Todos os módulos",
                "Assistente Ad (IA)",
                "WhatsApp Business (mensagens conforme pacote)",
                "CRM com funil",
                "Sem fidelidade",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <Check className="mt-0.5 shrink-0 text-emerald-400" size={16} />
                  {t}
                </li>
              ))}
            </ul>
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
        <p className="mt-8 text-center text-sm text-slate-500">
          * Pacotes de mensagens WhatsApp cobrados à parte conforme o volume.
        </p>
      </div>
    </section>
  );
}
