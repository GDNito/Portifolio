import React from "react";
import Contact from "./contact";
import test from "../assets/test.jfif";

const Textabout = () => {
  return (
    <>
      <img
        src={test}
        alt=""
        className="border-2 border-sec min-h-56 min-w-56 max-w-60 sm:h-64  sm:w-64 xl:min-h-80 xl:min-w-80 rounded-full "
      />
      <Contact />
      <div>
        <h1 className="text-white text-3xl text-center py-2 underline">
          Matheus Forster Antunes
        </h1>
        <h2 className="text-white text-[7vw] md:text-[2vw] text-center py-2 md:py-0">
          Dev Front-End
        </h2>
        <p className="text-white text-[3.5vw] sm:text-[3vw] md:text-[1.8vw] lg:text-[1.5vw] xl:text-[1.2vw] tracking-tight sm:tracking-normal md:tracking-tighter text-justify underline decoration-sec decoration-0">
          Estudante de Ciência da Computação no FMU, estou imerso no universo do
          desenvolvimento web. Minhas habilidades incluem HTML, CSS, Javascript,
          PHP, SQL e Git. Possuo certificado de proficiência em inglês pela
          Cambridge. Em busca de oportunidades de estágio como Desenvolvedor,
          ofereço proatividade, comprometimento e paixão por desafios
          tecnológicos. Estou pronto para contribuir em projetos inovadores.
          Vamos conectar e explorar possíveis colaborações!
        </p>
      </div>
    </>
  );
};

export default Textabout;
