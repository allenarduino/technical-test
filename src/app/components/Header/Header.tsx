"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { routeData } from "@/app/utils/routeData";



interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {

    const pathname = usePathname();




    // Find the appropriate text based on the current path
    const currentRouteText = routeData.find(route => route.path === pathname)?.text || 'Log in';
    const currentRoute = routeData.find(route => route.path === pathname) || { text: 'Log in >', href: '/login' };



    return (
        <div className=" w-full flex justify-center">
            <div className=" absolute md:py-4 md:px-10 px-5 py-3 max-w-[1300px]  w-full h-[100px]  flex justify-center items-center">
                <Image
                    src="/images/Group 11303.png"
                    width="27"
                    height="27"
                    alt="logo"
                    className="z-10"
                />
                <a href={currentRoute.href} className="w-full cursor-pointer flex justify-end"><span>{currentRouteText}  &gt;</span></a>
            </div>
        </div >


    );
};

export default Header;
