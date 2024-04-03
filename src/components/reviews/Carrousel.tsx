import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import reviews from "../../json/reviews.json";

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

  return (
    <div className="w-full h-full mt-10 px-4">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
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
          : reviews.totalReviews.map((item: ReviewsTypes, index: number) => (
              <SwiperSlide
                key={index}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className={classname}>
                  <span></span>
                  <p className="z-0 text-[14px] md:text-[18px] lg:text-[21px]">
                    "{item.text.replace(/'/g, '"')}"
                  </p>
                  <p className="z-0 font-semibold md:text-[18px] lg:text-[21px]">
                    {item.student}
                  </p>
                  <LotusFlowerReview
                    classname="opacity-[80%] h-[390px] w-[390px] lg:h-[500px] lg:w-[500px]"
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
