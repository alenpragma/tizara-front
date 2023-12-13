"use client"
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
const faqData = [
    {
        question: "What does Tizara specialize in?",
        answer:
            "Tizara specializes in providing bespoke financial solutions, particularly in the dynamic world of cryptocurrency. We focus on empowering our clients to achieve their investment goals through innovative and tailored investment strategies.",
    },
    {
        question: "How does Tizara ensure a secure investment experience?",
        answer:
            "At Tizara, security is a top priority. Our platform employs state-of-the-art encryption and cybersecurity measures to safeguard your digital assets. We follow industry best practices to provide a seamless and secure investment experience.",
    },
    {
        question: "What sets Tizara apart from other investment companies?",
        answer:
            "Tizara stands out due to its commitment to expertise, integrity, and client-centricity. Our team of professionals is dedicated to understanding and meeting the unique needs of our clients. We pride ourselves on offering innovative solutions and staying ahead in the fast-evolving crypto landscape.",
    },
    {
        question: "What types of financial solutions does Tizara offer",
        answer:
            "Tizara specializes in a wide range of financial solutions, with a particular focus on crypto investments. Our services include portfolio management, risk assessment, and personalized investment strategies to help clients navigate the complexities of the financial markets",
    },
    {
        question: "How can I get started with Tizara?",
        answer:
            "Getting started with Tizara is easy. Simply visit our website and explore the registration process. Once registered, you can access our platform, explore investment options, and get personalized guidance from our experts to kickstart your investment journey.",
    },
    {
        question: "Does Tizara provide educational resources for investors new to cryptocurrency?",
        answer:
            "Yes, Tizara is committed to education. We offer a variety of resources, including articles, tutorials, and webinars, to help investors understand the intricacies of cryptocurrency investments. Our goal is to empower clients with knowledge to make informed investment decisions.",
    },
    {
        question: "How often does Tizara update its investment strategies?",
        answer:
            "Tizara continuously monitors market trends and adjusts its investment strategies accordingly. Our team of experts conducts regular reviews to ensure that our clients are well-positioned to capitalize on emerging opportunities and navigate market challenges.",
    },
    {
        question: "Can I trust Tizara with my financial information?",
        answer:
            "Absolutely. Tizara places the highest priority on client data security and confidentiality. We adhere to strict privacy policies and utilize advanced encryption methods to safeguard your financial information. Your trust and privacy are paramount to us.",
    },
    {
        question: "What customer support options are available at Tizara?",
        answer:
            "Tizara provides multiple customer support channels, including live chat, email, and a dedicated helpline. Our support team is ready to assist you with any inquiries, technical issues, or guidance you may need throughout your investment journey.",
    },
    {
        question: "Does Tizara have a minimum investment requirement?",
        answer:
            "Tizara understands that every investor is unique. While we may have certain investment products with minimum requirements, we strive to accommodate a range of investors with different budgets. Visit our platform or contact our team for specific details tailored to your needs.",
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <div className="py-[50px] md:py-[80px] " id="faq">
            <div className="mt-10 flex flex-col gap-y-3 md:flex-row md:gap-x-3">
                <div className="w-full md:w-[49%]">
                    <img src="https://i.postimg.cc/SK6JHVpk/FAQ-Image-01.png" alt="" className="rounded"/>
                </div>
                <div className="w-full md:w-[49%] flex flex-col justify-center">
                    <h4 className="text-[18px] md:text-[23px] mb-10 text-main-black font-bold">
                        Frequently Asked Question
                    </h4>
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="border rounded-md mb-4 overflow-hidden text-black"
                            style={{ backgroundColor: "#07F9C8" }}
                        >
                            <div
                                className="flex items-center justify-between p-4 cursor-pointer"
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="flex items-center">
                                    <div className="mr-4">
                                        {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                                    </div>
                                    <div className="font-semibold">{item.question}</div>
                                </div>
                            </div>
                            {openIndex === index && (
                                <div
                                    className="p-4 bg-transparent"
                                    style={{ backgroundColor: "transparent" }}
                                >
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
