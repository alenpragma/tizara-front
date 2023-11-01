import DiveSlider from "@/app/_components/_sliders/_dive-in-slider/DiveSlider";
import OurClientSlider from "@/app/_components/_sliders/_ourClientSLider/OurClientSlider";
import Link from "next/link";
import React from "react";

const About = () => {
  let keyFeatureData = [
    {
      icon: "	https://tbe.io/_next/static/media/featureOneIcon.9ade4402.svg",
      title: "Blockchain Solutions",
      text: "Leverage TBE's avant-garde blockchain technology for secure, transparent, and hyper-efficient digital interactions.",
    },
    {
      icon: "https://tbe.io/_next/static/media/tech-suite-product-feature.26a81b2a.svg",
      title: "Cutting-Edge Tech Suite",
      text: "Dive into TBE's premier tech offerings, architected to catapult both your personal and business ventures into a future of efficiency, security, and innovation.",
    },
    {
      icon: "	https://tbe.io/_next/static/media/ecosystem-product-feature.a1edea07.svg",
      title: "Collaborative Ecosystem",
      text: "Immerse yourself in TBE's robust community of blockchain aficionados, experts, and visionaries, collectively striving for innovation and success.",
    },
    {
      icon: "https://tbe.io/_next/static/media/empowerment-feature-icon.40c3398a.svg",
      title: "Financial Empowerment",
      text: "Gain true financial autonomy with TBE’s invaluable educational resources, pragmatic tools, and ongoing support, guiding you to take the reins of your fiscal future.",
    },
    {
      icon: "	https://tbe.io/_next/static/media/rewards-feature-icon.a0c5f574.svg",
      title: "Incentive-Driven Rewards",
      text: "Thrive within TBE's dynamic rewards ecosystem, designed to commend your contributions, foster excellence, and amplify your impact.",
    },
    {
      icon: "	https://tbe.io/_next/static/media/users-feature-icon.9058d04d.svg",
      title: "Intuitive User Experience",
      text: "Navigate TBE’s seamlessly designed platform, optimizing your interaction with, and adoption of, blockchain technologies and services.",
    },
  ];
  return (
    <>
      <div>
        {/* about banner start */}
        <div
          style={{
            backgroundImage:
              'url("https://tbe.io/_next/static/media/bg.190279b7.png")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            backgroundSize: "cover",
          }}
          className="w-full py-[50px] md:py-[100px]"
        >
          <div className="max-w-container text-center px-[10px]  mx-auto">
            <p>CONNECT, PRODUCE, MAXIMIZE: THE BLOCKCHAIN ERA BEGINS</p>
            <h1 className="mt-3 text-[35px] font-bold md:text-[50px] text-center">
              Explore the Future: TBE's Innovative Products
            </h1>
            <p className="mt-3 mb-5 text-grey text-center">
              Unlock a world of possibilities with TBE's innovative blockchain
              products and services tailored to elevate your digital experience.
            </p>
            <Link href="/">
              <div className="py-[10px] px-[20px] border rounded-lg text-center inline-block mt-5 duration-500 hover:bg-primary-green ">
                Register Now
              </div>
            </Link>
          </div>
        </div>
        {/* about banner end */}
        {/* key feature start */}
        <div className="max-w-container px-[10px] mx-auto py-[100px]">
          <div className="flex flex-col gap-y-10 md:justify-between md:flex-row ">
            <h2 className="w-full md:w-[40%] text-[20px] md:text-[30px] font-bold gradiant-text">
              Key Features of TBE's Revolutionary Offerings
            </h2>
            <p className="w-full md:w-[40%] text-grey">
              Bridging your ambitions with groundbreaking blockchain technology,
              TBE equips you with all the tools you need for a transformative
              journey.
            </p>
          </div>
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
        {/* dive in text start */}
        <div className="max-w-container px-[10px] mx-auto ">
          <h2 className="text-[25px] md:text-[35px] text-center font-bold gradiant-text mb-10">
            Your Blockchain Destiny is One Click Away: Dive In!
          </h2>
        </div>
        {/* dive in text end */}
        {/* dive slider start */}
        <DiveSlider/>                                                                                                                                             
        {/* dive slider end */}
        {/* our client slider start */}
        <OurClientSlider/>
        {/* our client slider end */}
      </div>
    </>
  );
};

export default About;
