import React from "react";
import questions from "../../json/questions.json";
import { Questions } from "../../types/interfaces";
import CardQuestions from "./CardQuestions";

const FrequentQuestions = (): React.ReactElement => {
  return (
    <div className="mb-20 p-4">
      <h2 className="text-3xl mb-6">Preguntas Frecuentes</h2>
      <div className="flex flex-col gap-6">
        {questions.preguntasFrecuentes.map((item: Questions, index: number) => (
          <CardQuestions
            key={index}
            pregunta={item.pregunta}
            respuesta={item.respuesta}
          />
        ))}
      </div>
    </div>
  );
};

export default FrequentQuestions;
