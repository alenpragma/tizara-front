"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const DiveSlider = () => {
  return (
    <div className="max-w-container mx-auto px-[10px] pb-[80px] ">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center pb-[60px] md:pb-0">
            <div className="w-full md:w-[48%] ">
              <p>
                TBE takes blockchain technology's inherent virtues of security
                and transparency to the next level. Our premium products stand
                as paragons of innovation and quality, encapsulating the
                freshest breakthroughs in the blockchain sphere. Rest easy
                knowing you're equipped with trustworthy and state-of-the-art
                solutions.
              </p>
              <p className="mt-5 font-bold">
                Experience the full scope of blockchain's potential with TBE.
                Achieve your aspirations in the digital frontier—click to
                explore our product range now.
              </p>
            </div>
            <div className="w-full md:w-[48%] flex justify-center items-center">
              <img
                src="https://i.postimg.cc/T1WfHFh5/TIZARA-01.png"
                className="w-[75%] h-auto"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center pb-[60px] md:pb-0">
            <div className="w-full md:w-[48%] ">
              <p>
                TBE takes blockchain technology's inherent virtues of security
                and transparency to the next level. Our premium products stand
                as paragons of innovation and quality, encapsulating the
                freshest breakthroughs in the blockchain sphere. Rest easy
                knowing you're equipped with trustworthy and state-of-the-art
                solutions.
              </p>
              <p className="mt-5 font-bold">
                Experience the full scope of blockchain's potential with TBE.
                Achieve your aspirations in the digital frontier—click to
                explore our product range now.
              </p>
            </div>
            <div className="w-full md:w-[48%] flex justify-center items-center">
              <img
                src="	https://i.postimg.cc/T1WfHFh5/TIZARA-01.png"
                className="w-[75%] h-auto"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center pb-[60px] md:pb-0">
            <div className="w-full md:w-[48%] ">
              <p>
                TBE takes blockchain technology's inherent virtues of security
                and transparency to the next level. Our premium products stand
                as paragons of innovation and quality, encapsulating the
                freshest breakthroughs in the blockchain sphere. Rest easy
                knowing you're equipped with trustworthy and state-of-the-art
                solutions.
              </p>
              <p className="mt-5 font-bold">
                Experience the full scope of blockchain's potential with TBE.
                Achieve your aspirations in the digital frontier—click to
                explore our product range now.
              </p>
            </div>
            <div className="w-full md:w-[48%] flex justify-center items-center">
              <img
                src="	https://i.postimg.cc/T1WfHFh5/TIZARA-01.png"
                className="w-[75%] h-auto"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DiveSlider;
