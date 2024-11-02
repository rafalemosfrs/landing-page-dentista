import React from "react";
import Mulher from "../assets/images/mulher.jpg"
import Homem from "../assets/images/homem.jpg"

export default function Testimonials() {
  return (
    <section className="flex flex-col items-center w-screen px-5 py-12 gap-10 box-border">
      <h4 className="text-light-blue text-[0.8rem] md:text-[1.5rem]">Depoimentos</h4>
      <h2 className="text-dark-blue text-center text-[1.5rem] font-semibold md:text-[4rem] shadow-[5px_5px_0px_var(--box-shadow)]">
        O que dizem nossos pacientes
      </h2>
      
      <div className="flex flex-wrap justify-center w-screen md:gap-12">
        <div className="flex flex-col items-center justify-center w-[40vw] p-8 gap-4 m-4 md:max-w-[1000px] md:mt-8 rounded-lg shadow-[5px_5px_20px_0px_var(--box-shadow)] transition duration-300 ease-in-out hover:bg-[#9bfec5]"> 
          <h3 className="text-dark-blue text-[1rem] font-semibold md:text-[2rem]">
            Maria Paz
          </h3>
          <img src={Mulher} alt="Estrelas" className="md:max-w-[200px]" />
          <p className="text-[0.8rem] text-black leading-4 md:text-[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus iure eius eum a. Harum perspiciatis tenetur quos nihil asperiores!
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center w-[40vw] p-8 gap-4 m-4 md:max-w-[1000px] md:mt-8 rounded-lg shadow-[5px_5px_20px_0px_var(--box-shadow)] transition duration-300 ease-in-out hover:bg-[#9bfec5]"> 
          <h3 className="text-dark-blue text-[1rem] font-semibold md:text-[2rem]">
            João Correia
          </h3>
          <img src={Homem} alt="Estrelas" className="md:max-w-[90px]" />
          <p className="text-[0.8rem] text-black leading-4 md:text-[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus iure eius eum a. Harum perspiciatis tenetur quos nihil asperiores!
          </p>
        </div>
      </div>

      <a
        href="#"
        className="text-blue text-[0.75rem] font-medium md:text-[1rem] rounded-lg border border-blue p-4 hover:bg-[#9bfec5] hover:text-white transition duration-300 ease-in-out"
      >
        Ver Mais Reviews
      </a>
    </section>
  );
}
