
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
            <div className='w-3/4 mx-auto'>
                <h3 className="text-[25px] md:text-[40px] gradiant-text text-center">
                Tizara Tokenomics
                </h3>
                <p className="text-[14px] md:text-[24px] gradiant-text text-center">
                    Tizara Coin stands at the forefront of innovation, offering users unparalleled opportunities for financial empowerment and growth within the dynamic landscape of decentralized finance
                </p>
            </div>
            <div className="grid grid-cols-12 mt-14">

                <div className=" border-b border-[#07f9c873]  col-span-6 font-semibold">
                    <div className="w-[99%] h-[98%] m-auto rounded shadow-2xl bg-[#07f9c81c] py-10 flex flex-col pl-5 justify-center  duration-300 hover:translate-y-[-4%]">
                        <h3 className='text-[20px]'>Token Name</h3>
                        <p className='text-[16px]'>Tizara Coin</p>
                    </div>
                </div>
                <div className=" border-b border-l border-[#07f9c873]  col-span-6 font-semibold">
                    <div className="w-[99%] h-[98%] m-auto rounded shadow-2xl bg-[#07f9c81c] py-10 flex flex-col  pl-5 justify-center  duration-300 hover:translate-y-[-4%]">
                        <h3 className='text-[20px]'>Token Symbol</h3>
                        <p className='text-[16px]'>TIZARA</p>
                    </div>
                </div>
                <div className=" border-b border-[#07f9c873]  col-span-6 font-semibold overflow-hidden">
                    <div className="w-[99%] h-[98%] m-auto rounded shadow-2xl bg-[#07f9c81c] py-10 flex flex-col  pl-5 justify-center  duration-300 hover:translate-y-[-4%]">
                        <h3 className='text-[20px]'>Blockchain</h3>
                        <p className='text-[16px]'>Binance</p>
                    </div>
                </div>
                <div className=" border-b border-l border-[#07f9c873]  col-span-6 font-semibold overflow-hidden">
                    <div className="w-[99%] h-[98%] m-auto rounded shadow-2xl bg-[#07f9c81c] py-10 flex flex-col  pl-5 justify-center  duration-300 hover:translate-y-[-4%]">
                        <h3 className='text-[20px]'>Token Type</h3>
                        <p className='text-[16px]'>Utility (BEP-20)</p>
                    </div>
                </div>
                <div className="  border-[#07f9c873]  col-span-6 font-semibold">
                    <div className="w-[99%] h-[98%] m-auto rounded shadow-2xl bg-[#07f9c81c] py-10 flex flex-col  pl-5 justify-center  duration-300 hover:translate-y-[4%]">
                        <h3 className='text-[20px]'>Total Supply </h3>
                        <p className='text-[16px]'>15,000,000,000 TIZARA</p>
                    </div>
                </div>
                <div className=" border-l border-[#07f9c873]  col-span-6 font-semibold">
                    <div className="w-[99%] h-[98%] m-auto rounded shadow-2xl bg-[#07f9c81c] py-10 flex flex-col  pl-5 justify-center  duration-300 hover:translate-y-[4%]">
                        <h3 className='text-[20px]'>Contract Address</h3>
                        <p className="md:text-[16px] text-[10px]  duration-300 flex items-center gap-3" >0x0a30F4BC6D57bA1Be0f1ac117de97E6D4889420d <span>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                onClick={copyToClipboard}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6 cursor-pointer">
                                <path stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                            </svg>
                        </span></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default TizaraCoin;