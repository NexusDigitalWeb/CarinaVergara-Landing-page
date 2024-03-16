import React from "react";
import { ServicesTypes } from "../../types/interfaces";
import Services from "../../json/services.json";
import MoreInfoButton from "../buttons/MoreInfoButton";

const CardServices = (): React.ReactElement => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {Services.services.map((item: ServicesTypes, index: number) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center mt-10 w-[300px] h-[300px] max-w-[500px] max-h-[500px] bg-back-gradient rounded-[8px]"
        >
          <div className="bg-gradient flex flex-col justify-center items-center w-full h-full rounded-[8px] relative right-2 bottom-2">
            <div className="flex flex-col items-center">
              <div className="bg-white w-[100px] h-[100px] rounded-full p-2 shadow mb-3">
                <img src={item.image} alt={item.title} />
              </div>
            </div>

            <div className="flex flex-col items-center gap-[20px]">
              <h2 className="text-[20px] tracking-[3px] underline underline-offset-4 text-white font-medium text-center">
                {item.title}
              </h2>
              <p className="text-[15px] font-light">{item.description}</p>
              <MoreInfoButton title={item.title} modal={item.modal}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardServices;
