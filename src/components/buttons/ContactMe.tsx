import React from 'react'
import { ContacMeInterface } from '../../types/interfaces'

const ContactMe: React.FC<ContacMeInterface> = ({ text, link, classname }) => {
    return (
        <button className={`min-w-[200px] h-[45px] bg-light-blue font-[500] ${classname}`}>
            <a href={link}>{text}</a>
        </button>
    )
}

export default ContactMe