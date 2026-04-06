import { ArrowRight } from "lucide-react";
import { MODULES } from "../data/modules.js";
import { ModuleImage } from "../components/ModuleImage.jsx";

export function Modules({ onOpenModule }) {
  return (
    <section id="modulos" className="scroll-mt-24 bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">9 módulos integrados</p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">Tudo conectado. Tudo em um só lugar.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Mais de 75 funcionalidades nativas em 9 módulos integrados. Explore cada módulo para ver o sistema real.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => onOpenModule(m)}
              className="group flex min-h-[260px] w-full touch-manipulation flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left text-white transition hover:border-white/20 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <div className="relative aspect-[16/10] shrink-0 overflow-hidden border-b border-white/10 bg-slate-900">
                <div className="absolute inset-x-0 top-0 z-10 h-1" style={{ backgroundColor: m.color }} />
                <ModuleImage
                  png={m.image}
                  webp={m.imageWebp}
                  alt={m.imageAlt}
                  className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-lg font-bold group-hover:text-blue-200">{m.name}</h3>
                <p className="line-clamp-3 flex-1 text-sm text-slate-400">{m.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-400">
                  Ver detalhes
                  <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-blue-500/15 bg-gradient-to-r from-blue-500/5 to-blue-600/5 p-8 md:grid-cols-4">
          {[
            ["9", "Módulos"],
            ["75+", "Funcionalidades"],
            ["3", "Dashboards"],
            ["1", "Assistente IA"],
          ].map(([v, l]) => (
            <div key={l} className="text-center">
              <div className="text-3xl font-extrabold text-white md:text-4xl">{v}</div>
              <div className="text-sm text-slate-400">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
