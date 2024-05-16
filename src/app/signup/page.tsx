import React from "react";
import "../../../src/app/globals.css";


interface SignupProps { }

const Signup: React.FC<SignupProps> = () => {
    return (<>
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
                        style={{
                            background: '#f0f0f0',
                            backgroundImage: 'linear-gradient(146.36deg, #DFEAF0 7.24%, #D5E4EA 57.18%, #F4E7F4 98.87%)',
                            backgroundPosition: '100% 100%',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '5px',
                        }}
                    > Image</div>
                    <div>Sign up form</div>
                </div>
            </div>

        </div>


    </>)
}
export default Signup;