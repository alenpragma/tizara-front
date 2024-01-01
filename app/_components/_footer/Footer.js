import Link from "next/link";
import React from "react";
import { BsTelegram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const handlePdfViwer = () => {
    const pdfUrl = "https://www.docfly.com/files/nuwhj6kt8kd-29a9fe8c";
    window.open(pdfUrl, "_blank");
  };
  const emailAddress = 'info@tizara.com';
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
            Tizara is a financial investment company. We are dedicated to providing bespoke financial solutions that empower our clients to achieve their investment goals with a strong foundation built on expertise, integrity, and client-centricity. With a commitment to expertise, integrity, and a client-focused approach, we empower individuals to secure their financial future through customized strategies and comprehensive guidance.
          </p>
          <div className="flex gap-2">
            <span className="font-semibold">Support : </span>
            <p>4288 Hyman Causeway, Valletta, Malta</p>
          {/* <Link href={`mailto:${emailAddress}`} className="text-primary-green">
          info@tizara.com
          </Link> */}
          </div>
        </div>
        <div className="w-full md:w-[35%] flex flex-col md:flex-row gap-y-10 md:gap-x-3">
          <div className="w-full md:w-[50%]">
            <h3 className="font-bold text-[18px] md:text-[25px] uppercase">
              Sitemap
            </h3>
            <ul className="mt-5 flex flex-col gap-y-4">
              <li>
                <Link
                  href="/pages/contact"
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
              <li>
                <Link
                  href="/pages/faq"
                  className="duration-300 hover:text-primary-green"
                >
                  FAQ
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
                  href="/pages/privacy"
                  className="duration-300 hover:text-primary-green"
                >
                  Privacy & Cookie Policy
                </Link>
              </li>
              <li className="custom-li">
                <Link
                  href="/pages/terms-and-conditions"
                  className="duration-300 hover:text-primary-green"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li className="custom-li duration-300 hover:text-primary-green cursor-pointer">
                <Link
                  href={"https://pdfhost.io/v/sQZqG4Zhd_PowerPoint_Presentation"}
                >
                  Whitepaper
                </Link>
              </li>
              <li className="custom-li">
                <Link
                  href="/pages/commission-policy"
                  className="duration-300 hover:text-primary-green"
                >
                  Commission Policy
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
      <div className="max-w-container mx-auto px-[10px] py-[40px] flex justify-between items-center">
        <p className="text-grey">Tizara. All Rights Reserved. © 2023</p>
        <div className="flex items-center gap-x-3">
          <p className="text-grey">Follow on socials:</p>
          <Link
            href="https://twitter.com/"
            target="_blank"
            className="text-[25px] duration-300 hover:text-primary-green"
          >
            <FaXTwitter />
          </Link>
          <Link
            href="https://web.telegram.org/"
            target="_blank"
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
