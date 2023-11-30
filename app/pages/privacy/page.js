
import React from 'react';
import { FaRegDotCircle } from "react-icons/fa";


const page = () => {
    return (
        <div className="max-w-container px-[10px] mx-auto py-[100px]">
            <h2 className='text-6xl my-5 font-semibold'>
                Privacy & Cookie Policy
            </h2>

            <div className='flex flex-col gap-8'>
                <div className='my-8'>
                    <p className='text-[16px]'>
                        This Privacy & Cookie Policy outlines how TIZARA collects, uses, shares, and protects information <br /> obtained from visitors to our website <a href='www.tizara.co' className='text-blue-400'>www.tizara.co</a> and related services. By accessing or using our Site, you agree to the terms outlined in this policy.
                    </p>
                </div>

                <div>
                    <h2 className='text-3xl font-semibold'>
                        Information We Collect
                    </h2>
                    <p>We collect information you provide to us voluntarily, such as:</p>
                    <ul className='ml-10'>
                        <li className='flex gap-3 items-center'><FaRegDotCircle className='text-[14px]' />
                            Personal information (name, email address, contact details) when you register, subscribe, or use our services.
                        </li>
                        <li className='flex gap-3 items-center'><FaRegDotCircle className='text-[14px]' />
                            Information collected through cookies and similar tracking technologies about your usage of our Site.
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-3xl font-semibold'>
                        Use of Information
                    </h2>
                    <p>We may use the collected information for purposes that include, but are not limited to:</p>
                    <ul className='ml-10 flex flex-col gap-3'>
                        <li className='flex gap-3 items-center'><FaRegDotCircle className='text-[14px]' />
                            Providing and improving our services.
                        </li>
                        <li className='flex gap-3 items-center'><FaRegDotCircle className='text-[14px]' />
                            Communicating with you, including responding to inquiries and sending newsletters or promotional materials.
                        </li>
                        <li className='flex gap-3 items-center'><FaRegDotCircle className='text-[14px]' />
                            Analyzing trends, administering the site, and gathering demographic information.
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-3xl font-semibold'>
                        Use of Information
                    </h2>
                    We use cookies and similar tracking technologies to enhance your browsing experience and collect information about your preferences. By using our Site, you consent to the use of cookies as outlined in our Cookie Policy.
                </div>

                <div>
                    <h2 className='text-3xl font-semibold'>
                        Security Measures
                    </h2>
                    We employ industry-standard security measures to safeguard your personal information. However, no method of transmission over the Internet or electronic storage is entirely secure. Thus, while we strive to protect your data, we cannot guarantee absolute security.
                </div>

                <div>
                    <h2 className='text-3xl font-semibold'>
                        Your Rights
                    </h2>
                    You have the right to access, modify, or delete your personal information. If you wish to exercise these rights or have any inquiries regarding your data, please contact us using the information below.
                </div>

                <div>
                    <h2 className='text-3xl font-semibold'>
                        Updates to This Policy
                    </h2>
                    We reserve the right to update or revise this Privacy & Cookie Policy at any time. Changes will be posted on this page, and the revised date will be updated accordingly.
                </div>

            </div>
        </div >
    );
};

export default page;