import { solution, challenge } from "../assets/images";

function First() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-5 px-10 font-montserrat my-8 hover:scale-[1.10] duration-500 py-8">
      <div className="flex flex-1 bg-white p-4 items-center justify-center rounded-tl-[50px] rounded-br-[50px] shadow-xl">
        <div className="flex flex-col text-center font-montserrat">
          <div className="flex flex-col">
            <img
              src={challenge}
              alt="image"
              className="w-10 h-10 object-contain mb-2 mx-auto filter sepia-80 rounded-full"
            />
            <h3 className="text-xl font-extrabold md:text-2xl">
              The Challenge
            </h3>
          </div>
          <p className="px-4 text-sm md:text-[13px] text-start sm:text-justify pb-3">
            Nigeria accounts for 30% of the total funding attracted by African
            startups ($15billion) since 2019. (Africa: The Big Deal). This
            underscores the fact that Nigeria continues to be a hub for talents,
            innovation and entrepreneurship in Africa. And with about 65% young
            people of its population and largest active workforce in Africa,
            Nigeria is indeed blessed with human capital & economic asset - a
            talented and vibrant workforce with capacity for GDP growth and
            economic development. Sadly, a significant portion of this
            demography are not harnessed as viable business ideas and startups
            die prematurely due to lack of economic support and conducive
            environment.
          </p>
          <div className="flex flex-col mt-4">
            <img
              src={solution}
              alt="image"
              className="w-10 h-10 object-contain mb-2 mx-auto filter sepia-80 rounded-full"
            />
            <h3 className="text-xl font-extrabold md:text-2xl">Our Solution</h3>
          </div>
          <p className="px-4 text-sm md:text-[13px] text-start sm:text-justify pb-5">
            We provide the required <b>oxygen</b> for startup ideas and
            early-stage businesses to launch, scale and thrive. We spot and
            invest in ideas, talents and dreams that turns out to be sustainable
            businesses and solutions to prevailing challenges of the society. We
            don't just invest; we back and actively support founders and
            entrepreneurs to thrive, leveraging on the combined expertise and
            experience of our team and partners.
          </p>
        </div>
      </div>
    </div>
  );
}

export default First;
