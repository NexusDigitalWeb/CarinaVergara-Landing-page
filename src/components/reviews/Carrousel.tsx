import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import LotusFlowerReview from "../../images/LotusFlowerReview";
import { CarrouselTypes, ReviewsTypes } from "../../types/interfaces";

/**
 * Si la propiedad de isAnImage se cumple, el slider cambia rotundamente para solo fotos, sino, se convierte para escribir textos
 * Es 100% personalizable
 * @param {classname?, isAnImage, imgSource?, imgClassname?}
 * @returns Full personalized slider
 */

const Carrousel = ({
  classname,
  isAnImage,
  imgSource,
  imgClassname,
}: CarrouselTypes): React.ReactElement => {
  const [reviews, setReviews] = useState<ReviewsTypes[]>();

  const getReviews = async () => {
    try {
      const response = await fetch("./src/json/reviews.json");
      const data = await response.json();
      setReviews(data.reviews);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getReviews();
  }, [isAnImage]);

  return (
    <div className="w-full h-full mt-10 px-4">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={25}
      >
        {isAnImage
          ? imgSource?.map((item, index: number) => (
              <SwiperSlide
                key={index}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className={classname}>
                  <img src={item} alt={item} className={imgClassname} />
                </div>
              </SwiperSlide>
            ))
          : reviews?.map((item, index: number) => (
              <SwiperSlide
                key={index}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className={classname}>
                  <span></span>
                  <p className="z-0 text-[14px] md:text-[18px] lg:text-[21px]">
                    "{item.text}"
                  </p>
                  <p className="z-0 font-semibold md:text-[18px] lg:text-[21px]">
                    {item.student}
                  </p>
                  <LotusFlowerReview
                    classname="opacity-[80%] lg:h-[500px] lg:w-[500px]"
                    width="390"
                    height="390"
                  />
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default Carrousel;
