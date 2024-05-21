import { useState } from "react";
import OurTeam from "../components/OurTeam";

const Menu = [
  { id: 1, title: "Who We Are" },
  { id: 2, title: "Corporate Essence" },
];

function About() {
  const [content, setContent] = useState(1);

  const handleClick = (index) => setContent(index);
  const isActive = (index) => content === index;

  return (
    <>
      <div className="bg-cover h-[100px] sm:h-[200px] flex items-center justify-center bg-[url('https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg')]">
        <h1 className="text-white font-extrabold text-6xl font-Oswald">
          About Us
        </h1>
      </div>
      <div className="flex flex-wrap rounded-lg py-2 my-5 gap-5 p-1 ml-5 max-w-6xl mx-auto">
        {Menu.map((item) => (
          <div
            key={item.id}
            className="border border-green-400 rounded-lg shadow-md w-34 p-2 cursor-pointer mix-blend-normal hover:scale-110 duration-500 text-center bg-gray-600 text-white"
          >
            <button
              onClick={() => handleClick(item.id)}
              className={`${
                isActive(item.id)
                  ? "bg-green-300 px-2 py-1 rounded-md text-white"
                  : ""
              }`}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto my-5 mb-10">
        {Menu.filter((item) => item.id === content).map((item) => (
          <div key={item.id} className="p-2 panel active">
            {item.id === 1 && (
              <>
                <WhoWeAre />
                <Affiliation />
              </>
            )}
            {item.id === 2 && (
              <>
                <Challenge />
                <VisionMission />
              </>
            )}
          </div>
        ))}
      </div>
      <OurTeam />
    </>
  );
}

const WhoWeAre = () => (
  <div className="flex flex-col md:flex-row gap-5 md:items-start items-center justify-center mt-2">
    <img
      src="https://t3.ftcdn.net/jpg/01/28/44/76/360_F_128447604_6deYSrg6bgH2F3YaoU0icdhvxNu4ReDN.jpg"
      alt="Image"
      className="w-[250px] md:w-[400px] h-[200px] shadow-xl rounded-xl"
    />
    <div>
      <p className="text-center font-bold text-[30px] font-Oswald text-green-600">
        Who We Are
      </p>
      <p className="py-4 font-montserrat text-gray-300">
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
  <div className="flex flex-col md:flex-row gap-5 md:items-start items-center justify-center mt-2">
    <div>
      <p className="text-center font-bold text-[30px] font-Oswald text-green-600">
        Affiliation
      </p>
      <p className="py-4 font-montserrat text-gray-300">
        Elaloey Foundry is a brainchild of the De Elaloey Brothers Company; an
        enterprise formation and investment company aimed at investing in people
        and transforming lives. De Elaloey Brothers operates with three
        strategic expressions - companies' formation, investments, and
        partnerships.
      </p>
    </div>
    <img
      src="https://www.psychologs.com/wp-content/uploads/2024/01/the-psychology-behind-need-for-affiliation.jpg"
      alt="Image"
      className="w-[250px] md:w-[400px] h-[200px] shadow-xl rounded-xl"
    />
  </div>
);

const Challenge = () => (
  <div className="flex flex-col md:flex-row gap-5 md:items-start items-center justify-center mt-2">
    <img
      src="https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2023/08/Problems.jpg?ssl=1"
      alt="Image"
      className="w-[250px] md:w-[400px] h-[200px] shadow-xl rounded-xl"
    />
    <div>
      <p className="text-center font-bold text-[30px] font-Oswald text-green-600">
        The Challenge
      </p>
      <p className="py-4 font-montserrat text-gray-300">
        Nigeria boasts of the largest active workforce in Africa and the world
        by extension. With about 70% of its population being young people with
        creative minds (156 million), Nigeria is blessed with economic asset – a
        talented and active workforce with the capacity for GDP growth and
        economic development. Sadly, a sizeable portion of these talents are not
        harnessed and the business ideas and startups from this active
        population die prematurely due to lack of economic support and
        infrastructure to launch and thrive.
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
        <h4 className="text-2xl font-bold mb-1 font-Ubuntu text-green-600">
          Our Vision
        </h4>
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
        <h4 className="text-2xl font-bold mb-1 font-Ubuntu text-green-600">
          Our Mission
        </h4>
        <p>
          We exist to provide the required 'oxygen' for startup ideas and
          early-stage businesses to launch, scale, and thrive in Nigeria.
        </p>
      </div>
    </div>
  </div>
);

export default About;
