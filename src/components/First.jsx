import React from "react";

function First() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-5 p-2 text-black">
      <div className="flex flex-1 bg-gray-300 p-4 rounded-md md:rounded-md md:w-1/2 items-center justify-center">
        <div className="flex flex-col text-center">
          <h3 className="text-xl font-extrabold text-limeGreen font-Ubuntu md:text-2xl">
            The Challenge
          </h3>
          <p className="py-4 font-montserrat text-sm md:text-[14px]">
            Nigeria boasts of the largest active workforce in Africa and the
            world by extension. With about 156 million young people, Nigeria is
            blessed with economic asset – a talented active workforce with
            capacity for GDP growth and economic development. Sadly, a sizeable
            portion of this demography are not harnessed, with business ideas
            and startups die prematurely due to lack of economic support and
            conducive environment.
          </p>
        </div>
      </div>
      <div className="flex flex-1 bg-gray-300 p-4 rounded-md md:rounded-md md:w-1/2 items-center justify-center">
        <div className="flex flex-col text-center">
          <h3 className="text-xl font-extrabold text-limeGreen font-Ubuntu md:text-2xl">
            Our Solution
          </h3>
          <p className="py-4 font-montserrat text-sm md:text-[14px]">
            We provide the required oxygen for startup ideas and early-stage
            businesses to launch, thrive and scale.
          </p>
        </div>
      </div>
    </div>
  );
}

export default First;
