import React from "react";
import LogoText from "./LogoText";
import SupportButton from "./SupportButton";

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
    return (
        <nav
            className=" fixed w-full z-10 bg-white-500 md:py-4 md:px-20 px-10 py-3 border-b border-gray-200  flex justify-between items-center"
        >
            <LogoText />
            <SupportButton />

        </nav>
    );
};

export default Header;
