import React from "react";

function First() {
  return (
    <div className="bg-gradient-to-tl from-beige-700 to-white-500 relative">
      <img
        src="../../public/background.jpg"
        alt="image"
        className="w-full h-[500px] object-cover absolute mix-blend-overlay"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 pt-10 items-center max-w-6xl mx-auto">
        <div className="p-8 gap-8">
          <p className="font-extrabold text-5xl">
            Launch and scale your startup ideas
          </p>
          <p className="font-regular text-[18px] my-5">
            We are building the next big thing by providing startups with the
            <span className="text-red-700 font-bold"> oxygen</span> to launch,
            thrive and scale.
          </p>
          <button className="bg-red-700 text-white p-2 font-medium rounded-tl-2xl rounded-br-2xl">
            Apply Now
          </button>
        </div>
        <div className="">
          <img
            src="https://nirmanodisha.org/wp-content/uploads/2020/12/our_mission.jpg"
            alt="image"
            className="w-full h-[200px] rounded-lg"
          />
        </div>
      </div>
      <div className="max-w-4xl h-[150px] rounded-xl mx-auto flex items-center gap-[80px] justify-evenly bg-red-500 shadow-xl p-2">
        <div className="">
          <h4 className="text-center text-[30px] font-extrabold">25+</h4>
          <p className="text-center text-xs sm:text-[15px]">
            admitted to global
          </p>
          <p className="text-center text-xs sm:text-[15px]">accelerators</p>
        </div>
        <div className="">
          <h4 className="text-center text-[30px] font-extrabold">$1B+</h4>
          <p className="text-center text-xs sm:text-[15px]">
            dollars raised in
          </p>
          <p className="text-center text-xs sm:text-[15px]">
            follow on capital
          </p>
        </div>
        <div className="">
          <h4 className="text-center text-[30px] font-extrabold">75+</h4>
          <p className="text-center text-xs sm:text-[15px]">number of co-</p>
          <p className="text-center text-xs sm:text-[15px]">investors</p>
        </div>
      </div>
    </div>
  );
}

export default First;
