import React from 'react'
import { CardQuestion } from '../../types/interfaces'
import Flecha from '../../../public/Flecha.svg'

const CardQuestions: React.FC<CardQuestion>  = ({ pregunta, respuesta }) => {
    return (
        <details>
            <summary
                className='list-none flex items-center justify-between gap-1 
                    bg-[#F4F4F4] lg:bg-transparent min-w-[270px] h-[70px] lg:h-[100px] p-2 text-[15px] md:text-[16px] lg:text-[20px] text-[#220953] shadow font-bold lg:font-normal  '>
                {pregunta}
                <img src={Flecha} alt="" />
            </summary>
            <p
                className='bg-[#03A7AD] rounded-bl-2xl rounded-br-2xl 
                    border-b-2 text-center text-[14px] md:text-[15px] lg:text-[16px] text-white p-2 '>
                {respuesta}
            </p>
        </details>

    )
}

export default CardQuestions