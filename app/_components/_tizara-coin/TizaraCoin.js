
'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TizaraCoin = () => {
    const token = "0x0a30F4BC6D57bA1Be0f1ac117de97E6D4889420d"

    const copyToClipboard = () => {
        navigator.clipboard.writeText(token)
            .then(() => {
                toast.success("Texed copid", {
                    autoClose: 2000,
                });
            })
            .catch(err => {
                console.error('Failed to copy phone number: ', err);
            });
    };

    return (
        <div className="max-w-container px-[10px] mx-auto " >
            <div>
                <h3 className="text-[25px] md:text-[40px] gradiant-text text-center">
                    Transparency and Trust
                </h3>
                <p className="text-[14px] md:text-[24px] gradiant-text text-center">
                    Transparency is at the core of our operations. We believe
                </p>
            </div>
            <div className="grid grid-cols-12 mt-14">

                <div className=" border-b border-[#07f9c873]  col-span-6 font-semibold text-2xl">
                    <div className="w-[99%] h-[98%] m-auto rounded shadow-2xl bg-[#07f9c81c] py-10 flex flex-col items-center justify-center ">
                        <h3>Token Name</h3>
                        <p>Tizara Coin</p>
                    </div>
                </div>
                <div className=" border-b border-l border-[#07f9c873]  col-span-6 font-semibold text-2xl">
                    <div className="w-[99%] h-[98%] m-auto rounded shadow-2xl bg-[#07f9c81c] py-10 flex flex-col items-center justify-center ">
                        <h3>Token Symbol</h3>
                        <p>TIZARA</p>
                    </div>
                </div>
                <div className=" border-b border-[#07f9c873]  col-span-6 font-semibold text-2xl">
                    <div className="w-[99%] h-[98%] m-auto rounded shadow-2xl bg-[#07f9c81c] py-10 flex flex-col items-center justify-center ">
                        <h3>Blockchain</h3>
                        <p>Binance</p>
                    </div>
                </div>
                <div className=" border-b border-l border-[#07f9c873]  col-span-6 font-semibold text-2xl">
                    <div className="w-[99%] h-[98%] m-auto rounded shadow-2xl bg-[#07f9c81c] py-10 flex flex-col items-center justify-center ">
                        <h3>Token Type</h3>
                        <p>Utility (BEP-20)</p>
                    </div>
                </div>
                <div className="  border-[#07f9c873]  col-span-6 font-semibold text-2xl">
                    <div className="w-[99%] h-[98%] m-auto rounded shadow-2xl bg-[#07f9c81c] py-10 flex flex-col items-center justify-center ">
                        <h3>Total Supply </h3>
                        <p>15,000,000,000 TIZARA</p>
                    </div>
                </div>
                <div className=" border-l border-[#07f9c873]  col-span-6 font-semibold text-2xl">
                    <div className="w-[99%] h-[98%] m-auto rounded shadow-2xl bg-[#07f9c81c] py-10 flex flex-col items-center justify-center ">
                        <h3>Contract Address</h3>
                        <p className="text-[16px] cursor-pointer hover:text-slate-400 duration-300" onClick={copyToClipboard}>0x0a30F4BC6D57bA1Be0f1ac117de97E6D4889420d</p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default TizaraCoin;