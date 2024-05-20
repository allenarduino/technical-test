'use client'
import Header from "./components/Header/Header";
import SelectCard from "./components/SelectCard/SelectCard";
import Signup from "../app/auth/signup/page";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col ">
      <section className="  lg:mt-[200px] mt-[120px] w-full text-wrapper flex flex-col justify-center items-center">
        <div className=" sm:w-full w-full flex sm:items-center justify-center ">
          <h2 className="font-[400] font-sans text-[20px] font-medium   leading-loose">What's your goal with Franchain?</h2>
        </div>
        <div className="sm:w-full w-1/2 min-w-[300px] flex justify-center ">
          <p className="text-wrapper text-gray-500 leading-loose ">No wrong answers here. And it doesn't matter if you change your mind later.</p>
        </div>
      </section>

      <section className="pt-[80px] sm:w-full flex flex-col items-center mb-[120px] w-full ">
        <div className="max-w-[1300px] sm:container w-[100%] xl:w-[65%] w-full sm:w-[85%] grid  lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-2 grid-cols-1 sm:gap-5">
          <SelectCard />
          <SelectCard />
          <SelectCard />
          <SelectCard />
          <SelectCard />
          <SelectCard />
        </div>
      </section>
    </main>

  )
}
