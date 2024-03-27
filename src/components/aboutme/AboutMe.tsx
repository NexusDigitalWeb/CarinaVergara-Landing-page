import React from "react";
import ContactMe from "../buttons/ContactMe";
import CarinaImg from "/CarinaVergara.png";
import TitlesH2 from "../tags/TitlesH2";

const AboutMe = (): React.ReactElement => {
  return (
    <div
      className="h-full w-full flex flex-col gap-10 mb-10"
      id="aboutMe"
      data-aos="fade-left"
      data-aos-duration="800"
    >
      <TitlesH2 text="Acerca de mí" />
      <div className="flex h-full justify-center px-4 md:px-20 ">
        <div
          className="bg-gradient rounded-xl min-w-[270px] max-w-[1030px] h-full shadow-xl 
      flex flex-col items-center justify-center lg:flex-row gap-8 lg:px-10"
        >
          <div>
            <img
              className="mt-10 md:my-10 bg-black rounded-xl md:w-[300] md:h-[320px] lg:h-[500px] min-w-[260px] h-[293px]"
              src={CarinaImg}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center lg:h-[500px] lg:justify-start lg:gap-10  lg:w-[435px]">
            <h3 className="text-2xl font-[500 lg:text-4xl lg:mt-5">Coach Deportiva</h3>
            <p className="p-6 md:px-20 lg:px-0 lg:text-xl">
              Soy Profesora Nacional de Educación Física con un Máster en
              fisiología Deportiva, Entrenadora Nacional y Coach. En mis 25 años
              de experiencia, he logrado cada meta que me he propuesto en mi
              carrera deportiva, así como con mis alumnos. Me enfoco en la
              constancia, disciplina y enfoque, complementando mis prácticas con
              meditación, yoga y desarrollo mental y emocional para entrenar la
              mente a través del cuerpo.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <ContactMe text="Contactame!" link="sdfsfsf" />
      </div>
    </div>
  );
};

export default AboutMe;
