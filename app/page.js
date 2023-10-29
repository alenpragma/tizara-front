import React from "react";

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
          <div className="max-w-container mx-auto px-[10px]  flex flex-col gap-y-[100px] md:gap-y-0 md:flex-row justify-between py-[100px] md:py-[150px] lg:py-[250px]">
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
                <p className="font-semibold text-grey text-[18px] md:text-[25px]">Embrace the Tizara Era</p>
                <h1 className="mt-5 md:mt-10 text-[45px] md:text-[60px] text-center">Unlock the Best <span className="text-primary-green">Era</span> of your Life</h1>
            </div>
            {/* mid col end */}
            {/* right col start */}
            <div className="flex justify-between w-full md:w-[20%]  md:flex-col md:gap-y-10">
              <div className="flex flex-col justify-center items-center md:justify-start md:items-end">
                <div className="flex flex-col items-center md:items-start">
                  <h2 className=" text-[35px] lg:text-[45px] mb-0">6k+</h2>
                  <p className="text-grey font-semibold mt-[-5px]">
                    New Users
                    <br className="hidden md:flex" /> Yesterday
                  </p>
                </div>
              </div>

              <div className="bg-grey h-[2px] opacity-20 w-full hidden md:flex"></div>
              <div className="flex flex-col justify-center items-center md:justify-start md:items-end">
                <div className="flex flex-col items-center md:items-start">
                  <h2 className=" text-[35px] lg:text-[45px] mb-0">519k+</h2>
                  <p className="text-grey font-semibold mt-[-5px]">
                    Community
                    <br className="hidden md:flex" /> Members
                  </p>
                </div>
              </div>
            </div>
            {/* right col end */}
          </div>
          {/* hero section end */}
        </div>
      </div>
    </>
  );
};

export default page;
