import React from "react";
import Clinica from "../assets/images/clinica.jpg"

export default function Clinic() {
  return (
    <section className="clinic w-screen flex flex-col items-center my-8 gap-8 md:py-40 md:bg-[url('/image/vector2.png')] md:bg-no-repeat md:bg-top-right">
      <h2 className="text-dark-blue text-2xl font-semibold shadow-[5px_5px_0px] shadow-[var(--box-shadow)] lg:text-4xl">
        Nossa Clínica
      </h2>
      <img src={Clinica} alt="Imagem da clínica" className="clinic__image w-[90vw] md:max-w-[1000px] rounded-lg shadow-lg" />
      <p className="text-center text-dark-blue text-sm md:text-lg md:max-w-[60vw]">
        Venha conhecer nossas instalações modernas e aconchegantes, onde oferecemos um atendimento humanizado e de qualidade.
      </p>
    </section>
  );
}
