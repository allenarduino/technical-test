import React from "react";
import "../../../src/app/globals.css";
import Image from "next/image";


interface CheckEmailProps { }

const CheckEmail: React.FC<CheckEmailProps> = () => {
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
                    className="h-full w-full xl:flex lg:block justify-center lg:justify-end hidden"
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

                            <div className="text-wrapper w-[60%] min-w-[250px] px-[20px] flex text-center ">
                                <p className="font-[500] text-[18px]">Revenue based invoice collection to make royalty collection as easy as...</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="md:h-full w-[100%]  flex xl:justify-start py-24 justify-center">
                    <div className=" lg:w-[90%] flex flex-col  py-5 md:justify-center w-[90%] max-w-[600px] h-full lg:max-w-[650px]">
                        <div>
                            <div className="text-wrapper w-[100%] min-w-[350px] flex justify-start">
                                <p className="font-medium lg:text-[30px]">Check your email</p>
                            </div>
                            <div className="text-wrapper w-[95%]  flex text-start">
                                <p className="font-[300] lg:text-[18px] ">Thanks! If {"{email}"} matches an email address we have on file, then we've sent you an email containing further instructions for resetting your password.
                                </p>
                            </div>

                            <div className="text-wrapper w-[95%] flex text-start pt-4">
                                <p className="font-[300] lg:text-[18px] ">If you haven't received an email in 5 minutes, check your spam resend or try a different email address.</p>
                            </div>

                        </div>

                    </div>
                </div>



            </div>





        </>
    )
}
export default CheckEmail;