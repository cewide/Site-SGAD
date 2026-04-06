import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo.jsx";
import { WHATSAPP_DEMO_URL } from "../config.js";

const nav = [
  ["/#modulos", "Módulos"],
  ["/#diferenciais", "Diferenciais"],
  ["/#precos", "Preços"],
  ["/#pacotes-whatsapp", "WhatsApp"],
  ["/#faq", "FAQ"],
];

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const link = "text-sm font-medium text-slate-300 transition hover:text-blue-400";
  const linkPrecos = "text-sm font-medium text-emerald-400 transition hover:text-emerald-300";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-[padding,background] ${
        scrolled ? "bg-slate-950/95 py-3 shadow-lg shadow-black/20 backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <Link
          to="/"
          className="flex items-center gap-2.5"
          onClick={() => {
            if (location.pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Logo size={36} />
          <span className="text-xl font-bold tracking-tight">SGAD</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className={href === "/#precos" ? linkPrecos : link}
            >
              {label}
            </a>
          ))}
          <a
            href={WHATSAPP_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:shadow-emerald-500/40"
          >
            Agendar demo
          </a>
        </nav>

        <button
          type="button"
          className="text-white md:hidden"
          aria-expanded={menu}
          aria-label={menu ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenu((v) => !v)}
        >
          {menu ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menu && (
        <div className="border-t border-white/10 bg-slate-950/98 px-5 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-3">
            {nav.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className={href === "/#precos" ? linkPrecos : link}
                onClick={() => setMenu(false)}
              >
                {label}
              </a>
            ))}
            <a
              href={WHATSAPP_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setMenu(false)}
            >
              Agendar demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
