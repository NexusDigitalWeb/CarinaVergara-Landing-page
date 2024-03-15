import React from 'react'
import LogoCarina from '../../../public/LogoCarina.svg'
import FooterImage from '../../../public/FooterImage.svg'
import menu from '../../json/menu.json'
import { MenuItenrface } from '../../types/interfaces'
import { Link, NavLink } from 'react-router-dom'
import WsspIcon from '../../../public/whatsappicon.svg'
import FacebookIcon from '../../../public/facebookicon.svg'
import InstagramIcon from '../../../public/SocialInstagram.svg'
import CopyrighIcon from '../../../public/CopyrighIcon.svg'

const Footer = (): React.ReactElement => {
  return (
    <footer className='flex flex-col items-center justify-center bg-water-green text-white relative top-[100px] p-2 w-full -z-10'>
      <div className='flex flex-col items-center'>
        <img src={LogoCarina} width="150" height="200" className='z-10' alt="" />
        <img width="450" height="450" className='absolute top-[150px] max-w-[320px] z-0' src={FooterImage} alt="" />
      </div>
      <div className='flex flex-col gap-2 z-10 mb-5 min-w-[150px]'>
        {
          menu.menu.map((item: MenuItenrface, index: number) => (
            <div key={index} className='border-b text-center p-5'>
              <NavLink to={item.to}>{item.text}</NavLink>
            </div>
          ))
        }
      </div>
      <div className='flex flex-col gap-5'>
        <div className='flex items-center justify-center z-10 gap-2'>
          <Link to="" target='_blank'><img src={InstagramIcon} alt="instagram-logo"/></Link>
          <Link to="" target='_blank'><img src={FacebookIcon} alt="facebook-logo"/></Link>
          <Link to="" target='_blank'><img src={WsspIcon} alt="whatsapp-logo"/></Link>
        </div>


        <div>
          <p className='flex  text-[10px]'><img className='' src={CopyrighIcon} alt="" />Carina Vergara - Todos los derechos reservados</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer