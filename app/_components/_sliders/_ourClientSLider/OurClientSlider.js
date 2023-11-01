"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
const OurClientSlider = () => {
  let clientData = [
    {
      img: "https://tbe.io/_next/static/media/Seven.3c837fda.png",
      name: "Joedoe",
      title: "Freelance Writer",
      text: "It's a useful platform, but the interface can be confusing at times. The benefits outweigh the negatives.",
    },
    {
      img: "https://tbe.io/_next/static/media/Seven.3c837fda.png",
      name: "Joedoe",
      title: "Freelance Writer",
      text: "It's a useful platform, but the interface can be confusing at times. The benefits outweigh the negatives.",
    },
    {
      img: "https://tbe.io/_next/static/media/Seven.3c837fda.png",
      name: "Joedoe",
      title: "Freelance Writer",
      text: "It's a useful platform, but the interface can be confusing at times. The benefits outweigh the negatives.",
    },
    {
      img: "https://tbe.io/_next/static/media/Seven.3c837fda.png",
      name: "Joedoe",
      title: "Freelance Writer",
      text: "It's a useful platform, but the interface can be confusing at times. The benefits outweigh the negatives.",
    },
    {
      img: "https://tbe.io/_next/static/media/Seven.3c837fda.png",
      name: "Joedoe",
      title: "Freelance Writer",
      text: "It's a useful platform, but the interface can be confusing at times. The benefits outweigh the negatives.",
    },
    {
      img: "https://tbe.io/_next/static/media/Seven.3c837fda.png",
      name: "Joedoe",
      title: "Freelance Writer",
      text: "It's a useful platform, but the interface can be confusing at times. The benefits outweigh the negatives.",
    },
    {
      img: "https://tbe.io/_next/static/media/Seven.3c837fda.png",
      name: "Joedoe",
      title: "Freelance Writer",
      text: "It's a useful platform, but the interface can be confusing at times. The benefits outweigh the negatives.",
    },
    {
      img: "https://tbe.io/_next/static/media/Seven.3c837fda.png",
      name: "Joedoe",
      title: "Freelance Writer",
      text: "It's a useful platform, but the interface can be confusing at times. The benefits outweigh the negatives.",
    },
  ];
  return (
    <>
      <div className="max-w-container px-[10px] mx-auto ">
        <h2 className="text-[25px] md:text-[35px] text-center font-bold gradiant-text">
          What our clients say
        </h2>
        <div className=" flex justify-center">
          <p className="text-grey text-center mt-5 w-[70%]">
            What our clients say matters to us, and we invite you to explore
            their testimonials to understand why TBE is the preferred choice for
            blockchain solutions.
          </p>
        </div>
        {/* slider start */}
        <div className="mt-[50px] mb-[100px]">
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
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {clientData.map((item) => (
              <SwiperSlide>
                <div className="w-full p-4 relative   flex justify-center items-center  rounded-xl">
                    <div className="!bg-black">
                  <div
                    style={{
                      background: "linear-gradient(0deg,#2e6c46 0,#0d0d0d 75%)",
                    }}
                    className="w-full  p-5 rounded-lg  duration-500 hover:translate-y-[-20px]"
                  >
                    <div className="flex items-center justify-between gap-x-2">
                      <div className="flex gap-x-2 items-center">
                        <img
                          src={item.img}
                          className="w-[50px] rounded-lg h-auto"
                          alt=""
                        />
                        <div className="">
                          <p className="font-bold text-[18px]">{item.name}</p>
                          <small className="text-grey">{item.title}</small>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <img
                          src="https://tbe.io/_next/static/media/doubleQuoteGreen.280e063e.png "
                          className="w-[60px] h-auto"
                          alt=""
                        />
                      </div>
                      
                    </div>
                    <p className="mt-5">
                        {item.text}
                    </p>
                  </div>
                        
                    </div>
                  <img src="https://tbe.io/_next/static/media/blurReviewImage.e738c786.png" className="w-full rounded-lg absolute bottom-0 left-0"  alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OurClientSlider;
