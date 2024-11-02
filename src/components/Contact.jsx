import React from "react";
import Facebook from "../assets/images/facebook.png"
import Instagram from "../assets/images/instagram.png"
import Artigos from "../assets/images/artigos.png"

export default function Contact() {
  return (
    <section className="contact w-screen flex flex-col items-center lg:flex-row lg:justify-start lg:gap-8 bg-[#9bfec5]">
      <div className="contact__form w-full lg:w-[40vw] lg:order-2 flex flex-col items-start px-4">
        <div className="contact__form__item flex flex-col items-center p-10 gap-10">
          <h3 className="text-dark-blue text-lg lg:text-2xl">Entre em contato</h3> 
          <input
            type="text"
            placeholder="Seu e-mail"
            className="contact__form__link border-b border-dark-blue bg-transparent w-[80vw] lg:w-[40rem] placeholder-dark-blue placeholder-opacity-70 text-sm lg:text-xl p-4" 
          />
          <button className="contact__form__button bg-dark-blue text-white font-normal text-sm lg:text-xl rounded-md py-2 px-20 lg:px-28">
            Enviar
          </button>
        </div>
      </div>

      <div className="contact__container w-full lg:w-[40vw] lg:order-1 flex flex-col items-center gap-10">
        <div className="contact__content flex flex-col items-center justify-center gap-10">
          <div className="contact__content__item contact__content__item--email text-center border-b-2 border-[var(--box-shadow)] bg-[url('/image/email.svg')] bg-no-repeat bg-left text-lg font-light lg:text-2xl p-8">
            <p className="text-dark-blue text-sm lg:text-lg">email@exemplo.com</p> 
          </div>
          <div className="contact__content__item contact__content__item--phone text-center border-b-2 border-[var(--box-shadow)] bg-[url('/image/cel.png')] bg-no-repeat bg-left text-lg font-light lg:text-2xl p-8">
            <p className="text-dark-blue text-sm lg:text-lg">+55 85 9999-9999</p> 
          </div>
          <div className="contact__content__item contact__content__item--location text-center border-b-2 border-[var(--box-shadow)] bg-[url('/image/location.svg')] bg-no-repeat bg-left text-lg font-light lg:text-2xl p-8">
            <p className="text-dark-blue text-sm lg:text-lg">Rua Exemplo, 123</p> 
          </div>
        </div>

        <div className="contact__content__list flex justify-center gap-12 my-12">
          <img src={Facebook} alt="Facebook" className="w-6 lg:w-8" />
          <img src={Instagram} alt="Instagram" className="w-6 lg:w-8" />
          <img src={Artigos} alt="Artigos" className="w-6 lg:w-8" />
        </div>
      </div>
    </section>
  );
}
