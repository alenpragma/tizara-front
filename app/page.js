import Link from "next/link";
import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import OurPartnerSlider from "./_components/_sliders/_our-pertner-slider/OurPartnerSlider";

const page = () => {
  return (
    <>
      <div className=" md:py-[80px] relative">
        <div
          // style={{
          //   backgroundImage: 'url("https://i.ibb.co/KsNfMVG/Group-1-1-1.png")',
          //   backgroundRepeat: "no-repeat",
          //   backgroundPosition: "center",
          //   backgroundSize: "cover",
          // }}
          className="homeBanner w-full relative"
        >
          <img
            src="https://i.ibb.co/KsNfMVG/Group-1-1-1.png"
            className="absolute left-0  top-[100px] z-[-1] md:top-0  w-full h-auto"
            alt=""
          />

          {/* hero section start */}
          <div className="max-w-container mx-auto px-[10px]  flex flex-col gap-y-[80px] md:gap-y-0 md:flex-row justify-between py-[100px] md:py-[150px] lg:py-[250px]">
            {/* left col start */}
            <div className="flex justify-between w-full md:w-[20%]  md:flex-col md:gap-y-10">
              <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
                <h2 className=" text-[35px] lg:text-[45px] mb-0">2M+</h2>
                <p className="text-grey font-semibold mt-[-5px]">
                  People
                  <br className="hidden md:flex" /> Impacted
                </p>
              </div>

              <div className="bg-grey h-[2px] opacity-20 w-full hidden md:flex"></div>
              <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
                <h2 className=" text-[35px] lg:text-[45px] mb-0">100+</h2>
                <p className="text-grey font-semibold mt-[-5px]">
                  Countries
                  <br className="hidden md:flex" /> Reached
                </p>
              </div>
            </div>
            {/* left col end */}
            {/* mid col start */}
            <div className="w-full flex flex-col justify-center items-center md:w-[80%]">
              <p className="font-semibold text-grey text-[18px] md:text-[25px]">
                Embrace the Tizara Era
              </p>
              <h1 className="mt-5 md:mt-10 text-[45px] md:text-[60px] text-center">
                Your Trusted Financial Investment Partner
              </h1>

              <div className="flex justify-center mt-10">
                <Link href="/">
                  <div className="group w-[90px] md:w-[140px] h-[90px] md:h-[140px] rounded-full border border-grey flex justify-center items-center duration-300 hover:bg-primary-green ">
                    <CiLocationArrow1 className="text-[30px] group-hover:text-[#222] duration-300" />
                  </div>
                </Link>
              </div>
            </div>

            {/* mid col end */}
            {/* right col start */}
            <div className="flex justify-between w-full md:w-[20%]  md:flex-col md:gap-y-10">
              <div className="flex flex-col justify-center items-center md:justify-start md:items-end">
                <div className="flex flex-col items-center md:items-start">
                  <h2 className=" text-[35px] lg:text-[45px] mb-0">6k+</h2>
                  <p className="text-grey font-semibold mt-[-5px] text-center">
                    New Users
                    <br className="hidden md:flex" /> Yesterday
                  </p>
                </div>
              </div>

              <div className="bg-grey h-[2px] opacity-20 w-full hidden md:flex"></div>
              <div className="flex flex-col justify-center items-center md:justify-start md:items-end">
                <div className="flex flex-col items-center md:items-start">
                  <h2 className=" text-[35px] lg:text-[45px] mb-0">519k+</h2>
                  <p className="text-grey font-semibold mt-[-5px] text-center">
                    Community
                    <br className="hidden md:flex" /> Members
                  </p>
                </div>
              </div>
            </div>
            {/* right col end */}
          </div>
          {/* hero section end */}
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* be a pioneer section start */}
          <div className="max-w-container px-[10px] mx-auto mb-10">
            <h3 className="text-[25px] md:text-[40px] gradiant-text">
              Elevate Your Horizons: Be a Pioneer in The Blockchain Investment
            </h3>
            <p className="gradiant-text text-[18px] md:text-[25px] mt-5">
              At Tizara, we specialize in providing innovative investment solutions tailored to the dynamic world of crypto. Our platform offers a seamless and secure experience for investors seeking to capitalize on the potential of digital assets.
            </p>
          </div>
          {/* be a pioneer section end */}
          {/* transform your section life start */}
          <div className="max-w-container px-[10px] mx-auto mb-10">
            <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row justify-between">
              {/* card one start */}
              <div className="w-[100%] md:w-[32%] group">
                <Link href="/">
                  <img
                    src="https://i.postimg.cc/6qntWvHm/Untitled-2-01.jpg"
                    className="w-full h-auto duration-300 rounded-2xl  group-hover:border group-hover:border-primary-green"
                    alt=""
                  />
                </Link>
                <h4 className="font-semibold text-[20px] md:text-[30px] mb-3">
                  A New Dawn in Tech & Economy: Welcome to The Blockchain Era
                </h4>
                <p>
                  Join Tizara and become part of a world-leading investor for the future. Our groundbreaking platform, blockchain products, and vibrant community are laying the cornerstone of a revolutionary era. Engage with us today.
                </p>
              </div>
              {/* card one end */}
              {/* card two start */}
              <div className="w-[100%] md:w-[32%] group">
                <div
                  style={{
                    backgroundImage:
                      'url("https://tbe.io/_next/static/media/projectLink.0ccb0138.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  className="rounded-[15px]  p-5 mb-5 flex justify-between gap-x-3"
                >
                  <div className="">
                    <h4 className="font-semibold text-[18px] md:text-[25px] mb-3">
                      Transform Your Life
                    </h4>
                    <p>
                      Leap into The Blockchain Era and redefine what's possible,
                      both for yourself and the world.
                    </p>
                  </div>
                  <div className="">
                    <Link href="/">
                      <div className="group w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full border  flex justify-center bg-white items-center duration-300 hover:bg-primary-green ">
                        <CiLocationArrow1 className="text-[30px] group-hover:text-white text-[#222] duration-300" />
                      </div>
                    </Link>
                  </div>
                </div>
                <Link href="/">
                  <img
                    src="https://i.postimg.cc/QxX9VN3y/Untitled-1-01.jpg"
                    className="w-full h-auto duration-300 rounded-2xl  group-hover:border group-hover:border-primary-green"
                    alt=""
                  />
                </Link>
                <h4 className="font-semibold text-[20px] md:text-[30px] mb-3">
                  Investment: Your Blockchain Investment Journey Begins with Tizara
                </h4>
                <p>
                  Tizara isn't just a financial service; it's a social revolution. We furnish you with the tools, the expertise, and the community you need to excel in this disruptive landscape. Step on investment in the blockchain future with us and tap into limitless possibilities.
                </p>
              </div>
              {/* card two end */}
              {/* card three start */}
              <div className="w-[100%] md:w-[32%] group">
                <Link href="/">
                  <img
                    src="https://i.postimg.cc/NMWHMZtf/way-concept-illustration-114360-1583-01.jpg"
                    className="w-full h-auto duration-300 rounded-2xl  group-hover:border group-hover:border-primary-green"
                    alt=""
                  />
                </Link>
                <h4 className="font-semibold text-[20px] md:text-[30px] mb-3">
                  Pave Your Path with The Tizara
                </h4>
                <p>
                  Tizara simplifies the complex, making blockchain investment accessible and fruitful for all. From investment to comprehensive services, we’ve got your blockchain ambitions covered. Join Tizara today and become a crypto investor.
                </p>
              </div>
              {/* card three end */}
            </div>
          </div>
          {/* transform your section life end */}
          {/* our partner slider start */}
          <div className="!mt-10 max-w-container px-[10px] mx-auto mb-10">
            <h3 className="text-[25px] md:text-[40px] gradiant-text mb-5">
              Our Partners
            </h3>
            <OurPartnerSlider />
          </div>
          {/* our partner slider end */}
          {/* Scale New Heights start */}
          <div className="!mt-[80px] max-w-container px-[10px] mx-auto mb-10">
            <h3 className="text-[25px] md:text-[40px] gradiant-text">
              Scale New Heights: Today's Pioneers, Tomorrow's Leaders
            </h3>
            <div className="flex items-center gap-x-3">
              <img
                src="https://tbe.io/_next/static/media/people.5da9dbdb.png"
                alt=""
              />

              <h3 className="text-[20px] md:text-[30px] mt-10">
                Join <span className="!text-primary-green">3.1K+</span> New
                Members Today and Start Building Your Digital Empire
              </h3>
            </div>
            <div className="flex flex-col md:flex-row mt-[80px] gap-y-3 md:gap-x-3">
              <div className="flex flex-col gap-y-3 w-full md:w-[64%]">
                <div className="p-5 duration-300 hover:translate-y-[-4%] border relative rounded-2xl overflow-hidden hover:border-primary-green">
                  <img
                    src="https://tbe.io/_next/static/media/joinersEclipseGreen.6c493366.png"
                    className="absolute bottom-0 left-0"
                    alt=""
                  />
                  <img
                    src="https://tbe.io/_next/static/media/ranksIMG.b28eca51.png"
                    className="md:absolute top-0 right-0"
                    alt=""
                  />
                  <div className="relative w-full md:w-[50%] duration-300  z-3">
                    <h4 className="font-semibold text-[18px] md:text-[25px] mb-3">
                      Climb the Ranks: Your Digital Career Awaits
                    </h4>
                    <p>
                      TBE offers you the unique opportunity to climb the ranks
                      in a dynamic, fast-paced digital career. With various
                      ranks and milestones, your potential for growth and
                      development is limitless. Turn your passion for blockchain
                      into a rewarding career today.
                    </p>
                  </div>
                </div>
                <div className="p-5 duration-300 hover:translate-y-[-4%] border relative rounded-2xl overflow-hidden hover:border-primary-green">
                  <img
                    src="https://tbe.io/_next/static/media/joinersEclipseGreen.6c493366.png"
                    className="absolute bottom-0 left-0"
                    alt=""
                  />
                  <img
                    src="https://tbe.io/_next/static/media/chartJoiners.0dd44e9c.png"
                    className="md:absolute top-0 right-0"
                    alt=""
                  />
                  <div className="relative w-full md:w-[50%] duration-300  z-3">
                    <h4 className="font-semibold text-[18px] md:text-[25px] mb-3">
                      Reap the Rewards: The Freedom to Excel
                    </h4>
                    <p>
                      At TBE, we believe in recognizing and rewarding your hard
                      work. Our comprehensive rewards program ensures that your
                      contributions don't just benefit the community, they pave
                      the way for your personal freedom.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-3 w-full md:w-[34%]">
                <div className="p-5 duration-300 hover:translate-y-[-4%] border relative rounded-2xl overflow-hidden hover:border-primary-green">
                  <img
                    src="https://tbe.io/_next/static/media/joinersEclipseGreen.6c493366.png"
                    className="absolute bottom-0 left-0"
                    alt=""
                  />

                  <div className="relative w-full  duration-300  z-3">
                    <h4 className="font-semibold text-[18px] md:text-[25px] mb-3">
                      Reap the Rewards: The Freedom to Excel
                    </h4>
                    <p>
                      At TBE, we believe in recognizing and rewarding your hard
                      work. Our comprehensive rewards program ensures that your
                      contributions don't just benefit the community, they pave
                      the way for your personal freedom.
                    </p>
                  </div>
                  <img
                    src="https://tbe.io/_next/static/media/userstree.914b181a.png"
                    className=" w-full h-auto"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Scale New Heights end */}
        </div>
      </div>
    </>
  );
};

export default page;
