"use client";
import React from "react";

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className=" bottom-0  left-0 h-auto  w-full flex  justify-center items-center flex-col bg-white text-gray-600 py-5 flex flex-wrap justify-between border-t border-gray-200">
            <div className="text-wrapper container sm:w-[90%] w-[85%]  flex justify-start items-center">
                <p>Franchain is a financial technology company, not a bank. Banking services are provided by trusted regulated banking partners including but not limited to JP Morgan, Barclays and Credit Suisse.</p>
            </div>
            <div className=" md:py-8 text-wrapper container sm:w-[90%] w-[85%] flex-col flex justify-start  md:flex-row font-[600]">
                <div className="flex">
                    <a href="#" className="text-gray-600 hover:text-gray-700 px-1 xl:px-12 lg:px-10 py-3 flex  ">Need help?</a>
                    <a href="#" className="text-gray-600 hover:text-gray-700 px-1 xl:px-12 lg:px-10 py-3 flex ">Back to dashboard</a>
                    <a href="#" className="text-gray-600 hover:text-gray-700 px-1 xl:px-12 lg:px-10  py-3 flex ">Terms</a>
                </div>
                <div className="flex">
                    <a href="#" className="text-gray-600 hover:text-gray-700 px-1 xl:px-12 lg:px-10 py-3  flex ">Privacy policy</a>
                    <a href="#" className="text-gray-600 hover:text-gray-700 px-1 xl:px-12 lg:px-10 py-3  flex ">Sign out and continue later</a>
                </div>
            </div>
        </footer>
    )

}

export default Footer;