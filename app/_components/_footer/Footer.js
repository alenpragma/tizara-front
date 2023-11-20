import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="max-w-container mx-auto px-[10px] mt-[100px] flex flex-col md:flex-row md:justify-between gap-y-10 md:gap-x-4 border-grey border-t border-b py-[100px]">
        <div className="w-full md:w-[55%] flex flex-col gap-y-5">
          <img
            src="https://i.postimg.cc/hjQBWWDQ/logo-1.png"
            className="w-[150px]  md:w-[180px] h-auto"
            alt=""
          />
          <p>
            Tizara is a financial investment company. We are dedicated to
            providing bespoke financial solutions that empower our clients
            to achieve their investment goals with a strong foundation built
            on expertise, integrity, and client-centricity.
          </p>
        </div>
        <div className="w-full md:w-[35%] flex flex-col md:flex-row gap-y-10 md:gap-x-3">
          <div className="w-full md:w-[50%]">
            <h3 className="font-bold text-[18px] md:text-[25px] uppercase">
              Sitemap
            </h3>
            <ul className="mt-5 flex flex-col gap-y-4">
              <li>
                <Link
                  href="pages/contact"
                  className="duration-300 hover:text-primary-green"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/about"
                  className="duration-300 hover:text-primary-green"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/services"
                  className="duration-300 hover:text-primary-green"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-[50%]">
            <h3 className="font-bold text-[18px] md:text-[25px] uppercase">
              Legal
            </h3>
            <ul className="mt-5 flex flex-col gap-y-4">
              <li className="custom-li">
                <Link
                  href="pages/privacy-cookie-policy"
                  className="duration-300 hover:text-primary-green"
                >
                  Privacy & Cookie Policy
                </Link>
              </li>
              <li className="custom-li">
                <Link
                  href="pages/terms-and-conditions"
                  className="duration-300 hover:text-primary-green"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li className="custom-li">
                <Link
                  href="pages/tax-declaration"
                  className="duration-300 hover:text-primary-green"
                >
                  Tax Declaration
                </Link>
              </li>
              <li className="custom-li">
                <Link
                  href="pages/commission-policy"
                  className="duration-300 hover:text-primary-green"
                >
                  Commission Policy
                </Link>
              </li>
              <li className="custom-li">
                <Link
                  href="pages/distributor-agreement"
                  className="duration-300 hover:text-primary-green"
                >
                  Distributor Agreement
                </Link>
              </li>
              <li className="custom-li">
                <Link
                  href="pages/risk-disclosure"
                  className="duration-300 hover:text-primary-green"
                >
                  Risk Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-container mx-auto px-[10px] py-[50px] flex justify-between items-center">
        <p className="text-grey">Tizara. All Rights Reserved. © 2023</p>
        <div className="flex items-center gap-x-3">
          <p className="text-grey">Follow on socials:</p>
          <Link
            href=""
            className="text-[25px] duration-300 hover:text-primary-green"
          >
            <FaFacebookSquare />
          </Link>
          <Link
            href=""
            className="text-[25px] duration-300 hover:text-primary-green"
          >
            <BiLogoInstagramAlt />
          </Link>
          <Link
            href=""
            className="text-[25px] duration-300 hover:text-primary-green"
          >
            <BsTelegram />
          </Link>
        </div>
      </div>

    </>
  );
};

export default Footer;
