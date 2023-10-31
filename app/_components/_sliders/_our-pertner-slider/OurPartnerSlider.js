"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const OurPartnerSlider = () => {
  let imageData = [
    "https://tbe.io/_next/static/media/freedomNationLogo.67f06b2c.png",
    "https://tbe.io/_next/static/media/lFi-logo.cc7c8358.png",
    "https://tbe.io/_next/static/media/bidLogo.c18c17a6.png",
    "https://tbe.io/_next/static/media/bidLogo.c18c17a6.png",
    "https://tbe.io/_next/static/media/freedomNationLogo.67f06b2c.png",
    "https://tbe.io/_next/static/media/lFi-logo.cc7c8358.png",
    "https://tbe.io/_next/static/media/bidLogo.c18c17a6.png",
    "https://tbe.io/_next/static/media/bidLogo.c18c17a6.png",
  ];
  return (
    <div>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {imageData.map((item) => (
          <SwiperSlide>
            <div className="w-full p-3 shadow-xl border flex justify-center items-center border-grey rounded-full">
              <div className="border-grey rounded-ful !w-[250px] flex justify-center items-center !h-[250px]">
                <img src={item} className="" alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurPartnerSlider;
