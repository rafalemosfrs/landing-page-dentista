import React from "react";
import Dentista from "../assets/images/dentista.jpg"

export default function AboutMe() {
  return (
    <section className="flex flex-col items-center gap-5 p-12 w-screen box-border md:flex-row md:justify-evenly md:gap-12 bg-[#9bfec5] rounded-lg shadow-lg">
      <div className="w-[80vw]">
        <img
          src={Dentista}
          alt="Profile"
          className="w-[80vw] max-w-[400px] md:w-[40vw] md:max-w-[400px] rounded-lg shadow-md"
        />
      </div>

      <div className="w-[80vw]">
        <h4 className="text-light-blue text-[0.8rem] md:text-[1rem]">Sobre Mim</h4>
        <h2 className="text-dark-blue text-[2rem] font-semibold md:text-[3rem] shadow-[5px_5px_0px_var(--box-shadow)] my-8">
          Minha Jornada Profissional
        </h2>
        <ul className="text-black text-[0.8rem] md:text-[1rem]">
          <li className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li className="mb-4">Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.</li>
          <li className="mb-4">In condimentum facilisis porta.</li>
        </ul>
      </div>
    </section>
  );
}
