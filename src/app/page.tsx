import Header from "./components/Header/Header";
import SelectCard from "./components/SelectCard/SelectCard";

export default function Home() {
  return (
    <main>
      <Header />

      <section className=" w-full flex flex-col md:flex md:flex-row md:justify-between items-center px-10 md:py-20 py-6 bg-white">
        <div className="w-full md:w-1/6 md:pl-6   flex justify-start">
          <button className=" rounded-full px-8 py-2 border-[1px] border-blue-500 font-medium">Back</button>
        </div>
        <div className="w-full text-wrapper flex flex-col items-center">
          <div className="w-full md:w-1/2 flex justify-start">
            <h2 className="font-medium font-sans text-4xl font-medium leading-loose">What's your goal with Franchain?</h2>
          </div>
          <div className="w-full md:w-1/2 justify-start">
            <p className="text-gray-500 leading-loose">No wrong answers here. And it doesn't matter if you change your mind later.</p>
          </div>

        </div>
      </section>

      <section className="md:w-full flex flex-col items-center">
        <div className=" container sm:w-[90%] w-[85%] grid md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-5">
          <SelectCard />
          <SelectCard />
          <SelectCard />
          <SelectCard />
          <SelectCard />
          <SelectCard />
        </div>
      </section>



    </main>
  );
}
