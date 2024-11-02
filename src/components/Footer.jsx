import React from "react";
import Contact from "./Contact";

export default function Footer() {
  return (
    <footer className="footer w-screen bg-[#9bfec5]"> 
      <h2 className="text-[#003d00] text-2xl font-semibold text-center p-8 shadow-[5px_5px_0px] shadow-[var(--box-shadow)] lg:text-4xl"> 
        Fale Conosco
      </h2>

      <Contact />
      <div className="footer__text py-20">
        <p className="text-center text-xs mb-4 lg:text-base text-[#003d00]"> 
          © 2024 Clínica Dental. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
