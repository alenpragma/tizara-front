"use client";
import OurClientSlider from "@/app/_components/_sliders/_ourClientSLider/OurClientSlider";
import Link from "next/link";
import React, { useEffect } from "react";

const Setvice = () => {
  let keyFeatureData = [
    {
      icon: "	https://tbe.io/_next/static/media/portfolioIconOne.12feb3e1.svg",
      title: "Marketing Tools",
      text: "Level up your marketing strategies with TBE's advanced marketing tools designed for optimum reach and engagement.",
    },
    {
      icon: "https://tbe.io/_next/static/media/portfolioIconTwo.1f092338.svg",
      title: "Rewards System",
      text: "Earn as you learn, with our unique rewards system that incentivizes your contributions and activity within the community.",
    },
    {
      icon: "	https://tbe.io/_next/static/media/ecosystem-product-feature.a1edea07.svg",
      title: "Exclusive User Interface",
      text: "Navigate through our exclusive, user-friendly interface designed to make your experience smooth and efficient.",
    },
    {
      icon: "https://tbe.io/_next/static/media/portfolioIconThree.62e19c3e.svg",
      title: "Performance Monitor",
      text: "Get real-time insights into your operations with our performance monitor, a comprehensive dashboard that simplifies analytics.",
    },
    {
      icon: "	https://tbe.io/_next/static/media/portfolioIconFour.75ea5767.svg",
      title: "Powerful Partner",
      text: "With TBE as your partner, unlock unparalleled support and resources to propel your business or personal ventures to new heights.",
    },
    {
      icon: "	https://tbe.io/_next/static/media/users-feature-icon.9058d04d.svg",
      title: "Intuitive User Experience",
      text: "Navigate TBE’s seamlessly designed platform, optimizing your interaction with, and adoption of, blockchain technologies and services.",
    },
  ];
  useEffect(() => {
    fetch("https://ipinfo.io/json")
      .then((response) => {
        if (!response) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("IP data:", data);
        const userIpAddress = data.ip;
        console.log("Your public IP address is: " + userIpAddress);
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });
  }, []);
  return (
    <>
      <div
        style={{
          background:
            'url("	https://tbe.io/_next/static/media/sphereWithCubesServicesHer.16974b86.png") ',
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
        className="max-w-container px-[10px] mx-auto py-[100px]"
      >
        <h1 className="mt-3 text-[35px] w-full md:w-[40%] font-bold md:text-[50px] leading-[50px]">
          Unleash the Power of World-Class Services
        </h1>
        <p className="font-semibold gradiant-text w-full md:w-[30%] mt-5 text-[18px]">
          Transform your endeavors with our versatile and robust suite of
          services.
        </p>
        <Link href="/">
          <div className="py-[10px] px-[20px] border rounded-lg text-center inline-block mt-5 duration-500 hover:bg-primary-green ">
            Login Now
          </div>
        </Link>
      </div>
      {/* ??//////////////////////////// */}
      <div className="max-w-container px-[10px] mx-auto py-[70px]">
        <h2 className="text-[25px] md:text-[35px] text-center font-bold gradiant-text">
          Features that Elevate Your Journey
        </h2>
        <div className=" flex justify-center">
          <p className="text-grey text-center mt-5 w-[70%] gradiant-text">
            Our range of services are tailored to meet the diverse needs of
            modern users.
          </p>
        </div>
        {/* key feature start */}
        <div className="max-w-container px-[10px] mx-auto ">
          <div className="py-[80px] flex flex-col md:flex-row gap-3 flex-wrap">
            {keyFeatureData.map((item) => (
              <div
                style={{
                  background: "rgba(64,64,64,.1)",
                  backdropFilter: "blur(15px)",
                }}
                className="rounded-md w-full md:w-[49%] lg:w-[32%]  p-4 flex flex-col gap-y-3"
              >
                <img className="w-[50px] h-auto" src={item.icon} alt="" />
                <h3 className="font-bold text-[25px]">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        {/* keyfeature end */}
        {/* whyus start */}
        <div className="max-w-container px-[10px] mx-auto flex items-center justify-between flex-col md:flex-row gap-y-5 md:gap-y-0">
          <div className="w-full md:w-[49%]">
            <h2 className="text-[25px] md:text-[35px]  font-bold gradiant-text">
              Why Us?
            </h2>
            <p className="mt-2 gradiant-text text-[18px]">
              Quality, Reliability, and a Community of Innovators
            </p>

            <div className="flex items-center gap-x-3 mt-5">
              <div className="w-[80px]">
                <img
                  src="https://tbe.io/_next/static/media/startedIconOne.b42393cf.svg"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="">
                <p>
                  Our focus on quality ensures that you are always met with
                  excellence, whether it's in products, services, or community
                  engagement.
                </p>
              </div>
            </div>
            {/* /////////////// */}
            <div className="flex items-center gap-x-3 mt-5">
              <div className="w-[80px]">
                <img
                  src="https://tbe.io/_next/static/media/startedIconTwo.f6cb9787.svg"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="">
                <p>
                  TBE's reliable platforms and tools are backed by cutting-edge
                  technology and security features to give you peace of mind.
                </p>
              </div>
            </div>
            {/* //////////////// */}
            <div className="flex items-center gap-x-3 mt-5">
              <div className="w-[80px]">
                <img
                  src="https://tbe.io/_next/static/media/startedIconThree.9668bf84.svg"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="">
                <p>
                  Become part of a community that inspires innovation and
                  collaborative success, pushing boundaries in the blockchain
                  era.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[49%]">
            <iframe
              className="w-full h-[400px] rounded-xl"
              height="315"
              src="https://www.youtube.com/embed/ENrjn-lD1e8?si=Bc0mIGkCrHkGZYwm"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* whyus end */}
        {/* client slider */}
        <div className="mt-[60px] md:mt-[100px]">

        <OurClientSlider/>
        </div>
      </div>
    </>
  );
};

export default Setvice;
