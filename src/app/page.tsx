import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SelectCard from "./components/SelectCard/SelectCard";
import Signup from "../app/auth/signup/page";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="py-7 w-full text-wrapper flex flex-col justify-center items-center border-red-500 border-2">
        <div className="border-black-500 border-2 sm:w-full w-full flex sm:items-center sm:justify-center ">
          <h2 className="font-[400] font-sans text-[25px] font-medium border-blue-500 border-2  leading-loose">What's your goal with Franchain?</h2>
        </div>
        <div className="sm:w-1/2 flex justify-center  border-yellow-500 border-2">
          <p className="text-gray-500 leading-loose border-blue-500 border-2">No wrong answers here. And it doesn't matter if you change your mind later.</p>
        </div>
      </section>

      <section className="sm:w-full flex flex-col items-center mb-[150px] w-full ">
        <div className=" sm:container w-[100%] sm:w-[90%] w-full sm:w-[85%] grid  lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-2 grid-cols-1 sm:gap-5">
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
