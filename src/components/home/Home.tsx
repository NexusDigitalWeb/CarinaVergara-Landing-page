import React from "react";
import Titles from "./Titles";
import ContactMe from "../buttons/ContactMe";

const Home = (): React.ReactElement => {
  return (
    <div className="w-screen  relative top-[100px]  -z-10 lg:flex justify-center items-center">
      <div className="flex flex-col w-full justify-center items-center lg:flex-row lg:justify-between lg:w-[90%] lg:gap-20">
        <div
          className="flex flex-col items-center w-[90%] lg:w-[50%] gap-5"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="flex flex-col items-center">
            <h1 className="carina-gradient-color text-[38px] font-medium md:text-[50px] xl:text-[70px]">
              Carina Vergara
            </h1>
            <p className="text-smooth-pink md:text-[23px] md:leading-5 lg:text-[35px] lg:leading-6 mb-10">
              coach deportiva
            </p>
          </div>
          <div
            className="hidden lg:flex lg:flex-col text-texts-color text-[16px] p-3 w-[90%]"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <p>
              25 años de experiencia en la Educación Física sica y el Fitness,
              unidos a través del Coaching Deportivo para trabajar en tu mente y
              emociones para cambiar tus acciones:
            </p>
            <p>
              "Entreno la mente 🧩 a través del cuerpo con clases, programas y
              talleres 🧠."
            </p>
          </div>
          <div className="hidden mt-10 lg:flex">
            <ContactMe text="Contáctame" link="" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center relative">
          {" "}
          {/* Añade "relative" aquí */}
          <img
            src="/Yogasvgmobile.svg"
            alt="inicio-imagen-prueba"
            className="flex md:hidden md:w-[300px] md:h-[300px] lg:hidden lg:w-[400px] lg:h-[400px]"
            data-aos="fade-right"
            data-aos-duration="2000"
          />
          <img
            src="/Yogasvgdesktop.svg"
            alt="inicio-imagen-prueba"
            className="hidden md:flex md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]"
            data-aos="fade-right"
            data-aos-duration="2000"
          />
          <Titles />
          <div
            className="text-texts-color text-[16px] p-3 w-[90%] flex flex-col lg:hidden"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <p>
              25 años de experiencia en la Educación Física sica y el Fitness,
              unidos a través del Coaching Deportivo para trabajar en tu mente y
              emociones para cambiar tus acciones:
            </p>
            <p>
              "Entreno la mente 🧩 a través del cuerpo con clases, programas y
              talleres 🧠."
            </p>
          </div>
          <div className="mt-10 lg:hidden">
            <ContactMe text="Contáctame" link="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
