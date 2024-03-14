import React from 'react'
import { ContacMeInterface } from '../../types/interfaces'

const ContactMe: React.FC<ContacMeInterface> = ({ text, link }) => {
    return (
        <button className='min-w-[200px] h-[45px] text-xl bg-light-blue font-[500]'>
            <a href={link}>{text}</a>
        </button>
    )
}

export default ContactMe