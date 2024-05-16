"use client";
import React from "react";
import Image from "next/image";

interface SelectCardProps { }

const SelectCard: React.FC<SelectCardProps> = () => {
    return (
        <div className="grid gap-3 place-items-center sm:grid-cols-3 border-gray-500 border-[1px] rounded-[20px] py-5 h-auto">
            <Image
                src="/images/funnel-image.png"
                width="0"
                height="0"
                sizes="100vw"
                className="sm:w-full sm:h-auto h-20 w-20"
                alt="funnel-image"
            />
            <div className="text-wrapper flex items-center justify-center text-[20px]">Reduce failed payments</div>
            <div className="flex items-center justify-center">
                <input type="checkbox" className="h-7 w-7" />
            </div>
        </div>
    )
}

export default SelectCard;