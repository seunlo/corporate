// import React from "react";
// import { motion } from "framer-motion";
// import { fadeIn, slideIn, zoomIn } from "../utils/motion";

// function About({ index }) {
//   return (
//     <>
// <div className="">
//   <div className="bg-gradient-to-tl from-beige-700 to-white-500 relative">
//     <img
//       src="https://i.pinimg.com/736x/2e/a0/89/2ea0890014d0e4b78c59abdff3529e7a.jpg"
//       alt="image"
//       className="w-full h-[300px] object-cover absolute"
//     />
//     <h1 className="text-center font-extrabold md:text-5xl text-[45px] text-gray-500 absolute top-[100px] left-[450px]">
//       About Us
//     </h1>
//   </div>
// </div>
//       <div className="my-5 flex gap-10">
//         <div class="border border-gray-400 rounded-lg shadow-xl w-36 hover:font-bold p-4 hover:bg-gray-200 cursor-pointer mix-blend-normal hover:scale-[1.20] duration-500">
//           <p className="">Who We Are</p>
//         </div>
//         <div class="border border-gray-400 rounded-lg shadow-xl w-36 hover:font-bold p-4 hover:bg-gray-200 cursor-pointer mix-blend-normal hover:scale-[1.20] duration-500">
//           <p className="">Our Mission</p>
//         </div>
//         <div class="border border-gray-400 rounded-lg shadow-xl w-36 hover:font-bold p-4 hover:bg-gray-200 cursor-pointer mix-blend-normal hover:scale-[1.20] duration-500">
//           <p className="">The Problem</p>
//         </div>
//       </div>
//     </>

//     // <div className="min-h-screen flex items-center justify-center">
//     //   <div className="max-w-6xl mx-auto p-3">
//     //     <div className="">
//     //       <div className="text-md text-gray-500">
//     //         <h3 className="font-bold text-3xl text-center my-3">About Us</h3>
//     //         <div className="flex flex-row">
//     //           <motion.img
//     //             variants={zoomIn(0.2, 1)} // Using the imported zoomIn animation variant
//     //             initial="hidden"
//     //             animate="show"
//     //             src="https://t3.ftcdn.net/jpg/01/28/44/76/360_F_128447604_6deYSrg6bgH2F3YaoU0icdhvxNu4ReDN.jpg"
//     //             alt="image"
//     //             className="flex-1 w-[200px] h-[200px] rounded-3xl"
//     //           />
//     //           <motion.p
//     //             variants={fadeIn("left", "spring", 0.5 * index, 0.75)} // Using the imported zoomIn animation variant
//     //             initial="hidden"
//     //             animate="show"
//     //             className="p-2 flex-1 justify-center text-center"
//     //           >
//     //             Elaloey Foundry is a social enterprise and venture fund for
//     //             startup ideas and early-stage businesses in Nigeria. We are
//     //             passionate about spotting, nurturing and funding talents,
//     //             innovative ideas and startup businesses with potential to
//     //             transform Nigeria. The fund is earmarked to provide young,
//     //             credible, and innovative entrepreneurs with the requisite
//     //             business coaching, corporate services and funding to launch and
//     //             scale their startups for the greater good of Nigeria.
//     //           </motion.p>
//     //         </div>
//     //       </div>
//     //       <div className="text-md text-gray-500">
//     //         <h3 className="font-bold text-3xl text-center my-3">The problem</h3>
//     //         <div className="flex flex-row">
//     //           <motion.p
//     //             variants={fadeIn("right", "spring", 0.5 * index, 0.75)} // Using the imported zoomIn animation variant
//     //             initial="hidden"
//     //             animate="show"
//     //             className="p-2 flex-1 text-center justify-center"
//     //           >
//     //             Nigeria boasts of the largest active workforce in Africa and the
//     //             world by extension. With about 70% of its population being young
//     //             people with creative minds (156 million), Nigeria is blessed
//     //             with economic asset – a talented and active workforce with the
//     //             capacity for GDP growth and economic development. Sadly, a
//     //             sizeable portion of these talents are not harnessed and the
//     //             business ideas and startups from this active population die
//     //             prematurely due to lack of economic support and infrastructure
//     //             to launch and thrive.
//     //           </motion.p>
//     //           <motion.img
//     //             variants={zoomIn(0.2, 1)} // Using the imported zoomIn animation variant
//     //             initial="hidden"
//     //             animate="show"
//     //             src="https://ravenperformancegroup.com/wp-content/uploads/2019/01/Is-that-really-the-problem.jpg"
//     //             alt="image"
//     //             className="w-[200px] h-[200px] flex-1 rounded-3xl"
//     //           />
//     //         </div>
//     //       </div>
//     //       <div className="text-md text-gray-500">
//     //         <h3 className="font-bold text-3xl text-center my-3">Our mission</h3>
//     //         <div className="flex flex-row">
//     //           <motion.img
//     //             variants={zoomIn(0.2, 1)} // Using the imported zoomIn animation variant
//     //             initial="hidden"
//     //             animate="show"
//     //             src="https://nirmanodisha.org/wp-content/uploads/2020/12/our_mission.jpg"
//     //             alt="image"
//     //             className="flex-1 w-[200px] h-[200px] rounded-3xl object-cover"
//     //           />
//     //           <motion.p
//     //             variants={fadeIn("left", "spring", 0.5 * index, 0.75)} // Using the imported zoomIn animation variant
//     //             initial="hidden"
//     //             animate="show"
//     //             className="p-2 flex-1 text-center justify-center"
//     //           >
//     //             We exist to provide the required 'oxygen' for startup ideas and
//     //             early-stage businesses to launch, thrive and scale. By so doing,
//     //             we are building the next big thing in Nigeria!
//     //           </motion.p>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// }

// export default About;

import React, { useState } from "react";
import OurTeam from "../components/OurTeam";

const Menu = [
  {
    id: 1,
    title: "Who We Are",
    image:
      "https://t3.ftcdn.net/jpg/01/28/44/76/360_F_128447604_6deYSrg6bgH2F3YaoU0icdhvxNu4ReDN.jpg",
    content:
      "Elaloey Foundry is a social enterprise and venture fund for startup ideas and early-stage businesses in Nigeria. We are passionate about spotting, nurturing and funding talents, innovative ideas and startup businesses with potential to transform Nigeria. The fund is earmarked to provide young, credible, and innovative entrepreneurs with the requisite business coaching, corporate services and funding to launch and scale their startups for the greater good of Nigeria.",
    color: "",
  },
  {
    id: 2,
    title: "The Problem",
    image:
      "https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2023/08/Problems.jpg?ssl=1",
    content:
      "Nigeria boasts of the largest active workforce in Africa and the world by extension. With about 70% of its population being young people with creative minds (156 million), Nigeria is blessed with economic asset – a talented and active workforce with the capacity for GDP growth and economic development. Sadly, a sizeable portion of these talents are not harnessed and the business ideas and startups from this active population die prematurely due to lack of economic support and infrastructure to launch and thrive.",
    color: "",
  },
  {
    id: 3,
    title: "Our vision",
    image: "https://www.ulutrading.com/upload/galeri/our-vision.png",
    content:
      "To see Nigeria become a destination of choice and prosperity for young people and startups.",
    color: "",
  },
  {
    id: 4,
    title: "Our Mission",
    image:
      "https://www.energyquestmagazine.com/wp-content/uploads/2017/02/mission.jpg",
    content:
      "We exist to provide the required 'oxygen' for startup ideas and early-stage businesses to launch, thrive and scale. By so doing, we are building the next big thing in Nigeria!",
    color: "",
  },
  {
    id: 5,
    title: "Affiliation",
    image:
      "https://www.psychologs.com/wp-content/uploads/2024/01/the-psychology-behind-need-for-affiliation.jpg",
    content:
      "Elaloey Foundry is a brainchild of the De Elaloey Brothers Company; an enterprise formation and investment company aimed at investing in people and transforming lives. De Elaloey Brothers operates with three strategic expressions - companies’ formation, investments and partnerships.",
    color: "",
  },
];

function About() {
  const [content, setContent] = useState(1);
  const handleClick = (index) => setContent(index);
  const checkContent = (index, className) =>
    content === index ? className : "";
  return (
    <>
      <div className="bg-cover h-[100px] md:h-[300px] flex items-center justify-center bg-[url('https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg')]">
        <h1 className="text-white font-extrabold text-6xl font-Oswald">
          About Us
        </h1>
      </div>
      <div className=" flex flex-wrap rounded-lg py-2 my-5 gap-5 p-1 max-w-6xl mx-auto">
        {Menu.map((item) => (
          <div class="border border-gray-400 rounded-lg shadow-xl w-36 hover:font-bold p-2 cursor-pointer mix-blend-normal hover:scale-[1.20] duration-500 hover:w-[100px] text-center">
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`${checkContent(
                item.id,
                "bg-white px-2 py-1 rounded-md text-indigo-600"
              )}`}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto my-5 mb-10">
        {Menu.map((item) => (
          <div
            key={item.id}
            className={`${item.color} p-2 panel ${checkContent(
              item.id,
              "active"
            )}`}
          >
            <div className="flex gap-5">
              <img
                src={`${item.image}`}
                alt="image"
                className="w-[250px] md:w-[400px] h-[200px] shadow-xl rounded-xl"
              />
              <div className="">
                <div className="text-center font-bold text-[38px] font-Oswald text-red-500">
                  {item.title}
                </div>
                <div className="py-4 font-montserrat">{item.content}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <OurTeam/>
    </>
  );
}

export default About;
