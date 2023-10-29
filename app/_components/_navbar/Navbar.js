"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();

  let navData = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/pages/about",
    },
    {
      name: "Services",
      path: "/pages/services",
    },
  ];
  //   navbar responsive functionality
  let [show, setShow] = useState(true);

  useEffect(() => {
    let scrollWidt = (e) => {
      window.innerWidth < 1024 ? setShow(true) : setShow(false);
    };
    scrollWidt();
    window.addEventListener("resize", scrollWidt());
  }, []);

  return (
    <>
      <div className="max-w-container mx-auto px-[10px] py-[20px]">
        <div className="flex justify-between items-center ">
          {/* Logo starts */}
          <h2 className="font-bold text-[30px] md:text-[30px]  lg:text-[40px]">
            Tizara<span className="text-primary-green">.</span>
          </h2>
          {/* logo Ends */}
          {!show && (
            <div className="flex justify-center gap-y-5 lg:gap-y-0 lg:justify-between flex-col lg:flex-row  fixed lg:static h-[100vh] top-0 left-0 lg:h-0  w-[100%] lg:w-[60%] items-center bg-primary-bg">
              <FaTimes
                onClick={() => setShow(true)}
                className="lg:hidden text-[30px] fixed top-5 right-5"
              />
              <h2 className="font-bold text-center text-[30px] md:text-[30px] lg:hidden lg:text-[40px]">
                Tizara<span className="text-primary-green">.</span>
              </h2>
              <ul className={`m-0 p-0 flex gap-x-10 flex-col lg:flex-row`}>
                {navData.map((item) => (
                  <li
                    onClick={() => setShow((prev) => !prev)}
                    className="text-center lg:text-left"
                  >
                    <Link
                      href={item.path}
                      className={`${
                        pathname === `${item.path}` ? "text-primary-green" : ""
                      }  duration-300 hover:text-primary-green `}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="">
                <div         onClick={() => setShow((prev) => !prev)} className="bg-border-black p-[2px] relative flex justify-center items-center overflow-hidden">
                  <div className="button-animation absolute w-[300px] h-[20px] z-1 opacity-70 bg-primary-green  shadow-2xl  "></div>

                  <Link href="/pages/contact" className="relative z-3">
                    <div
                      className={`py-[15px] px-[23px]  bg-primary-bg duration-300 hover:text-primary-green ${
                        pathname === `/pages/contact`
                          ? "text-primary-green"
                          : ""
                      } `}
                    >
                      Contact Us
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}

          <RxHamburgerMenu
            onClick={() => setShow((prev) => !prev)}
            className="text-[30px] duration-300 hover:text-primary-green lg:hidden"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
