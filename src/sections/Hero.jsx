import { ArrowRight } from "lucide-react";
import { Logo } from "../components/Logo.jsx";
import { SIGNUP_URL } from "../config.js";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute left-1/4 top-0 h-[min(600px,80vw)] w-[min(600px,80vw)] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-[min(500px,70vw)] w-[min(500px,70vw)] translate-x-1/4 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 pb-20 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-300">
          <Logo size={20} className="rounded-md" />
          Plataforma all-in-one com IA nativa
        </div>

        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Uma plataforma.{" "}
          <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
            Tudo que a sua empresa precisa.
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 sm:text-xl">
          Projetos, suporte, CRM, WhatsApp, IA e gamificação em um único sistema. Pare de pagar por várias assinaturas.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:shadow-emerald-500/40"
          >
            Comece grátis
            <ArrowRight size={20} />
          </a>
          <a
            href="#modulos"
            className="rounded-xl border border-white/15 px-8 py-4 font-semibold text-slate-300 transition hover:bg-white/5"
          >
            Ver módulos
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          9 módulos por <span className="font-semibold text-emerald-400">R$ 97/mês</span> · Sem fidelidade · Teste grátis
        </p>
      </div>
    </section>
  );
}
