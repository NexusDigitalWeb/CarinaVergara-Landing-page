import React from "react";
import Carrousel from "./Carrousel";
import TitlesH2 from "../tags/TitlesH2";

const ReviewsPage = (): React.ReactElement => {
  return (
    <div className="h-full w-full" id="students">
      <TitlesH2 text="Que dicen mis alumnos" />
      <div data-aos="fade-left" data-aos-duration="800">
        <Carrousel
          isAnImage={false}
          classname="bg-white flex flex-col gap-5 justify-between items-center h-[400px] w-full max-w-[800px] md:h-[500px] md:w-[500px] lg:w-[100%] lg:h-[600px] p-10 rounded-[8px] transition-all ease-in duration-700 "
        />
      </div>
    </div>
  );
};

export default ReviewsPage;
