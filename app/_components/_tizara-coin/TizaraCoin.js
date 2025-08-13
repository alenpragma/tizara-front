
'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegCopy } from "react-icons/fa";

const TizaraCoin = () => {
    const token = "0xA5329958575BE2eeb6F5bcA5F1af69d9A407E53d"

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
            <div className='w-3/4 mx-auto'>
                <h3 className="text-[25px] md:text-[40px] gradiant-text text-center">
                    Tizara Tokenomics
                </h3>
                <p className="text-[14px] md:text-[24px] gradiant-text text-center">
                    Tizara Coin stands at the forefront of innovation, offering users unparalleled opportunities for financial empowerment and growth within the dynamic landscape of decentralized finance
                </p>
            </div>
            <div className="grid grid-cols-12 mt-14">

                <div className=" border-b border-[#07f9c873]  col-span-6 ">
                    <div className="w-[99%] h-[98%] m-auto rounded shadow-2xl bg-[#07f9c81c] py-10 flex flex-col pl-5 justify-center  duration-300 hover:translate-y-[-4%]">
                        <h3 className='text-[16px] text-[#08CBA4]'>Token Name</h3>
                        <p className='text-[20px]'>Tizara Coin</p>
                    </div>
                </div>
                <div className=" border-b border-l border-[#07f9c873]  col-span-6 ">
                    <div className="w-[99%] h-[98%] m-auto rounded shadow-2xl bg-[#07f9c81c] py-10 flex flex-col  pl-5 justify-center  duration-300 hover:translate-y-[-4%]">
                        <h3 className='text-[16px] text-[#08CBA4]'>Token Symbol</h3>
                        <p className='text-[20px]'>TIZARA</p>
                    </div>
                </div>
                <div className=" border-b border-[#07f9c873]  col-span-6  overflow-hidden">
                    <div className="w-[99%] h-[98%] m-auto rounded shadow-2xl bg-[#07f9c81c] py-10 flex flex-col  pl-5 justify-center  duration-300 hover:translate-y-[-4%]">
                        <h3 className='text-[16px] text-[#08CBA4]'>Blockchain</h3>
                        <p className='text-[20px]'>Binance</p>
                    </div>
                </div>
                <div className=" border-b border-l border-[#07f9c873]  col-span-6  overflow-hidden">
                    <div className="w-[99%] h-[98%] m-auto rounded shadow-2xl bg-[#07f9c81c] py-10 flex flex-col  pl-5 justify-center  duration-300 hover:translate-y-[-4%]">
                        <h3 className='text-[16px] text-[#08CBA4]'>Token Type</h3>
                        <p className='text-[20px]'>Utility (BEP-20)</p>
                    </div>
                </div>
                <div className="  border-[#07f9c873]  col-span-6 ">
                    <div className="w-[99%] h-[98%] m-auto rounded shadow-2xl bg-[#07f9c81c] py-10 flex flex-col  pl-5 justify-center  duration-300 hover:translate-y-[4%]">
                        <h3 className='text-[16px] text-[#08CBA4] '>Total Supply </h3>
                        <p className='text-[20px]'>15,000,000,000 TIZARA</p>
                    </div>
                </div>
                <div className=" border-l border-[#07f9c873]  col-span-6 ">
                    <div className="w-[99%] h-[98%] m-auto rounded shadow-2xl bg-[#07f9c81c] py-10 flex flex-col  pl-5 justify-center  duration-300 hover:translate-y-[4%]">
                        <h3 className='text-[16px] text-[#08CBA4]'>Contract Address</h3>
                        <p className="md:text-[16px] text-[10px]  duration-300 flex items-center gap-3">{token}<span>
                            <FaRegCopy className='text-[18px] hover:text-slate-400 cursor-pointer' onClick={copyToClipboard} />
                        </span></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default TizaraCoin;