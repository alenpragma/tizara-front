"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    FaRocket,
    FaMoneyBill,
    FaClock,
    FaCalendar,
    FaDollarSign,
} from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";
import { PiInfinityBold } from "react-icons/pi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Link from "next/link";
const PlanSlider = () => {
    let pricingPlan = [
        {
            name: "Startup",
            icon: <FaRocket />,
            profitRate: "0.32% - 0.33%",
            investment: "$100 - $499",
            capitalBack: true,
            returnType: "Period",
            numberOfPeriods: 600,
            profitWithdrawal: "Anytime",
            cancelWithinMinutes: 59,
            noProfitHolidays: true,
        },
        {
            name: "Basic",
            icon: <FaMoneyBill />,
            profitRate: "0.34% - 0.35%",
            investment: "$500 - $999",
            capitalBack: false,
            returnType: "Period",
            numberOfPeriods: 600,
            profitWithdrawal: "Anytime",
            cancelWithinMinutes: 40,
            noProfitHolidays: true,
            bestSchema: "Best Schema",
        },
        {
            name: "Standard",
            icon: <FaClock />,
            profitRate: "0.36% - 0.37%",
            investment: "$1000 - $4999",
            capitalBack: false,
            returnType: "Period",
            numberOfPeriods: 600,
            profitWithdrawal: "Anytime",
            cancelWithinMinutes: 59,
            noProfitHolidays: true,
        },
        {
            name: "Tzra Pro",
            icon: <FaDollarSign />,
            profitRate: "0.38% - 0.39%",
            investment: "$5000 - $9999",
            capitalBack: true,
            returnType: "Period",
            numberOfPeriods: 600,
            profitWithdrawal: "Anytime",
            cancelWithinMinutes: 50,
            noProfitHolidays: true,
        },
        {
            name: "Tzra Pro Max",
            icon: <BsBoxes />,
            profitRate: "0.40% - 0.41%",
            investment: "$10000 - 19999",
            capitalBack: true,
            returnType: "Period",
            numberOfPeriods: 600,
            profitWithdrawal: "Anytime",
            cancelWithinMinutes: 50,
            noProfitHolidays: true,
        },
        {
            name: "Tzra Infinity",
            icon: <PiInfinityBold />,
            profitRate: "0.42% - 0.43%",
            investment: "$20000 - unlimited",
            capitalBack: true,
            returnType: "Period",
            numberOfPeriods: 600,
            profitWithdrawal: "Anytime",
            cancelWithinMinutes: 50,
            noProfitHolidays: true,
        },
    ];
    return (
        <>
            <div className="w-full px-[10px] mx-auto">
                {/* slider start */}
                <div className="mt-[30px] mb-[100px]">
                    <Swiper
                        slidesPerView={1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={10}
                        breakpoints={{
                            380: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1440: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {pricingPlan.map((item) => (
                            <SwiperSlide>
                                <div className="w-full flex flex-col relative gap-y-5 rounded-lg border p-3 group overflow-hidden">
                                    <img src="https://tbe.io/_next/static/media/joinersEclipseGreen.6c493366.png" className="absolute bottom-0 left-0 w-full h-auto" alt="" />
                                    {/* <div className="flex justify-end absolute w-full top-3 right-3 ">
                                        {item.bestSchema && (
                                            <div className="bg-primary-green p-2 rounded-lg text-center">
                                                {item.bestSchema}
                                            </div>
                                        )}
                                    </div> */}
                                    <div className="mt-[80px] text-[40px]">{item.icon}</div>
                                    <div className="text-[25px] font-semibold">
                                        {item.name}
                                        <p className="text-primary-green text-[12px]">
                                        Daily ROI {item.profitRate}
                                        </p>
                                    </div>
                                    {/* ------------ */}
                                    <div className="flex items-center justify-between">
                                        <div className="">Investment</div>
                                        <div className="rounded-lg p-1 bg-primary-green">
                                            {item.investment}
                                        </div>
                                    </div>
                                    {/* ------------------ */}
                                    {/* ------------ */}
                                    <div className="flex items-center justify-between">
                                        <div className="">Capital Back</div>
                                        <div className="">No</div>
                                    </div>
                                    {/* ------------------ */}
                                    {/* ------------ */}
                                    <div className="flex items-center justify-between">
                                        <div className="">Return Type</div>
                                        <div className="">
                                            {item.returnType}
                                        </div>
                                    </div>
                                    {/* ------------------ */}
                                    {/* ------------ */}
                                    <div className="flex items-center justify-between">
                                        <div className="">Number of Period</div>
                                        <div className="">{`${item.numberOfPeriods} Times`}</div>
                                    </div>
                                    {/* ------------------ */}
                                    {/* ------------ */}
                                    <div className="flex items-center justify-between">
                                        <div className="">Profit Withdraw</div>
                                        <div className="">{`${item.profitWithdrawal}`}</div>
                                    </div>
                                    {/* ------------------ */}
                                    {/* ------------ */}
                                    <div className="flex items-center justify-between">
                                        <div className="">Cancel</div>
                                        <div className="">
                                            {/* {`Within ${item.cancelWithinMinutes} Minute`} */}
                                            No
                                        </div>
                                    </div>
                                    {/* ------------------ */}
                                    <div className="text-[12px] text-primary-green">
                                        {item.noProfitHolidays
                                            ? "*No Profit Holidays"
                                            : "*Monday are Holidays"}
                                    </div>
                                    {/* button start */}
                                    <div className="py-[40px] group-hover:translate-y-[-15px] duration-300">
                                        <div

                                            className="bg-border-black p-[2px] relative flex justify-center items-center overflow-hidden "
                                        >
                                            <div className="button-animation absolute lg:w-[300px] h-[20px] z-1 opacity-70 bg-primary-green  shadow-2xl  "></div>

                                            <Link href="https://client.tizara.co/login" className="relative z-3 w-full">
                                                <div
                                                    className={`py-[15px] px-[23px] w-full text-center  bg-primary-bg duration-300 hover:text-primary-green  `}
                                                >
                                                    Invest Now
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* button end */}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default PlanSlider;



// <div className="w-full flex flex-col relative gap-y-5 rounded-lg border p-3 group overflow-hidden">
// <img src="https://tbe.io/_next/static/media/joinersEclipseGreen.6c493366.png" className="absolute bottom-0 left-0 w-full h-auto" alt="" />
// {/* <div className="flex justify-end absolute w-full top-3 right-3 ">
// {item.bestSchema && (
// <div className="bg-primary-green p-2 rounded-lg text-center">
//     {item.bestSchema}
// </div>
// )}
// </div> */}
// <div className="mt-[80px] text-[40px]">{item.icon}</div>
// <div className="text-[25px] font-semibold">
//     {item.name}
//     <p className="text-primary-green text-[12px]">
//         {item.profitRate}
//     </p>
// </div>
// {/* ------------ */}
// <div className="flex items-center justify-between">
//     <div className="">Investment</div>
//     <div className="rounded-lg p-1 bg-primary-green">
//         {item.investment}
//     </div>
// </div>
// {/* ------------------ */}
// {/* ------------ */}
// <div className="flex items-center justify-between">
//     <div className="">Capital Back</div>
//     <div className="">No</div>
// </div>
// {/* ------------------ */}
// {/* ------------ */}
// <div className="flex items-center justify-between">
//     <div className="">Return Type</div>
//     <div className="">
//         Life time
//     </div>
// </div>
// {/* ------------------ */}
// {/* ------------ */}
// <div className="flex items-center justify-between">
//     <div className="">Number of Period</div>
//     <div className="">Unlimited</div>
// </div>
// {/* ------------------ */}
// {/* ------------ */}
// <div className="flex items-center justify-between">
//     <div className="">Profit Withdraw</div>
//     <div className="">{`${item.profitWithdrawal}`}</div>
// </div>
// {/* ------------------ */}
// {/* ------------ */}
// <div className="flex items-center justify-between">
//     <div className="">Cancel</div>
//     <div className="">
//         {/* {`Within ${item.cancelWithinMinutes} Minute`} */}
//         No
//     </div>
// </div>
// {/* ------------------ */}
// <div className="text-[12px] text-primary-green">
//     {item.noProfitHolidays
//         ? "*No Profit Holidays"
//         : "*Monday are Holidays"}
// </div>
// {/* button start */}
// <div className="py-[40px] group-hover:translate-y-[-15px] duration-300">
//     <div

//         className="bg-border-black p-[2px] relative flex justify-center items-center overflow-hidden "
//     >
//         <div className="button-animation absolute lg:w-[300px] h-[20px] z-1 opacity-70 bg-primary-green  shadow-2xl  "></div>

//         <Link href="https://client.tizara.co/login" className="relative z-3 w-full">
//             <div
//                 className={`py-[15px] px-[23px] w-full text-center  bg-primary-bg duration-300 hover:text-primary-green  `}
//             >
//                 Invest Now
//             </div>
//         </Link>
//     </div>
// </div>
// {/* button end */}
// </div>