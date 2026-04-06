import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp.jsx";

export function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen bg-slate-950 font-outfit text-white antialiased">
      <Navbar />
      <main className="px-5 pb-24 pt-28 sm:pt-32">
        <article className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-extrabold text-white">Política de privacidade</h1>
          <p className="mt-6 leading-relaxed text-slate-400">
            Esta é uma <strong className="text-slate-300">página provisória</strong>. Substitua pela Política de
            Privacidade completa (LGPD), incluindo bases legais, direitos do titular e contato do encarregado (DPO),
            conforme orientação jurídica.
          </p>
          <Link
            to="/"
            className="mt-10 inline-flex text-sm font-semibold text-emerald-400 underline underline-offset-4 transition hover:text-emerald-300"
          >
            ← Voltar ao início
          </Link>
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
