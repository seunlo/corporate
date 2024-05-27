import { useState } from "react";
import OurTeam from "../components/OurTeam";
import { about } from "../assets/images";

function About() {
  const [content, setContent] = useState(1);

  return (
    <>
      <div className="relative h-[150px] md:h-[200px] lg:h-[300px] overflow-hidden">
        <img
          src={about}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="max-w-6xl mx-auto my-5 mb-10 font-montserrat">
        <div key={1} className="p-2 panel active">
          <WhoWeAre />
          <Affiliation />
          <VisionMission />
        </div>
      </div>
      <OurTeam />
    </>
  );
}

const WhoWeAre = () => (
  <div className="flex flex-col md:flex-row gap-3 md:items-start items-center justify-center mt-2 p-4">
    <div>
      <h3 className="text-xl font-extrabold text-limeGreen md:text-2xl sm:text-center">
        Who We Are
      </h3>
      <p className="py-3 text-[14px] text-white text-justify">
        Elaloey Foundry is a social enterprise and venture fund for startup
        ideas and early-stage businesses in Nigeria. We are passionate about
        spotting, incubating and funding innovative ideas and startup businesses
        with potential to transform Nigeria. The fund is earmarked to provide
        young, credible and innovative entrepreneurs with the requisite
        coaching, corporate services and capital to launch and scale their
        startups for the greater good of Nigeria. At the core of our existence
        lies the desire to see dreams live, impact young people and transform
        the nation. We do this by providing the oxygen and enabling environment
        for talents, ideas and startups.
      </p>
    </div>
  </div>
);

const Affiliation = () => (
  <div className="flex flex-col md:flex-row gap-3 md:items-start items-center justify-center p-4">
    <div>
    <h3 className="text-xl font-extrabold text-limeGreen md:text-2xl sm:text-center">
        Affiliation
      </h3>
      <p className="py-3 text-white text-[14px] text-justify">
        Elaloey Foundry is a brainchild of the De Elaloey Brothers Company; an
        enterprise formation and investment company aimed at investing in people
        and businesses thereby transforming lives. De Elaloey Brothers operates
        with three strategic expressions - companies’ formation, venture
        investments and strategic partnerships.
      </p>
    </div>
  </div>
);

const VisionMission = () => (
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-5 p-2 text-black">
    <div className="flex flex-1 bg-gray-300 p-2 rounded-3xl md:rounded-full gap-3 flex-col md:flex-row items-center justify-center">
      <div className="bg-white w-[130px] h-[130px] rounded-full relative flex-shrink-0">
        <img
          src="https://faclproperties.com/wp-content/uploads/2020/12/ourvision.svg"
          alt="Our Vision Image"
          className="absolute top-5 left-5 object-contain"
        />
      </div>
      <div className="flex-1 text-center md:text-left font-montserrat">
      <h3 className="text-lg font-bold md:text-xl">
          Our Vision
        </h3>
        <p className="text-[14px]">
          To see Nigeria become a destination of choice and prosperity for
          startups and young people.
        </p>
      </div>
    </div>
    <div className="flex flex-1 bg-gray-300 p-2 rounded-3xl md:rounded-full gap-3 flex-col md:flex-row items-center justify-center">
      <div className="bg-white w-[130px] h-[130px] rounded-full relative flex-shrink-0">
        <img
          src="https://faclproperties.com/wp-content/uploads/2020/12/ourmission.svg"
          alt="Our Mission Image"
          className="absolute top-5 left-5 object-contain"
        />
      </div>
      <div className="flex-1 text-center md:text-left font-montserrat">
        <h3 className="text-lg font-bold md:text-xl">
          Our Mission
        </h3>
        <p className="text-[14px]">
          We exist to provide the required <b>oxygen</b> for startup ideas and
          early-stage businesses to launch, scale, and thrive in Nigeria.
        </p>
      </div>
    </div>
  </div>
);

export default About;
