import React from "react";
import "../../../src/app/globals.css";
import Image from "next/image";


interface SignupProps { }

const Signup: React.FC<SignupProps> = () => {
    return (
        <>
            <div className="fixed md:w-full min-h-[100vh] md:grid md:grid-cols-2 relative">
                <div
                    style={{
                        background: '#f0f0f0',
                        backgroundImage: 'linear-gradient(146.36deg, #DFEAF0 7.24%, #D5E4EA 57.18%, #F4E7F4 98.87%)',
                        backgroundPosition: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '5px',
                    }}
                ></div>
                <div>Content</div>
                <div className="absolute  w-full h-full flex justify-center items-center">

                    <div className=" w-3/4 h-full grid md:grid-cols-2 border-red-500 border-2">
                        <div
                            className="px-10 py-5"
                            style={{
                                background: '#f0f0f0',
                                backgroundImage: 'linear-gradient(146.36deg, #DFEAF0 7.24%, #D5E4EA 57.18%, #F4E7F4 98.87%)',
                                backgroundPosition: '100% 100%',
                                backgroundRepeat: 'no-repeat',
                                borderRadius: '5px',
                            }}
                        >
                            <Image
                                src="/images/Group 11303.png"
                                width="25"
                                height="25"
                                alt="logo"
                            />

                            <div className="flex flex-col items-center justify-center h-[90%] w-full border-green-500 border-2">
                                <Image
                                    src="/images/Sign up screen SVG.svg"
                                    width="0"
                                    height="0"
                                    alt="screen-image"
                                    className=" w-[70%] border-yellow-500 border-2 min-w-[350px]"
                                />

                                <div className="text-wrapper w-[65%] min-w-[350px] flex text-center border-blue-500 border-2">
                                    <p className="font-medium text-[30px]">Royalty collections, simplified. It's next level!</p>
                                </div>

                                <div className="text-wrapper w-[60%] min-w-[250px] flex text-center border-blue-500 border-2">
                                    <p className="font-[500] text-[18px]">Revenue based invoice collection to make royalty collection as easy as...</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            Sign up form
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}
export default Signup;