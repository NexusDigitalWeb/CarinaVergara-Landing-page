import React from 'react'
import { CardQuestion } from '../../types/interfaces'
import Flecha from '../../../public/Flecha.svg'

const CardQuestions: React.FC<CardQuestion> = ({ pregunta, respuesta }) => {
    return (
        <div >
            <details>
                <summary
                    className='list-none flex items-center justify-between gap-1 
                    bg-[#F4F4F4] min-w-[270px] h-[70px] p-2 text-[15px] text shadow font-bold  '>
                    {pregunta}
                    <img src={Flecha} alt="" />
                </summary>
                <p
                    className='bg-[#03A7AD] rounded-bl-2xl rounded-br-2xl 
                    border-b-2 text-center text-[14px] text-white p-2 '>
                    {respuesta}
                </p>
            </details>
        </div>
    )
}

export default CardQuestions