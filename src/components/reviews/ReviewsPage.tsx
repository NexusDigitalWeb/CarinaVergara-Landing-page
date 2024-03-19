import React from "react";
import Carrousel from "./Carrousel";

const ReviewsPage = (): React.ReactElement => {
  return (
    <div className="h-full w-full" id="students">
      <h2
        className="text-[32px] lg:text-[55px] text-texts-color mx-4 md:mx-10"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        Que dicen mis alumnos
      </h2>
      <div data-aos="fade-left" data-aos-duration="800">
        <Carrousel
          isAnImage={false}
          classname="bg-white flex flex-col gap-5 justify-between items-center h-full w-full max-w-[800px] md:h-[500px] md:w-[500px] lg:w-[100%] lg:h-[600px] p-10 rounded-[8px] transition-all ease-in duration-700 "
        />
      </div>
    </div>
  );
};

export default ReviewsPage;
