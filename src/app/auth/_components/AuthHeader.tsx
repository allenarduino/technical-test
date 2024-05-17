"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from 'next/navigation';



interface AuthHeaderProps { }

const AuthHeader: React.FC<AuthHeaderProps> = () => {

    const pathname = usePathname();


    // Array of objects mapping routes to their respective texts
    const routeData = [
        { path: '/auth/signup', text: 'Log in', href: '/auth/login' },
        { path: '/auth/login', text: 'Create account', href: '/auth/signup' },
        { path: '/auth/confirmation', text: 'Go back', href: '/auth/login' },
        { path: '/auth/passwordreset', text: 'Return to login', href: '/auth/login' },
        { path: '/auth/checkemail', text: 'Return to login', href: '/auth/login' },
    ];

    // Find the appropriate text based on the current path
    const currentRouteText = routeData.find(route => route.path === pathname)?.text || 'Log in';
    const currentRoute = routeData.find(route => route.path === pathname) || { text: 'Log in >', href: '/login' };



    return (
        <div className=" absolute fixed z-10 w-full flex justify-center">
            <div className="md:py-4 md:px-20 px-10 py-3 max-w-[1300px]  w-full h-[100px]  flex justify-center items-center">
                <Image
                    src="/images/Group 11303.png"
                    width="27"
                    height="27"
                    alt="logo"
                />
                <a href={currentRoute.href} className="w-full cursor-pointer flex justify-end"><span>{currentRouteText}  &gt;</span></a>
            </div>
        </div >


    );
};

export default AuthHeader;
