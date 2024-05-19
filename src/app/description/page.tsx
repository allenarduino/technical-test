import React from "react";
import Image from "next/image";

interface DescriptionProps { }

const Description: React.FC<DescriptionProps> = () => {
    return (
        <main>
            <section className="flex h-full  flex-col items-center  justify-center w-full absolute">
                <div className="grid lg:grid-cols-2 grid-cols-1 w-[90%] gap-4 md:w-[70%] lg:w-[80%] xl:w-[70%] pl-[15px] md:max-w-[1300px]  h-[482px]">
                    <div className="text-wrapper  sm:cols-span-4 flex flex-col lg:text-start text-center justify-center ">
                        <p className="font-[500] lg:text-[28px]  w-[95%]  ">
                            Franchain has helped us collect royalties locally and internationally in a way we never thought was possible
                        </p>

                        <button
                            className="border-[1px] w-[150px] mt-[45px] hidden lg:flex justify-center  bg-custom-blue cursor-pointer text-white border-blue-200 md:px-10 md:py-3  px-5 py-2 rounded-full font-medium">Continue</button>



                    </div>
                    <div className="  relative md:h-[500px] xl:h-[520px] h-[350px] sm:h-[420px] cols-span-1 flex items-center lg:justify-end justify-center ">
                        <Image
                            src="/images/description-image.png"
                            width="0"
                            height="0"
                            sizes="100vw"
                            alt="screen-image"
                            className=" absolute lg:w-[80%] rounded-[12.75px]  w-[70%] h-[100%] min-w-[300px]  lg:max-w-[400px] xl:max-w-[500px] max-w-[364px] cols-span-1  "


                        />
                        <div className="bg-custom-gradient2 min-w-[300px] lg:max-w-[400px] xl:max-w-[500px] max-w-[364px] lg:w-[80%] w-[70%] rounded-lg z-10 h-[100px] absolute bottom-0 px-[12px] pb-[12px] flex flex-col justify-end">
                            <p className="text-white font-[500]">Alexandra Miller</p>
                            <p className="text-white font-[500]">Founder @ EL&N London</p>
                        </div>
                    </div>
                </div>
                <button
                    className="border-[1px] w-[120px] mt-[20px] mt-[100px] absolute bottom-0 lg:hidden flex justify-center  bg-custom-blue cursor-pointer text-white md:px-10 md:py-3  px-5 py-2 rounded-full font-medium">Continue</button>

            </section>



        </main>
    )
}

export default Description;