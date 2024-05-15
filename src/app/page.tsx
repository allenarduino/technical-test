import Header from "./components/Header/Header";

export default function Home() {
  return (
    <main>
      <Header />

      <div className="flex justify-between items-center px-10 py-6 bg-white border-red-500 border-2">
        <div className="w-1/6 pl-8 border-blue  border-2 flex justify-start">
          <button className=" rounded-full px-7 py-2 border-2 border-blue-500 font-medium">Back</button>
        </div>
        <div className="text-wrapper flex flex-col items-center w-full border-green-500 border-2">
          <div className=" w-1/2 border-red border-2 flex justify-start">
            <h2 className="font-medium font-sans text-4xl font-medium leading-loose">What's your goal with Franchain?</h2>
          </div>
          <div className="w-1/2 border-blue-500 border-2 justify-start">
            <p className="text-gray-500 leading-loose">No wrong answers here. And it doesn't matter if you change your mind later.</p>
          </div>

        </div>
      </div>

    </main>
  );
}
