import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../data/marketing.js";

export function FAQ() {
  const [iOpen, setIOpen] = useState(null);

  return (
    <section id="faq" className="bg-slate-900/60 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-400">FAQ</p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Perguntas frequentes</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const open = iOpen === i;
            return (
              <div key={i} className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 p-5 text-left text-white hover:bg-white/[0.04]"
                  onClick={() => setIOpen(open ? null : i)}
                >
                  <span className="text-sm font-medium sm:text-base">{f.q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-slate-400 transition ${open ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-[max-height] duration-300"
                  style={{ maxHeight: open ? "320px" : "0" }}
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
