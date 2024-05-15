"use client"
import React from "react";


const Header = () => {
    return (
        <nav className="bg-#D7DAEA-500 py-3 px-20 border-b ">
            <div className="flex justify-between items-center px-4 py-2">
                <div className="flex items-center">
                    <a href="#" className="text-xl font-medium text-#393948-500">FRANCHAIN</a>
                </div>

                <button className="border-2 border-blue-500 px-8 py-2 rounded-full font-medium ">Support</button>

                <div className="md:hidden">
                    <button id="menu-toggle" className="focus:outline-none">
                        <svg className="h-6 w-6 text-white fill-current" viewBox="0 0 24 24">
                            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zM4 11h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header;