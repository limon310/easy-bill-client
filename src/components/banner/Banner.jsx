
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";

const Banner = () => {

  return (
    <Swiper
      modules={[ Pagination]}
      // modules={[Autoplay, Pagination]}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
      loop={true}
      className="w-full mx-auto my-10"
    >
      <SwiperSlide><Content1 /></SwiperSlide>
      <SwiperSlide><Content2 /></SwiperSlide>
      <SwiperSlide><Content3 /></SwiperSlide>
    </Swiper>
  );
};

export default Banner;

