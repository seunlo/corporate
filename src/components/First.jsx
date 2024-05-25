import { solution, challenge } from "../assets/images";

function First() {
  return (
    <div
      className="max-w-4xl mx-auto flex flex-col gap-5 p-4 font-montserrat my-8 hover:scale-[1.10] duration-500"
      style={{ color: "#355E3B" }}
    >
      <div className="flex flex-1 bg-gray-200 p-4 items-center justify-center rounded-tl-3xl rounded-br-3xl shadow-xl">
        <div className="flex flex-col text-center">
          <div className="flex flex-col">
            <img
              src={challenge}
              alt="image"
              className="w-10 h-10 object-contain mb-2 mx-auto filter sepia-80"
            />
            <h3 className="text-xl font-extrabold md:text-2xl">
              The Challenge
            </h3>
          </div>
          <p className="py-2 font-montserrat text-sm md:text-[14px]">
            Nigeria boasts of the largest active workforce in Africa, and one of
            the largest in the world by extension. With about 156 million young
            people and growing labour force, Nigeria is indeed blessed with
            human capital & economic asset – a crop of talented active workforce
            with capacity for GDP growth and economic development. Sadly, a
            sizeable portion of this demography are not harnessed as viable
            business ideas and startups die prematurely due to lack of economic
            support and conducive environment.
          </p>
          <div className="flex flex-col mt-5">
            <img
              src={solution}
              alt="image"
              className="w-10 h-10 object-contain mb-2 mx-auto filter sepia-80"
            />
            <h3 className="text-xl font-extrabold md:text-2xl">Our Solution</h3>
          </div>
          <p className="py-2 font-montserrat text-sm md:text-[14px]">
            We provide the required <b>oxygen</b> for talents, startup ideas and
            early-stage businesses to launch, thrive and scale.
          </p>
        </div>
      </div>
    </div>
  );
}

export default First;
