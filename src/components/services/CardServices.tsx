import React, { useEffect, useState } from "react";
import { ServicesTypes } from "../../types/interfaces";
import MoreInfoButton from "../buttons/MoreInfoButton";

const CardServices = (): React.ReactElement => {
  const [services, setServices] = useState<ServicesTypes[]>([]);

  const getServices = async () => {
    try {
      const response = await fetch("./src/json/services.json");
      const data = await response.json();
      setServices(data.services);
    } catch (error) {
      console.error("Something went wrong with the fetch request: ", error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  console.log(services);
  return (
    <div className="w-full flex flex-col md:flex-row md:flex-wrap md:gap-10 justify-center items-center max-w-[1300px]">
      {services.map((item, index: number) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center mt-10 w-[90%] h-full md:w-[450px] md:h-[450px] lg:w-full lg:h-full max-w-[600px] max-h-[500px] bg-back-gradient rounded-[8px]"
          data-aos="fade-left"
          data-aos-duration="500"
        >
          <div className="bg-gradient flex flex-col lg:gap-5 py-5 justify-center items-center w-full h-full rounded-[8px] relative right-2 bottom-2">
            <div className="flex flex-col items-center">
              <div className="flex justify-center bg-white w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full p-2 shadow mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="lg:w-[150px]"
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-[20px] lg:gap-[22px]">
              <h2 className="text-[20px] underline underline-offset-4 text-white font-medium text-center lg:text-[22px]">
                {item.title}
              </h2>
              <p className={`text-[14px] md:text-[16px] px-10 lg:text-[18px] ${item.description.length <= 140 && "text-center"}`}>
                {item.description}
              </p>
              <p className="text-[14px] md:text-[16px] text-center font-semibold">
                {item.important}
              </p>
              <MoreInfoButton title={item.title} services={item.modal} isAUniqueService={item.is_a_unique_service}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardServices;
