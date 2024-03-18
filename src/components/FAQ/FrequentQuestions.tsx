import React from "react";
import questions from "../../json/questions.json";
import { Questions } from "../../types/interfaces";
import CardQuestions from "./CardQuestions";
import ContactMe from "../buttons/ContactMe";

const FrequentQuestions = (): React.ReactElement => {
  return (
    <div className="mb-20 p-4 flex flex-col gap-8 lg:gap-24">
      <h2 className="text-3xl lg:text-[55px] mb-6">Preguntas Frecuentes</h2>
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-center gap-10 ">
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
