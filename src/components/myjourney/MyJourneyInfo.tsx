import React from "react";
import { JourneyTypes } from "../../types/interfaces";

const MyJourneyInfo = ({
  image,
  text,
  index,
}: JourneyTypes): React.ReactElement => {
  const isEvenIndex = index % 2 === 0;

  return (
    <div className="lg:mb-44">
      <div
        className={`flex flex-col-reverse ${
          isEvenIndex ? "md:flex-row-reverse" : "md:flex-row"
        } items-center`}
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <p className="p-5 md:p-8 md:w-[80%] lg:text-[21px]">{text}</p>
        <img
          src={image}
          alt={image}
          className="w-full h-[350px] md:h-[500px] p-5 md:p-8"
        />
      </div>
    </div>
  );
};

export default MyJourneyInfo;
