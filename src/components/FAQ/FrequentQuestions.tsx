import React from "react";
import questions from "../../json/questions.json";
import { Questions } from "../../types/interfaces";
import CardQuestions from "./CardQuestions";
import ContactMe from "../buttons/ContactMe";
import TitlesH2 from "../tags/TitlesH2";

const FrequentQuestions = (): React.ReactElement => {
  return (
    <div className="mb-20 flex flex-col gap-8 lg:gap-24">
      <TitlesH2 text="Preguntas Frecuentes" classname="text-wrap w-[200px]"/>
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-center gap-10 p-4">
        {questions.preguntasFrecuentes.map((item: Questions, index: number) => (
          <div key={index} className="lg:w-1/3">
            <CardQuestions
              pregunta={item.pregunta}
              respuesta={item.respuesta}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <ContactMe text="Contactame!" link="sdfsfsf" />
      </div>
    </div>
  );
};

export default FrequentQuestions;
