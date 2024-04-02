import React from "react";

const TitlesH2 = ({ text, classname }: { text: string, classname?: string }): React.ReactElement => {
  return (
    <h2
      className={`text-[32px] lg:text-[55px] text-texts-color mx-4 md:mx-10 ${classname ? classname : ''}`}
      data-aos="fade-right"
      data-aos-duration="800"
    >
      {text}
    </h2>
  );
};

export default TitlesH2;
