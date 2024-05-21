'use client';
import React from 'react';
import Image from 'next/image';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <>
      <div className=' md:w-full min-h-[100vh] grid lg:grid-cols-2 grid-cols-1 lg:gap-12 relative'>
        <div
          className='h-full w-full xl:flex lg:block justify-center lg:justify-end hidden'
          style={{
            background: '#f0f0f0',
            backgroundImage:
              'linear-gradient(146.36deg, #DFEAF0 7.24%, #D5E4EA 57.18%, #F4E7F4 98.87%)',
            backgroundPosition: '100% 100%',
            backgroundRepeat: 'no-repeat',
            borderRadius: '5px',
          }}
        >
          <div className=' md:w-[90%] md:h-full px-[30px] py-[30px]'>
            <div className='flex flex-col items-center justify-center h-[100%] w-full '>
              <Image
                src='/images/Sign up screen SVG.svg'
                width='0'
                height='0'
                alt='screen-image'
                className=' w-[60%] min-w-[350px]'
              />

              <div className='text-wrapper w-[65%] min-w-[350px] flex text-center'>
                <p className='font-medium text-[35px]'>
                  Royalty collections, simplified. It's next level!
                </p>
              </div>

              <div className='text-wrapper w-[60%] min-w-[250px] px-[20px] flex text-center '>
                <p className='font-[500] text-[18px]'>
                  Revenue based invoice collection to make royalty collection as
                  easy as...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='md:h-full w-[100%]  flex xl:justify-start py-24 justify-center'>
          <div className=' lg:w-[90%] flex flex-col py-5 md:justify-center w-[90%] max-w-[600px] h-full lg:max-w-[650px]'>
            <div>
              <div className='text-wrapper w-[100%] min-w-[350px] flex justify-start'>
                <p className='font-medium lg:text-[30px]'>Login to Franchain</p>
              </div>
            </div>
            <form>
              <p className='py-4'>Email</p>
              <input
                type='email'
                className='w-full  rounded-md border-[1px] border-gray-300 py-4 pl-3 text-gray-500 text-[20px] transition hover:bg-opacity-90'
              />
              <p className='py-4'>Password</p>
              <input
                type='password'
                className='w-full  rounded-md border-[1px] border-gray-300 py-4 pl-3 text-gray-500 text-[20px] transition hover:bg-opacity-90'
              />

              <div className='py-4'>
                <input
                  type='submit'
                  value='Login'
                  className='border-[1px] bg-custom-blue cursor-pointer text-white  md:px-10 md:py-3  px-5 py-2 rounded-full font-medium'
                />
              </div>

              <div className='text-wrapper text-[13px] py-5'>
                Forgot your password?{' '}
                <a href='#' className='underline'>
                  click here to reset
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
