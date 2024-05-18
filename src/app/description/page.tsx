import React from "react";
import Image from "next/image";

interface DescriptionProps { }

const Description: React.FC<DescriptionProps> = () => {
    return (
        <main>
            <section className="flex h-full border-green-500 border-2 flex-col items-center justify-center w-full absolute">
                <div className="grid sm:grid-cols-2 w-[65%] pl-[15px] max-w-[1300px] h-[500px] border-red-500 border-2">
                    <div className="text-wrapper  cols-span-3 flex text-start items-center border-green-500 border-2">
                        <p className="font-[400] lg:text-[20px] border-blue-500 border-2 w-[80%] ">
                            Franchain has helped us collect royalties locally and internationally in a way we never thought was possible
                        </p>
                    </div>
                    <div className="border-yellow-500 relative cols-span-1 flex items-center justify-end">
                        <Image
                            src="/images/description-image.png"
                            width="0"
                            height="0"
                            sizes="100vw"
                            alt="screen-image"
                            className="w-[80%] h-[100%] absolute rounded-[12.75px]"
                            objectFit="cover"

                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Description;