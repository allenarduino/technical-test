"use client";
import React from "react";
import { usePathname } from 'next/navigation';


interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {

    const hiddenPaths = ["/auth/signup",
        "/auth/login",
        "/auth/checkemail",
        "/auth/confirmation",
        "/auth/passwordreset"
    ];
    const pathname = usePathname();

    if (hiddenPaths.includes(pathname)) {
        return null;
    }


    return (

        <footer className=" bottom-0  left-0 h-auto  w-full flex  justify-center items-center flex-col bg-white text-gray-600 py-5 flex flex-wrap justify-between border-t border-gray-200">
            <div className="text-wrapper xl:max-w-[1300px] sm:w-[90%] w-[85%]  flex justify-start items-center">
                <p>Franchain is a financial technology company, not a bank. Banking services are provided by trusted regulated banking partners including but not limited to JP Morgan, Barclays and Credit Suisse.</p>
            </div>
            <div className="xl:max-w-[1300px] md:py-8 text-wrapper  sm:w-[90%] w-[85%] flex-col flex justify-start  md:flex-row font-[600]">
                <div className="flex">
                    <a href="#" className="text-gray-600 hover:text-gray-700  py-3 flex  ">Need help?</a>
                    <a href="#" className="text-gray-600 hover:text-gray-700 px-2 xl:px-12 lg:px-10 py-3 flex ">Back to dashboard</a>
                    <a href="#" className="text-gray-600 hover:text-gray-700 px-1 xl:px-12 lg:px-10  py-3 flex ">Terms</a>
                </div>
                <div className="flex">
                    <a href="#" className="text-gray-600 hover:text-gray-700 px-1 sm:px-1  xl:px-12 lg:px-10 py-3  flex ">Privacy policy</a>
                    <a href="#" className="text-gray-600 hover:text-gray-700 px-2 sm:px-4 xl:px-12 lg:px-10 py-3  flex ">Sign out and continue later</a>
                </div>
            </div>
        </footer>


    )

}

export default Footer;