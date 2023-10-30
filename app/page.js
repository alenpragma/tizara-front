import Link from "next/link";
import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";

const page = () => {
  return (
    <>
      <div className=" md:py-[80px] relative">
        <div
          style={{
            backgroundImage: 'url("https://i.ibb.co/KsNfMVG/Group-1-1-1.png")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="homeBanner "
        >
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
                Unlock the Best <span className="text-primary-green">Era</span>{" "}
                of your Life
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
              Elevate Your Horizons: Be a Pioneer in The Blockchain Era
            </h3>
            <p className="gradiant-text text-[18px] md:text-[25px] mt-5">
              At TBE, we are not just about connections, we're about empowering
              change. Dive into a universe of opportunities and regain control
              over your destiny. Your future is blockchain; your future is TBE.
            </p>
          </div>
          {/* be a pioneer section end */}
          {/* transform your section life start */}
          <div className="max-w-container px-[10px] mx-auto mb-10">
            <div className="flex justify-between">
              {/* card one start */}
              <div className="w-[100%] md:w-[32%] group">
                <Link href="/">
                
                 <img src="https://tbe.io/_next/static/media/firstProject.85144066.png" className="w-full h-auto duration-300 rounded-2xl  group-hover:border group-hover:border-primary-green" alt="" />
                </Link>
              <h4 className="font-semibold text-[20px] md:text-[30px] mb-3">
              A New Dawn in Tech & Economy: Welcome to The Blockchain Era
              </h4>
              <p>Join TBE and become part of a grassroots movement redefining the future. Our groundbreaking platform, state-of-the-art products, and vibrant community are laying the cornerstone of a revolutionary era. Engage with us today.</p>
              </div>
              {/* card one end */}
               {/* card two start */}
               <div className="w-[100%] md:w-[32%] group">
                <Link href="/">
                
                 <img src="https://tbe.io/_next/static/media/firstProject.85144066.png" className="w-full h-auto duration-300 rounded-2xl  group-hover:border group-hover:border-primary-green" alt="" />
                </Link>
              <h4 className="font-semibold text-[20px] md:text-[30px] mb-3">
              A New Dawn in Tech & Economy: Welcome to The Blockchain Era
              </h4>
              <p>Join TBE and become part of a grassroots movement redefining the future. Our groundbreaking platform, state-of-the-art products, and vibrant community are laying the cornerstone of a revolutionary era. Engage with us today.</p>
              </div>
              {/* card two end */}
               {/* card three start */}
               <div className="w-[100%] md:w-[32%] group">
                <Link href="/">
                
                 <img src="https://tbe.io/_next/static/media/firstProject.85144066.png" className="w-full h-auto duration-300 rounded-2xl  group-hover:border group-hover:border-primary-green" alt="" />
                </Link>
              <h4 className="font-semibold text-[20px] md:text-[30px] mb-3">
              A New Dawn in Tech & Economy: Welcome to The Blockchain Era
              </h4>
              <p>Join TBE and become part of a grassroots movement redefining the future. Our groundbreaking platform, state-of-the-art products, and vibrant community are laying the cornerstone of a revolutionary era. Engage with us today.</p>
              </div>
              {/* card three end */}
            </div>
          </div>

          {/* transform your section life end */}
        </div>
      </div>
    </>
  );
};

export default page;
