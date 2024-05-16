import React from "react";
import "../../../src/app/globals.css";
import Image from "next/image";


interface SignupProps { }

const Signup: React.FC<SignupProps> = () => {
    return (
        <>
            <div className=" md:w-full min-h-[100vh]  md:grid md:grid-cols-2 relative">
                <div
                    className="md:h-full flex justify-end"
                    style={{
                        background: '#f0f0f0',
                        backgroundImage: 'linear-gradient(146.36deg, #DFEAF0 7.24%, #D5E4EA 57.18%, #F4E7F4 98.87%)',
                        backgroundPosition: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '5px',
                    }}
                >
                    <div className=" w-3/4 h-full border-red-500 border-2 md:max-w-[650px]">
                        <Image
                            src="/images/Group 11303.png"
                            width="25"
                            height="25"
                            alt="logo"
                        />

                        <div className="flex flex-col items-center justify-center h-[90%] w-full ">
                            <Image
                                src="/images/Sign up screen SVG.svg"
                                width="0"
                                height="0"
                                alt="screen-image"
                                className=" w-[70%] min-w-[350px]"
                            />

                            <div className="text-wrapper w-[65%] min-w-[350px] flex text-center">
                                <p className="font-medium text-[35px]">Royalty collections, simplified. It's next level!</p>
                            </div>

                            <div className="text-wrapper w-[60%] min-w-[250px] py-[20px] flex text-center ">
                                <p className="font-[500] text-[18px]">Revenue based invoice collection to make royalty collection as easy as...</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="md:h-full flex justify-start">
                    <div className=" w-3/4 h-full border-red-500 border-2 md:max-w-[650px]">
                        <div className="w-full flex justify-end px-[30px] py-[30px]"><span>Login</span></div>
                        <div>
                            <div className="text-wrapper w-[90%] min-w-[350px] flex text-center px-10">
                                <p className="font-medium text-[35px]">Get started with Franchain</p>
                            </div>
                            <div className="text-wrapper w-[90%] min-w-[350px] flex text-center px-10 py-3">
                                <p className="font-[300] text-[18px]">Create an account in 5 minutes</p>
                            </div>
                        </div>
                        <form className="py-10 px-10">
                            <p className="py-4">First name</p>
                            <input type="text"
                                className="w-full cursor-pointer rounded-md border-[1px] border-gray-300 py-4 text-white transition hover:bg-opacity-90"

                            />
                            <p className="py-4">Last name</p>
                            <input type="text"
                                className="w-full cursor-pointer rounded-md border-[1px] border-gray-300 py-4 text-white transition hover:bg-opacity-90"

                            />

                            <p className="py-4">Business name and HQ location</p>
                            <input type="text"
                                className="w-full cursor-pointer rounded-md border-[1px] border-gray-300 py-4 text-white transition hover:bg-opacity-90"

                            />

                            <p className="py-4">Work email</p>
                            <input type="text"
                                className="w-full cursor-pointer rounded-md border-[1px] border-gray-300 py-4 text-white transition hover:bg-opacity-90"

                            />

                            <p className="py-4">Password</p>
                            <input type="text"
                                className="w-full cursor-pointer rounded-md border-[1px] border-gray-300 py-4 text-white transition hover:bg-opacity-90"

                            />

                            <p className="py-4 text-red-500">Password must be at least 12 characters</p>
                            <div className="py-4">
                                <input type="submit"
                                    value="Sign up"
                                    className="border-[1px]  bg-blue-200 cursor-pointer text-white border-blue-200 md:px-10 md:py-3  px-5 py-2 rounded-full font-medium" />

                            </div>
                        </form>
                    </div>
                </div>


            </div>





        </>
    )
}
export default Signup;