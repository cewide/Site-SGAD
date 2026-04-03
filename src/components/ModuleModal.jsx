import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export function ModuleModal({ module, onClose }) {
  useEffect(() => {
    if (!module) return;
    const esc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);
    const o = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", esc);
      document.body.style.overflow = o;
    };
  }, [module, onClose]);

  if (!module || typeof document === "undefined" || !document.body) return null;

  const node = (
    <div
      className="fixed inset-0 flex items-end justify-center p-4 sm:items-center sm:p-6"
      style={{ zIndex: 2147483646 }}
    >
      <button
        type="button"
        className="absolute inset-0 border-0 bg-slate-950/90 backdrop-blur-md"
        aria-label="Fechar"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-module-title"
        className="relative z-10 flex max-h-[min(92vh,860px)] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 text-left text-white shadow-2xl"
      >
        <div className="absolute left-0 right-0 top-0 h-1" style={{ backgroundColor: module.color }} />
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-800 text-white hover:bg-slate-700"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        <div className="overflow-y-auto">
          <div className="border-b border-white/10 bg-slate-950">
            <img
              src={module.image}
              alt={`${module.name} no SGAD`}
              className="mx-auto block max-h-[min(48vh,420px)] w-full object-contain object-top sm:max-h-[min(52vh,480px)]"
              draggable={false}
            />
          </div>
          <div className="p-6 sm:p-8">
            <h2 id="modal-module-title" className="mb-3 pr-12 text-2xl font-bold">
              {module.name}
            </h2>
            <p className="mb-5 text-slate-400">{module.summary}</p>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-sky-400">Funcionalidades</p>
            <ul className="space-y-2 text-sm text-slate-300 sm:text-base">
              {module.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(node, document.body);
}
