"use client";
import React from "react";

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="bg-white text-gray-600 py-4 flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 px-4 flex justify-start items-center">
                <p>Franchain is a financial technology company, not a bank. Banking services are provided by trusted regulated banking partners including but not limited to JP Morgan, Barclays and Credit Suisse.</p>
            </div>
            <div className="w-full md:w-1/2 px-4 flex justify-end items-center">
                <a href="#" className="text-gray-600 hover:text-gray-700 px-2 py-1">Need help?</a>
                <a href="#" className="text-gray-600 hover:text-gray-700 px-2 py-1">Back to dashboard</a>
                <a href="#" className="text-gray-600 hover:text-gray-700 px-2 py-1">Terms</a>
                <a href="#" className="text-gray-600 hover:text-gray-700 px-2 py-1">Privacy policy</a>
                <a href="#" className="text-gray-600 hover:text-gray-700 px-2 py-1">Sign out and continue later</a>
            </div>
        </footer>
    )

}

export default Footer;