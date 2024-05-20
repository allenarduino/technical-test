"use client";
import React from "react";
import Image from "next/image";

interface SelectCardProps { }

const SelectCard: React.FC<SelectCardProps> = () => {
    return (
        <div className=" flex justify-between sm:grid sm:gap-3 sm:place-items-center grid-cols-2 gap-1 sm:grid-cols-3 border-b sm:border-gray-500 sm:border-[1px] px-5 sm:rounded-[20px] sm:py-5 py-3 h-auto">
            <Image
                src="/images/funnel-image.png"
                width="0"
                height="0"
                sizes="100vw"
                className="sm:w-full hidden sm:block   sm:h-auto h-20 w-20 "
                alt="funnel-image"
            />
            <div className="sm:text-wrapper  w-full flex sm:items-center sm:justify-center sm:text-[18px] text-[15px]">Reduce failed payments</div>

            <input type="checkbox" className="sm:h-7 sm:w-7 h-5 w-5 py-2 " />


        </div>
    )
}

export default SelectCard;