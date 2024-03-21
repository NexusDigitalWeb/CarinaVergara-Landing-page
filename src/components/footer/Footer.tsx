import React from "react";
import { useState, useEffect } from "react";
import LogoCarina from "/LogoCarinaFooter.svg";
import menu from "../../json/menu.json";
import { MenuItenrface } from "../../types/interfaces";
import WsspIcon from "/whatsappicon.svg";
import FacebookIcon from "/facebookicon.svg";
import InstagramIcon from "/SocialInstagram.svg";
import CopyrighIcon from "/CopyrighIcon.svg";

const Footer = (): React.ReactElement => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const screenSize = () => {
      setModal(window.innerWidth >= 1024);
    };

    screenSize();

    //Detecto cambios
    window.addEventListener("resize", screenSize);

    //Limpio el evento
    return () => {
      window.removeEventListener("resize", screenSize);
    };
  }, []);

  return (
    <footer className="relative  gap-2 bg-water-green text-white p-2 lg:px-16 lg:py-5 w-full -z-10 flex flex-col lg:justify-between">
      <div className="mt-10">
        <div className="flex flex-col items-center justify-center lg:items-end">
          <div className="lg:flex absolute bottom-3 lg:bottom-4 w-[350px] h-[550px] lg:w-full lg:-right-[100px] max-w-[800px] z-[1]">
            <img
              className="w-full h-full lg:h-[550px]"
              src={LogoCarina}
              alt="logo-carina"
            />
          </div>
        </div>
        <div className="z-10 flex flex-col gap-2 mb-5 min-w-[150px] justify-center items-center lg:items-start lg:gap-20 lg:justify-start lg:h-full">
          {modal && (
            <>
              <div className="flex flex-col gap-2 w-[400px] pl-8">
                <p className="text-2xl">Carina Vergara</p>
                <p className=" font-extralight">coach deportiva</p>
              </div>
              <div className="flex flex-col gap-2 w-[400px] pl-8">
                <p className="text-2xl">Contacto</p>
                <a
                  href="mailto:vergaracarina78@gmail.com"
                  className=" text-[18px] font-extralight"
                >
                  vergaracarina78@gmail.com
                </a>
                <a
                  href="tel:+541162810278"
                  className="text-[18px] font-extralight"
                >
                  +54 11 6281-0278
                </a>
              </div>
            </>
          )}
          <div className="flex flex-col lg:flex-row">
            {menu.menu.map((item: MenuItenrface, index: number) => (
              <div
                key={index}
                className="border-b text-center p-5 w-[200px] z-[1] lg:w-[105px] lg:h-[40px] lg:flex lg:items-center lg:justify-center lg:border-b-0 lg:border-r lg:text-sm"
              >
                <a href={item.to}>{item.text}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:border-t lg:px-8 lg:pt-5">
        <div className="flex items-center justify-center gap-2 z-[1]">
          <a href="" target="_blank">
            <img src={InstagramIcon} alt="instagram-logo" />
          </a>
          <a href="" target="_blank">
            <img src={FacebookIcon} alt="facebook-logo" />
          </a>
          <a href="" target="_blank">
            <img src={WsspIcon} alt="whatsapp-logo" />
          </a>
        </div>
        <div>
          <p className="flex justify-center text-[10px]">
            <img src={CopyrighIcon} alt="" />
            Carina Vergara - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
