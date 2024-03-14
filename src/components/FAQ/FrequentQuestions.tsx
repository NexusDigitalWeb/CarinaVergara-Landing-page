import React from 'react'
import questions from '../../json/questions.json'
import { Questions } from '../../types/interfaces'
import CardQuestions from './CardQuestions'

const FrequentQuestions = (): React.ReactElement => {

 
  return (
    <div className=' px-4'>
      <h2 className='w-[233px] h-[96px] text-3xl'>Preguntas Frecuentes</h2>
      <div className='flex flex-col gap-4'>
        {
          questions.preguntasFrecuentes.map((item: Questions, index: number) => (
            <div key={index} >
              <CardQuestions pregunta={item.pregunta} respuesta={item.respuesta} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default FrequentQuestions