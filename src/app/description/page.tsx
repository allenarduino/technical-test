import React from "react";
import Image from "next/image";

interface DescriptionProps { }

const Description: React.FC<DescriptionProps> = () => {
    return (
        <main>
            <section className="flex h-full border-green-500 border-2 flex-col items-center justify-center w-full absolute">
                <div className="grid lg:grid-cols-2 grid-cols-1 w-[90%] md:w-[70%] lg:w-[80%] xl:w-[70%] pl-[15px] md:max-w-[1300px]  h-[482px] border-red-500 border-2">
                    <div className="text-wrapper  sm:cols-span-4 flex flex-col text-start justify-center border-green-500 border-2">
                        <p className="font-[500] lg:text-[25px] border-blue-500 border-2 w-[95%]  ">
                            Franchain has helped us collect royalties locally and internationally in a way we never thought was possible
                        </p>

                        <button
                            className="border-[1px] w-[120px] mt-[20px] flex justify-center  bg-blue-500 cursor-pointer text-white border-blue-200 md:px-10 md:py-3  px-5 py-2 rounded-full font-medium">Continue</button>



                    </div>
                    <div className="border-black-500 border-2 relative sm:h-[500px] xl:h-[520px]  h-[400px] cols-span-1 flex items-center lg:justify-end justify-center ">
                        <Image
                            src="/images/description-image.png"
                            width="0"
                            height="0"
                            sizes="100vw"
                            alt="screen-image"
                            className=" absolute lg:w-[80%] rounded-[12.75px]  w-[70%] h-[100%]  min-w-[364px] cols-span-1  "


                        />
                        <div className="bg-custom-gradient2 min-w-[364px] lg:w-[80%] w-[70%] rounded-lg z-10 h-[100px] absolute bottom-0 px-[12px] pb-[12px] flex flex-col justify-end">
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