import { Layers, Brain, DollarSign, Zap, Shield, Trophy } from "lucide-react";
import { DIFFERENTIALS } from "../data/marketing.js";

const ICON_MAP = {
  layers: Layers,
  brain: Brain,
  dollar: DollarSign,
  zap: Zap,
  shield: Shield,
  trophy: Trophy,
};

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">Diferenciais</p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">Por que o SGAD?</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((d) => {
            const Icon = ICON_MAP[d.icon];
            return (
              <div
                key={d.title}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-blue-500/30"
              >
                <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 transition-colors group-hover:bg-blue-500/[0.18]">
                  {Icon ? <Icon size={22} className="text-blue-400" strokeWidth={2} aria-hidden /> : null}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{d.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-slate-400">{d.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
