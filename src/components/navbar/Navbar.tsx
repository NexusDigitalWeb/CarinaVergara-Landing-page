import React, { useState, useEffect } from "react";
import HamburgerButton from "../buttons/HamburgerButton";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";
import SocialMedia from "../home/SocialMedia";

const Navbar = (): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Animacion de scroll para cambiarle la transparencia al navmenu
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {}, [isMenuOpen]);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`w-full h-[80px] md:h-[100px] fixed transition-all duration-500 ${
        isScrolled ? "bg-background-page-color" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-full px-2 bg-transparent md:px-0 lg:px-5">
        <div className=" w-[80px] h-[80px] lg:w-[180px] flex items-center justify-center md:ml-10 lg:ml-0">
          <img src="/LogoCarina.svg" alt="logo" className="md:w-[80px] md:h-[80px]"/>
        </div>
        <HamburgerButton isOpened={isMenuOpen} setState={handleClick} />
        <MenuDesktop />
        <SocialMedia/>
        {/* <p className="hidden lg:flex px-5 text-texts-color">
          +54 9 11 6281-0278
        </p> */}
      </div>

      <MenuMobile stateAction={isMenuOpen} setState={handleClick} />
    </nav>
  );
};

export default Navbar;
