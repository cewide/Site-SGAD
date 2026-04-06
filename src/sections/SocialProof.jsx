import { Quote } from "lucide-react";
import {
  SOCIAL_PROOF_LOGOS,
  SOCIAL_PROOF_METRICS,
  SOCIAL_PROOF_TESTIMONIALS,
} from "../data/socialProof.js";

export function SocialProof() {
  return (
    <section id="prova-social" className="scroll-mt-24 bg-slate-900/40 py-20 sm:py-28">
      {/* SUBSTITUIR POR DADOS REAIS — conferir src/data/socialProof.js */}
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
            Empresas que já usam o SGAD
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-slate-400">
            Times que unificaram gestão, suporte e relacionamento em um só lugar.
          </p>
        </div>

        <div className="mb-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-10">
          {SOCIAL_PROOF_LOGOS.map((logo) => (
            <div
              key={logo.id}
              className="flex h-14 min-w-[7rem] items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-6 text-xs font-semibold uppercase tracking-wide text-slate-500"
            >
              {logo.name}
            </div>
          ))}
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {SOCIAL_PROOF_TESTIMONIALS.map((t) => (
            <article
              key={t.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-slate-950/50 p-6 shadow-lg shadow-black/20"
            >
              <Quote className="mb-4 h-8 w-8 text-emerald-500/60" aria-hidden />
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-300">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div
                  className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 ring-2 ring-white/10"
                  aria-hidden
                />
                <div className="min-w-0 text-left">
                  <p className="truncate font-semibold text-white">{t.name}</p>
                  <p className="truncate text-xs text-slate-500">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 via-slate-900/80 to-sky-500/10 px-6 py-8 sm:px-10">
          <div className="grid gap-8 sm:grid-cols-3 sm:gap-4">
            {SOCIAL_PROOF_METRICS.map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-2xl font-extrabold text-white sm:text-3xl">{m.value}</p>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
