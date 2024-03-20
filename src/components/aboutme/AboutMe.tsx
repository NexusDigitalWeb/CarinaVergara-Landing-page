import React from "react";
import ContactMe from "../buttons/ContactMe"
import CarinaImg from "../../../public/CarinaVergara.png"
import TitlesH2 from "../tags/TitlesH2";

const AboutMe = (): React.ReactElement => {
  return (
    <div className="h-full w-full flex flex-col gap-10 mb-10" id="aboutMe" data-aos='fade-left' data-aos-duration='800'>
      <TitlesH2 text="Acerca de mí"/>
      <div className="flex justify-center px-4 md:px-20 ">
        <div className="bg-gradient rounded-xl min-w-[270px] max-w-[1030px] h-[654px] shadow-xl 
      flex flex-col items-center justify-center lg:flex-row gap-8 lg:px-10"
        >
          <div>
            <img
              className=" bg-black rounded-xl md:w-[300] md:h-[320px] lg:h-[500px] min-w-[260px] h-[293px]"
              src={CarinaImg}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-5 lg:h-[500px] lg:justify-start lg:gap-28  lg:w-[435px]">
            <h3 className="text-2xl font-[500 lg:text-4xl">Coach Deportiva</h3>
            <p className="text-center px-4 md:px-20 lg:px-0 lg:text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. fdsf
              sdfsdfe sfegwqwegwg Culpa sed eligendi officia! Velit facilis
              corporis accusamus Lorem, ipsum dolor sit amet consectetur adipisicing elit. fdsf,
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <ContactMe text="Contactame!" link="sdfsfsf" />
      </div>
    </div>
  );
};

export default AboutMe;
