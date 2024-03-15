import React from 'react';
import LogoCarina from '/LogoCarina.svg';
import FooterImage from '/FooterImage.svg';
import menu from '../../json/menu.json';
import { MenuItenrface } from '../../types/interfaces';
import WsspIcon from '/whatsappicon.svg';
import FacebookIcon from '/facebookicon.svg';
import InstagramIcon from '/SocialInstagram.svg';
import CopyrighIcon from '/CopyrighIcon.svg';

const Footer = (): React.ReactElement => {
  return (
    <footer className='relative top-[100px] md:top-0 bg-water-green text-white p-2 w-full -z-10'>
      <div className='flex flex-col items-center justify-center'>
        <div className='z-10 flex flex-col items-center'>
          <img src={LogoCarina} width='150' height='200' alt='' />
        </div>
        <div className='absolute bottom-2 w-full h-[450px] max-w-[450px] z-[1]'>
          <img className='w-full h-full ' src={FooterImage} alt='' />
        </div>
      </div>
      <div className='z-10 flex flex-col gap-2 mb-5 min-w-[150px] justify-center items-center'>
        {menu.menu.map((item: MenuItenrface, index: number) => (
          <div key={index} className='border-b text-center p-5 w-[200px] z-[1]'>
            <a href={item.to}>{item.text}</a>
          </div>
        ))}
      </div>
      <div className='z-10 flex flex-col gap-5'>
        <div className='flex items-center justify-center gap-2 z-[1]'>
          <a href='' target='_blank'>
            <img src={InstagramIcon} alt='instagram-logo' />
          </a>
          <a href='' target='_blank'>
            <img src={FacebookIcon} alt='facebook-logo' />
          </a>
          <a href='' target='_blank'>
            <img src={WsspIcon} alt='whatsapp-logo' />
          </a>
        </div>
        <div>
          <p className='flex justify-center text-[10px]'>
            <img src={CopyrighIcon} alt='' />
            Carina Vergara - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
