import React from "react";

export default function Services() {
  return (
    <section className="services flex flex-col items-center w-screen p-14 gap-10 box-border lg:bg-[url('/image/tooth.png')] lg:bg-no-repeat lg:bg-[length:800px] lg:bg-right">
      <h2 className="text-dark-blue text-2xl font-semibold mb-8 lg:text-4xl shadow-[5px_5px_0px_var(--box-shadow)]">
        Nossos Serviços
      </h2>
      <div className="services__content flex flex-wrap justify-center w-screen gap-12">
        <div className="services__content__service flex flex-col justify-center items-center max-w-[50vw] m-0 mb-4 p-8 gap-4 rounded-lg shadow-[5px_5px_20px_var(--box-shadow)] bg-white hover:bg-[#9bfec5] transition duration-300 ease-in-out"> 
          <h3 className="text-dark-blue text-lg font-semibold lg:text-xl">
            Serviço 1
          </h3>
          <p className="text-justify text-xs font-normal leading-4 lg:text-base text-dark-blue">
            Descrição do serviço oferecido. Explicações e detalhes adicionais para que o cliente entenda o que é oferecido.
          </p>
          <a
            href="#"
            className="text-light-blue text-xs font-light bg-right bg-no-repeat pr-5 lg:text-base lg:font-medium"
            style={{ backgroundImage: `url('/image/arrow.png')` }}
          >
            Saiba mais
          </a>
        </div>

        {/* Adicionar mais serviços */}
        
      </div>
    </section>
  );
}
