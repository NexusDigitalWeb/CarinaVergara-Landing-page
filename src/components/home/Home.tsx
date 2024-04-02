import React from "react";
import Titles from "./Titles";
import ContactMe from "../buttons/ContactMe";

const Home = (): React.ReactElement => {
  return (
    <div className="w-screen mt-20 lg:h-dvh  lg:mt-5 lg:flex justify-center items-center -z-10">
      <div className="flex flex-col w-full justify-center items-center lg:flex-row lg:justify-between lg:w-[90%] lg:gap-20">
        <div
          className="flex flex-col items-center w-[90%] lg:w-[50%] gap-5"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="flex flex-col items-center">
            <h1 className="carina-gradient-color text-[38px] font-medium md:text-[50px] xl:text-[80px] text-nowrap">
              Carina Vergara
            </h1>
            <p className="text-smooth-pink md:text-[23px] md:leading-5 lg:text-[35px] lg:leading-6">
              coach deportiva
            </p>
          </div>
          <div
            className="hidden lg:flex lg:flex-col text-texts-color text-[17px] p-10 w-[80%]"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <p>
              25 años de experiencia en la Educación Física y el Fitness, unidos
              a través del Coaching Deportivo para trabajar en tu mente y
              emociones para cambiar tus acciones:
            </p>
            <p>
              "Entreno la mente 🧩 a través del cuerpo con clases, programas y
              talleres 🧠.
            </p>
            <p>
              Te ayudo a generar consciencia de tus hábitos, 💪🏼empoderar tus
              metas y transformar tus creencias limitantes"🧘‍♀️
            </p>
          </div>
          <div className="hidden mt-10 lg:flex">
            <ContactMe
              text="Contáctame"
              classname="lg:w-[300px] lg:h-[60px] lg:text-[18px]"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center relative">
          {/* Mobile */}
          <img
            src="HomeImage.svg"
            alt="home-image"
            className="flex md:hidden"
          />
          {/* Desktop */}
          <img
            src="HomeImage.svg"
            alt=""
            className="hidden md:flex md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]"
          />
          <Titles />
          <div className="text-texts-color text-[16px] p-3 w-[90%] flex flex-col lg:hidden">
            <p>
              25 años de experiencia en la Educación Física y el Fitness, unidos
              a través del Coaching Deportivo para trabajar en tu mente y
              emociones para cambiar tus acciones:
            </p>
            <p>
              "Entreno la mente 🧩 a través del cuerpo con clases, programas y
              talleres 🧠."
            </p>
          </div>
          <div className="mt-10 lg:hidden">
            <ContactMe text="Contáctame" /> {/*Agregar link de wpp  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
