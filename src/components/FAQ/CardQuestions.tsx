import React from 'react'
import { CardQuestion } from '../../types/interfaces'
import Flecha from '../../../public/Flecha.svg'

const CardQuestions: React.FC<CardQuestion> = ({ pregunta, respuesta }) => {
    return (
        <div >
            <details>
                <summary className='list-none flex items-center justify-between gap-1 bg-[#F4F4F4] w-[270px] h-[60px] text-[15px] border-2  '>
                    {pregunta}
                    <img src={Flecha} alt="" />
                </summary>
                <p className='bg-[#03A7AD] rounded-bl-lg rounded-br-lg border-b-2 text-center text-[15px] '>{respuesta}</p>
            </details>
        </div>
    )
}

export default CardQuestions