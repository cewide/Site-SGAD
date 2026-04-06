import { Logo } from "./Logo.jsx";

const links = [
  ["#modulos", "Módulos"],
  ["#diferenciais", "Diferenciais"],
  ["#precos", "Preços"],
  ["#pacotes-whatsapp", "WhatsApp"],
  ["#faq", "FAQ"],
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Logo size={32} />
            <span className="font-bold">SGAD</span>
            <span className="ml-2 text-sm text-slate-500">A&amp;F Softwares</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            {links.map(([href, t]) => (
              <a key={href} href={href} className="transition hover:text-slate-300">
                {t}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} A&amp;F Softwares. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
