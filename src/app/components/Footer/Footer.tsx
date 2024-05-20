"use client";
import React from "react";

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className=" bottom-0  left-0 h-auto  w-full flex  justify-center items-center flex-col bg-white text-gray-600 py-4 flex flex-wrap justify-between border-t border-gray-200">
            <div className="text-wrapper container sm:w-[90%] w-[85%]  flex justify-start items-center">
                <p>Franchain is a financial technology company, not a bank. Banking services are provided by trusted regulated banking partners including but not limited to JP Morgan, Barclays and Credit Suisse.</p>
            </div>
            <div className=" py-8 text-wrapper md:container border-blue-500 border-2 sm:w-[90%] w-[85%] flex-col flex md:flex-row font-[600]">
                <div className="border-red-500 border-2 flex">
                    <a href="#" className="text-gray-600 hover:text-gray-700 px-4 lg:px-10 py-1 flex border-yellow-500 border-[1px] ">Need help?</a>
                    <a href="#" className="text-gray-600 hover:text-gray-700 px-4 lg:px-10 py-1 flex">Back to dashboard</a>
                    <a href="#" className="text-gray-600 hover:text-gray-700 px-4 lg:px-10 py-1">Terms</a>
                </div>
                <div className="border-yellow-500 border-2 flex">
                    <a href="#" className="text-gray-600 hover:text-gray-700 px-4 lg:px-10 py-1 flex">Privacy policy</a>
                    <a href="#" className="text-gray-600 hover:text-gray-700 px-4 lg:px-10 py-1 flex">Sign out and continue later</a>
                </div>
            </div>
        </footer>
    )

}

export default Footer;