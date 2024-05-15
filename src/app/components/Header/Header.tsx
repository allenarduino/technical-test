import React from "react";

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
    return (
        <nav
            className="bg-#D7DAEA md:py-3 md:px-20 sm:py-2 border-b border-gray-200"
        >
            <div className="flex justify-between items-center px-4 py-2">
                <div className="flex items-center">
                    <a href="#" className="text-xl font-medium text-gray-700">
                        FRANCHAIN
                    </a>
                </div>

                <button className="border-2 border-blue-500 px-8 py-2 rounded-full font-medium ">
                    Support
                </button>
            </div>
        </nav>
    );
};

export default Header;
