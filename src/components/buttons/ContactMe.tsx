import React from 'react'
import { ContacMeInterface } from '../../types/interfaces'

const ContactMe: React.FC<ContacMeInterface> = ({ text, classname }) => {
    return (
        <button className={`min-w-[200px] h-[45px] bg-light-blue font-[500] ${classname}`}>
            <a target='_blank' href="https://wa.link/xtdibs">{text}</a>
        </button>
    )
}

export default ContactMe