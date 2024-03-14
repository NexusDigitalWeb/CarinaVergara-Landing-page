import React, { useState } from 'react'
import HamburgerButton from '../buttons/HamburgerButton'
import MenuMobile from './MenuMobile';
import MenuDesktop from './MenuDesktop';

const Navbar = (): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className='w-full h-[80px] fixed'>
      <div className='flex items-center justify-between px-2 bg-transparent lg:justify-between lg:px-5'>
        <img src="/LogoCarina.svg" alt="logo" className='w-[100px] h-[100px] md:w-[150px] md:h-[150px] relative' />
        <HamburgerButton isOpened={isMenuOpen} setState={handleClick} />
        <MenuDesktop/>
        <p className='hidden lg:flex px-5 text-texts-color'>+54 9 11 6281-0278</p>
      </div>

      <MenuMobile stateAction={isMenuOpen} setState={handleClick}/>
      
    </nav>
  )
}

export default Navbar