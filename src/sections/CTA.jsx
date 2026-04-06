import { useState } from "react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Logo } from "../components/Logo.jsx";
import { WHATSAPP_DEMO_URL, WHATSAPP_DISPLAY } from "../config.js";

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20";

export function CTA() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new URLSearchParams(data),
      });
      if (!res.ok) throw new Error("Erro ao enviar");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("idle");
      setError("Não foi possível enviar agora. Tente pelo WhatsApp ou mais tarde.");
    }
  }

  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-blue-950/30 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400">
            <Logo size={18} className="rounded-md" />
            WhatsApp · {WHATSAPP_DISPLAY}
          </div>
          <h2 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Pronto para simplificar a{" "}
            <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
              gestão da sua empresa?
            </span>
          </h2>
          <p className="mx-auto mb-0 max-w-2xl text-lg text-slate-400">
            Agende uma demonstração personalizada ou tire suas dúvidas com um consultor — a conversa começa pelo
            WhatsApp.
          </p>
        </div>

        <div className="mx-auto flex max-w-4xl flex-col gap-8 lg:max-w-none lg:flex-row lg:items-stretch lg:gap-10">
          <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <h3 className="mb-1 text-lg font-semibold text-white">Receba o contato da equipe</h3>
            <p className="mb-6 text-sm text-slate-400">
              Prefere e-mail ou está fora do horário? Deixe seus dados e retornamos.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label htmlFor="lead-name" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Nome
                </label>
                <input id="lead-name" name="name" type="text" required autoComplete="name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="lead-email" className="mb-1.5 block text-sm font-medium text-slate-300">
                  E-mail
                </label>
                <input
                  id="lead-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="lead-phone" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Telefone / WhatsApp
                </label>
                <input
                  id="lead-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="(11) 99999-9999"
                  className={inputClass}
                />
              </div>
              {error ? <p className="text-sm text-amber-400">{error}</p> : null}
              {status === "success" ? (
                <p className="text-sm text-emerald-400">Recebemos seus dados. Em breve entraremos em contato.</p>
              ) : null}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 py-4 text-center text-base font-bold text-white shadow-lg shadow-sky-500/20 transition hover:shadow-sky-500/35 disabled:opacity-60"
              >
                {status === "sending" ? "Enviando…" : "Quero uma demonstração"}
              </button>
            </form>
          </div>

          <div className="flex flex-1 flex-col justify-center gap-4 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] p-6 sm:p-8 lg:max-w-md lg:self-center">
            <p className="text-center text-sm text-slate-400 lg:text-left">Resposta imediata no horário comercial</p>
            <a
              href={WHATSAPP_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-5 text-lg font-bold text-white shadow-xl shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:shadow-emerald-500/40"
            >
              <MessageCircle size={22} className="shrink-0" aria-hidden />
              Ou fale agora pelo WhatsApp
              <ArrowRight size={20} className="shrink-0" aria-hidden />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
          {["Demonstração", "Consultor dedicado", "Sem compromisso"].map((t) => (
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
