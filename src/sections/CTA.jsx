import { ArrowRight, Check } from "lucide-react";
import { Logo } from "../components/Logo.jsx";
import { SIGNUP_URL } from "../config.js";

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400">
          <Logo size={18} className="rounded-md" />
          Comece já — é grátis
        </div>
        <h2 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Gestão{" "}
          <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            inteligente e integrada
          </span>
        </h2>
        <p className="mb-10 text-lg text-slate-400">
          Crie a sua conta e teste os 9 módulos. Sem cartão e sem compromisso.
        </p>
        <a
          href={SIGNUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-10 py-5 text-lg font-bold text-white shadow-xl shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:shadow-emerald-500/40"
        >
          Criar conta grátis
          <ArrowRight size={20} />
        </a>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
          {["Teste grátis", "Sem cartão", "Sem fidelidade"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <Check size={14} className="text-emerald-400" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
