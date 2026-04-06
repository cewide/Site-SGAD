import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing.jsx";
import { PoliticaPrivacidadePage } from "./pages/PoliticaPrivacidadePage.jsx";
import { TermosPage } from "./pages/TermosPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/termos-de-uso" element={<TermosPage />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidadePage />} />
      </Routes>
    </BrowserRouter>
  );
}
