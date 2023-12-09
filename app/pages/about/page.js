import DiveSlider from "@/app/_components/_sliders/_dive-in-slider/DiveSlider";
import OurClientSlider from "@/app/_components/_sliders/_ourClientSLider/OurClientSlider";
import Link from "next/link";
import React from "react";

const About = () => {
  let keyFeatureData = [
    {
      icon: "https://i.postimg.cc/R0vNXJbh/OUR-MISSION-01.png",
      title: "OUR MISSION",
      text: "Our mission is to pioneer innovative financial solutions within the cryptocurrency landscape.We aim to empower investors by providing comprehensive insights, cryptocurrency, capital stoke market, fostering education and delivering tailored investment strategies. Subsequent Step:-  Public Blockchain Network, Decentralize Exchange, AI Incredible TIZARA Coin, World Wide Fiat Payment Gateway, TIZARA Node and Antimining, TIZARA Asset Management Fund (TAMF)",
    },
    {
      icon: "https://i.postimg.cc/YCmMwrT7/OUR-VISION-01.png",
      title: "OUR VISION",
      text: "At Tizara, we envision a future where crypto investments are accessible, secure, and transformative. Our goal is to lead the charge in revolutionizing traditional finance by offering cutting-edge investment opportunities in the cryptocurrency realm. We aspire to be the beacon of trust, innovation and growth, empowering individuals and institutions to embrace the limitless potential of digital assets while ensuring financial prosperity and stability.",
    },
    {
      icon: "https://i.postimg.cc/Jz3YXSkJ/WHAT-WE-OFFER-01.png",
      title: "WHAT WE OFFER",
      text: "We specialize in providing tailored investment solutions and guidance to both seasoned traders and newcomers venturing into the crypto space. Our comprehensive suite of services includes portfolio management, personalized investment strategies, market analysis, and educational resources aimed at fostering financial literacy within the crypto ecosystem.",
    },
    {
      icon: "https://i.postimg.cc/QCpYqzyR/OUR-APPROACH-01.png",
      title: "OUR APPROACH",
      text: "Transparency, security, and integrity form the bedrock of our operations. We prioritize due diligence in selecting assets and projects, employing rigorous risk management practices to ensure the safety and growth of our client's investments. By staying ahead of market trends and leveraging innovative technologies, we strive to deliver consistent value and sustainable growth opportunities.",
    },
    {
      icon: "https://i.postimg.cc/G2DXcNdH/OUR-COMMITMENT-01.png",
      title: "OUR COMMITMENT",
      text: "We're here to help you achieve your financial goals, whether you're just starting out or looking to take your investment to the next level. Your financial future is in your hands and we're here to guide you every step of the way.",
    },
    {
      icon: "https://i.postimg.cc/3J1nJ25C/COLLABORATION-01.png",
      title: "COLLABORATION",
      text: "At Tizara, we leverage the power of Atomation, Robotix, Blockchain, Sigma Trade, Matrix, and AI to redefine the investment landscape. We believe that this technology gives us transparency and secure investment. We also have a partnership with Cubix blockchain development company.",
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
              Welcome to TIZARA
            </h1>
            <p className="mt-3 mb-5 text-grey text-center">
              Tizara is a financial investment company. We are dedicated to
              providing bespoke financial solutions that empower our clients
              to achieve their investment goals with a strong foundation built
              on expertise, integrity, and client-centricity. With a steadfast
              commitment to innovation and strategic foresight, we specialize
              in navigating the dynamic landscape of digital assets and
              blockchain technology.
            </p>
            <Link href="https://client.tizara.co/login">
              <div className="py-[10px] px-[20px] border rounded-lg text-center inline-block mt-5 duration-500 hover:bg-primary-green ">
                Login
              </div>
            </Link>
          </div>
        </div>
        {/* about banner end */}
        {/* key feature start */}
        <div className="max-w-container px-[10px] mx-auto py-[100px]">
          {/* <div className="flex flex-col gap-y-10 md:justify-between md:flex-row ">
            <h2 className="w-full md:w-[40%] text-[20px] md:text-[30px] font-bold gradiant-text">
              Key Features of TBE's Revolutionary Offerings
            </h2>
            <p className="w-full md:w-[40%] text-grey">
              Bridging your ambitions with groundbreaking blockchain technology,
              TBE equips you with all the tools you need for a transformative
              journey.
            </p>
          </div> */}
          <div className="py-[80px] flex flex-col md:flex-row gap-3 flex-wrap">
            {keyFeatureData.map((item) => (
              <div
                style={{
                  background: "rgba(64,64,64,.1)",
                  backdropFilter: "blur(15px)",
                }}
                className="rounded-md w-full md:w-[49%] lg:w-[32%]  p-4 flex flex-col gap-y-3"
              >
                <img className="w-[40px] h-auto" src={item.icon} alt="" />
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
            JOIN US
          </h2>
        </div>
        {/* dive in text end */}
        {/* dive slider start */}
        {/* <DiveSlider /> */}
        <div className="max-w-container mx-auto px-[10px] pb-[80px] ">
          <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center pb-[60px] md:pb-0">
            <div className="w-full md:w-[48%] ">
              <p>
                Whether you're a seasoned investor seeking to diversify your portfolio or someone curious about the potential of cryptocurrencies, TIZARA welcomes you to join us on this exciting journey. Together, let's explore the endless possibilities that the world of digital assets has to offer.
              </p>
              <p className="mt-5 font-bold">
                Get in touch with us today to discover how we can help you navigate the ever-evolving crypto landscape and achieve your financial goals.
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
        </div>
        {/* dive slider end */}
        {/* our client slider start */}
        <OurClientSlider />
        {/* our client slider end */}
      </div>
    </>
  );
};

export default About;
