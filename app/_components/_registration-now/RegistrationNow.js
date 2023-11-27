"use client";
import React from "react";
import Footer from "../_footer/Footer";

const RegistrationNow = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://tbe.io/_next/static/media/greenGalaxy.5d0e1046.png")',
        backgroundRepeat: "no-repeat",

        backgroundSize: "cover",
      }}
      className="py-[50px] md:py-[100px]"
    >
      <div className="max-w-container px-[10px] mx-auto mb-10">
        <div className="flex flex-col gap-y-10 md:justify-between md:flex-row ">
          <h2 className="w-full md:w-[40%] text-[20px] md:text-[30px] font-bold">
            Infinite Possibilities, One Platform:{" "}
            <span className="text-primary-green">Tizara</span>
          </h2>
          <p className="w-full md:w-[40%] font-semibold">
            Don't miss out on the revolution. Register now to reshape your
            future! <br />
            <a href="https://client.tizara.co/register" className="underline font-bold text-primary-green">
              Register Now
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationNow;
