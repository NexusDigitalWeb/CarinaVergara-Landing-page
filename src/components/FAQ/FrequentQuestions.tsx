import React from 'react';
import questions from '../../json/questions.json';
import { Questions } from '../../types/interfaces';
import CardQuestions from './CardQuestions';

const FrequentQuestions = (): React.ReactElement => {
  return (
    <div className='px-4 mb-20 w-full'>
      <h2 className='text-3xl mb-6'>Preguntas Frecuentes</h2>
      <div className='flex flex-col gap-6'>
        {questions.preguntasFrecuentes.map((item: Questions, index: number) => (
          <CardQuestions key={index} pregunta={item.pregunta} respuesta={item.respuesta} />
        ))}
      </div>
    </div>
  );
};

export default FrequentQuestions;
