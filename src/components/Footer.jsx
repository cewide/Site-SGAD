import { Link } from "react-router-dom";
import { Logo } from "./Logo.jsx";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_DEMO_URL } from "../config.js";

const colTitle = "mb-4 text-xs font-bold uppercase tracking-wider text-slate-500";
const linkClass = "text-sm text-slate-400 transition hover:text-white";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-14">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Logo size={36} alt="Logotipo SGUAD — marca da plataforma de gestão da A&F Softwares" />
              <span className="text-lg font-bold text-white">SGUAD</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Plataforma all-in-one para gestão empresarial
            </p>
          </div>

          <div>
            <p className={colTitle}>Produto</p>
            <ul className="space-y-3">
              <li>
                <a href="/#modulos" className={linkClass}>
                  Módulos
                </a>
              </li>
              <li>
                <a href="/#precos" className={linkClass}>
                  Preços
                </a>
              </li>
              <li>
                <a href="/#faq" className={linkClass}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className={colTitle}>Empresa</p>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="font-medium text-slate-300">A&amp;F Softwares</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>

          <div>
            <p className={colTitle}>Contato</p>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href={WHATSAPP_DEMO_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  WhatsApp · {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} A&amp;F Softwares. Todos os direitos reservados.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/termos-de-uso" className="transition hover:text-slate-400">
              Termos de uso
            </Link>
            <Link to="/politica-de-privacidade" className="transition hover:text-slate-400">
              Política de privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
