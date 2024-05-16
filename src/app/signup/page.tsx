import React from "react";
import "../../../src/app/globals.css";
import Image from "next/image";


interface SignupProps { }

const Signup: React.FC<SignupProps> = () => {
    return (
        <>
            <div className=" md:w-full min-h-[100vh] grid lg:grid-cols-2 grid-cols-1 lg:gap-12 relative">
                <div className=" absolute w-full flex justify-center">
                    <div className="fixed absolute md:py-4 md:px-20 px-10 py-3 max-w-[1300px]   w-full h-[100px]  flex justify-center items-center">
                        <Image
                            src="/images/Group 11303.png"
                            width="27"
                            height="27"
                            alt="logo"
                        />
                        <div className="w-full cursor-pointer flex justify-end"><span>Log in  &gt;</span></div>
                    </div>
                </div>
                <div
                    className="h-full w-full xl:flex lg:block justify-center lg:justify-end justify-center hidden"
                    style={{
                        background: '#f0f0f0',
                        backgroundImage: 'linear-gradient(146.36deg, #DFEAF0 7.24%, #D5E4EA 57.18%, #F4E7F4 98.87%)',
                        backgroundPosition: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '5px',
                    }}
                >
                    <div className=" md:w-[90%] md:h-full px-[30px] py-[30px]">


                        <div className="flex flex-col items-center justify-center h-[100%] w-full ">
                            <Image
                                src="/images/Sign up screen SVG.svg"
                                width="0"
                                height="0"
                                alt="screen-image"
                                className=" w-[60%] min-w-[350px]"
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

                <div className="md:h-full w-[100%] flex xl:justify-start py-24 justify-center ">
                    <div className=" lg:w-[90%] w-[90%] max-w-[600px] h-full lg:max-w-[650px]">
                        <div>
                            <div className="text-wrapper w-[90%] min-w-[350px] flex text-center px-10 py-3">
                                <p className="font-medium text-[35px]">Get started with Franchain</p>
                            </div>
                            <div className="text-wrapper w-[90%] min-w-[350px] flex text-center px-10 py-3">
                                <p className="font-[300] text-[18px]">Create an account in 5 minutes</p>
                            </div>
                        </div>
                        <form>
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

                            <div className="text-wrapper text-[13px] py-5">
                                By clicking “Start Application“, I agree to Mercury’s <a href="#" className="underline">Terms of Use</a>, <a href="#" className="underline"> Privacy Policy</a> and to receive electronic communication about my accounts and services per <a href="#" className="underline">Mercury’s Electronic Communications Agreement</a>, and acknowledge receipt of <a href="#" className="underline"> Mercury’s USA PATRIOT Act disclosure.</a>
                            </div>


                        </form>
                    </div>
                </div>



            </div>





        </>
    )
}
export default Signup;