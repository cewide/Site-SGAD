import { useState, useCallback } from "react";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { ModuleModal } from "./components/ModuleModal.jsx";
import { Hero } from "./sections/Hero.jsx";
import { Modules } from "./sections/Modules.jsx";
import { Differentials } from "./sections/Differentials.jsx";
import { Pricing } from "./sections/Pricing.jsx";
import { FAQ } from "./sections/FAQ.jsx";
import { CTA } from "./sections/CTA.jsx";

export default function Landing() {
  const [module, setModule] = useState(null);
  const close = useCallback(() => setModule(null), []);

  return (
    <div className="min-h-screen bg-slate-950 font-outfit text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Modules onOpenModule={setModule} />
        <Differentials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      {module ? <ModuleModal module={module} onClose={close} /> : null}
    </div>
  );
}
