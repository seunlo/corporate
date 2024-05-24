import { useState } from "react";
import OurTeam from "../components/OurTeam";

function About() {
  const [content, setContent] = useState(1);

  return (
    <>
      <div className="bg-cover h-[100px] sm:h-[200px] flex items-center justify-center bg-[url('https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg')]">
        <h1 className="text-white font-extrabold text-6xl font-Oswald">
          About Us
        </h1>
      </div>
      <div className="max-w-6xl mx-auto my-5 mb-10">
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
  <div className="flex flex-col md:flex-row gap-5 md:items-start items-center justify-center mt-2">
    <div>
      <h3 className="text-xl font-extrabold text-limeGreen font-Ubuntu md:text-2xl text-center">
        Who We Are
      </h3>
      <p className="py-4 font-montserrat text-[14px] text-white">
        Elaloey Foundry is a social enterprise and venture fund for startup
        ideas and early-stage businesses in Nigeria. We are passionate about
        spotting, incubating, and funding innovative ideas and startup
        businesses with potential to transform Nigeria. The fund is earmarked to
        provide young, credible, and innovative entrepreneurs with the requisite
        business coaching, corporate services, and funding to launch and scale
        their startups for the greater good of Nigeria.
      </p>
    </div>
  </div>
);

const Affiliation = () => (
  <div className="flex flex-col md:flex-row gap-5 md:items-start items-center justify-center mt-5">
    <div>
      <h3 className="text-xl font-extrabold text-limeGreen font-Ubuntu md:text-2xl text-center">
        Affiliation
      </h3>
      <p className="py-4 font-montserrat text-white text-[14px]">
        Elaloey Foundry is a brainchild of the De Elaloey Brothers Company; an
        enterprise formation and investment company aimed at investing in people
        and transforming lives. De Elaloey Brothers operates with three
        strategic expressions - companies' formation, investments, and
        partnerships.
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
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-xl font-extrabold text-limeGreen font-Ubuntu md:text-2xl">
          Our Vision
        </h3>
        <p>
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
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-xl font-extrabold text-limeGreen font-Ubuntu md:text-2xl">
          Our Mission
        </h3>
        <p>
          We exist to provide the required <b>oxygen</b> for startup ideas and
          early-stage businesses to launch, scale, and thrive in Nigeria.
        </p>
      </div>
    </div>
  </div>
);

export default About;
