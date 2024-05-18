import React from "react";
import Image from "next/image";

interface DescriptionProps { }

const Description: React.FC<DescriptionProps> = () => {
    return (
        <main>
            <section className="flex h-full border-green-500 border-2 flex-col items-center justify-center w-full absolute">
                <div className="grid sm:grid-cols-2 w-[65%] pl-[15px] max-w-[1300px] h-[500px] border-red-500 border-2">
                    <div className="text-wrapper  cols-span-3 flex flex-col text-start justify-center border-green-500 border-2">
                        <p className="font-[400] lg:text-[20px] border-blue-500 border-2 w-[80%]  ">
                            Franchain has helped us collect royalties locally and internationally in a way we never thought was possible
                        </p>

                        <button
                            className="border-[1px] w-[120px] mt-[20px] flex justify-center  bg-blue-500 cursor-pointer text-white border-blue-200 md:px-10 md:py-3  px-5 py-2 rounded-full font-medium">Continue</button>



                    </div>
                    <div className="border-yellow-500 relative cols-span-1 flex items-center justify-end ">
                        <Image
                            src="/images/description-image.png"
                            width="0"
                            height="0"
                            sizes="100vw"
                            alt="screen-image"
                            className="w-[80%] h-[100%] absolute rounded-[12.75px] min-w-[350px]"
                            objectFit="cover"

                        />
                        <div className="bg-custom-gradient2 min-w-[350px] rounded-lg z-10 h-[100px] w-[80%] absolute bottom-0 px-[12px] pb-[12px] flex flex-col justify-end">
                            <p className="text-white font-[500]">Alexandra Miller</p>
                            <p className="text-white font-[500]">Founder @ EL&N London</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Description;