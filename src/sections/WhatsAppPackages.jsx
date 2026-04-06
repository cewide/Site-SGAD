import { Check, MessageCircle } from "lucide-react";
import { WHATSAPP_EXTRA_DISPAROS, WHATSAPP_MESSAGE_PLANS } from "../data/whatsappPackages.js";
import { WHATSAPP_DEMO_URL } from "../config.js";

/** Conteúdo dos pacotes (usado dentro do acordeão em Preços). */
export function WhatsAppPackagesPanel() {
  return (
    <div className="pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400">
            <MessageCircle size={14} className="text-[#25D366]" aria-hidden />
            API oficial META · WhatsApp Business
          </div>
          <h3 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">Pacotes de mensagens</h3>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
            Limites de <strong className="font-semibold text-slate-300">aberturas de conversa</strong> e{" "}
            <strong className="font-semibold text-slate-300">disparos</strong> para o módulo WhatsApp do SGUAD.
            Faturados à parte da mensalidade da plataforma.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {WHATSAPP_MESSAGE_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`flex h-full flex-col rounded-2xl border p-6 sm:p-8 ${
                plan.featured
                  ? "border-emerald-500/50 bg-gradient-to-b from-emerald-500/10 to-slate-900/80 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/20"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {plan.badge ? (
                <span
                  className={`mb-3 inline-flex w-fit rounded-full px-3 py-0.5 text-xs font-bold ${
                    plan.featured ? "bg-emerald-500 text-white" : "bg-white/10 text-slate-300"
                  }`}
                >
                  {plan.badge}
                </span>
              ) : (
                <span className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Entrada</span>
              )}
              <h4 className="mb-6 text-2xl font-bold text-white">{plan.name}</h4>
              <ul className="mb-8 flex flex-1 flex-col gap-3 text-sm text-slate-300">
                {plan.features.map((line) => (
                  <li key={line} className="flex gap-3">
                    <Check
                      size={18}
                      className={`mt-0.5 shrink-0 ${plan.featured ? "text-emerald-400" : "text-emerald-500/80"}`}
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto block w-full rounded-xl py-3.5 text-center text-sm font-semibold transition ${
                  plan.featured
                    ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35"
                    : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Consultar este plano
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-slate-950/60 p-6 sm:p-10">
          <h4 className="mb-2 text-center text-xl font-bold text-white sm:text-2xl">Pacotes extras de disparos</h4>
          <p className="mx-auto mb-8 max-w-xl text-center text-sm text-slate-400">
            Amplie o volume quando precisar — valores adicionais por pacote de disparos.
          </p>
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
            {WHATSAPP_EXTRA_DISPAROS.map((extra) => (
              <div
                key={extra.id}
                className="flex flex-col items-center rounded-xl border border-white/10 bg-white/[0.04] px-5 py-6 text-center transition hover:border-emerald-500/30"
              >
                <span className="text-lg font-bold text-white">+ {extra.disparos}</span>
                <span className="mt-2 text-2xl font-extrabold text-emerald-400">{extra.preco}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          Limites e políticas de faturamento seguem as regras da Meta e do contrato do SGUAD. Valores e condições
          comerciais confirmados com a equipe.
        </p>
      </div>
    </div>
  );
}
