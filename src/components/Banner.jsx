import React from "react";
import banner from "../assets/images/banner.jpg"

export default function Banner() {
  return (
    <section className="banner flex flex-col items-center md:flex-row md:justify-around md:gap-2 bg-[#9bfec5] p-4 rounded-lg shadow-lg">
      <img
        src={banner}
        alt="Banner"
        className="w-screen mt-4 md:w-[50vw] md:h-[50vw] md:max-w-[900px] md:max-h-[500px] md:order-2 rounded-lg shadow-md"
      />

      <div className="banner__content flex flex-col items-start flex-wrap p-10 gap-5 w-full md:w-[50vw] md:ml-8 md:mt-12 md:order-1">
        <h4 className="text-light-blue text-[0.8rem] md:text-[1rem]">Destaques</h4>
        <h2 className="text-dark-blue text-[1.5rem] font-semibold leading-8 tracking-wider md:font-bold lg:text-[2.5rem]">
          Nossa <span className="text-light-blue">Especialidade</span>
        </h2>
        <p className="text-black font-light text-[0.8rem] text-justify md:leading-6 lg:text-[1.5rem] lg:leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor
          eros vel nulla feugiat, eu sollicitudin mauris aliquam.
        </p>
        
        <div className="banner__content__links flex justify-around items-center flex-wrap gap-4 pt-8 w-full">
          <a
            href="#"
            className="banner__content__links--button flex-shrink-0 px-4 py-4 rounded-md bg-light-blue text-white text-center text-[0.8rem] font-medium md:text-[1rem] lg:text-[1.5rem] lg:py-8 transition-transform transform hover:scale-105"
          >
            Saiba Mais
          </a>
          <a
            href="#"
            className="banner__content__links--button flex-shrink-0 px-4 py-4 rounded-md bg-light-blue text-white text-center text-[0.8rem] font-medium md:text-[1rem] lg:text-[1.5rem] lg:py-8 transition-transform transform hover:scale-105"
          >
            Contato
          </a>
        </div>
      </div>
    </section>
  );
}
