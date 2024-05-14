import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, zoomIn } from "../utils/motion";

function About({ index }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto p-3">
        <div className="">
          <div className="text-md text-gray-500">
            <h3 className="font-bold text-3xl text-center my-3">About Us</h3>
            <div className="flex flex-row">
              <motion.img
                variants={zoomIn(0.2, 1)} // Using the imported zoomIn animation variant
                initial="hidden"
                animate="show"
                src="https://t3.ftcdn.net/jpg/01/28/44/76/360_F_128447604_6deYSrg6bgH2F3YaoU0icdhvxNu4ReDN.jpg"
                alt="image"
                className="flex-1 w-[200px] h-[200px] rounded-3xl"
              />
              <motion.p
                variants={fadeIn("left", "spring", 0.5 * index, 0.75)} // Using the imported zoomIn animation variant
                initial="hidden"
                animate="show"
                className="p-2 flex-1 justify-center text-center"
              >
                Elaloey Foundry is a social enterprise and venture fund for
                startup ideas and early-stage businesses in Nigeria. We are
                passionate about spotting, nurturing and funding talents,
                innovative ideas and startup businesses with potential to
                transform Nigeria. The fund is earmarked to provide young,
                credible, and innovative entrepreneurs with the requisite
                business coaching, corporate services and funding to launch and
                scale their startups for the greater good of Nigeria.
              </motion.p>
            </div>
          </div>
          <div className="text-md text-gray-500">
            <h3 className="font-bold text-3xl text-center my-3">The problem</h3>
            <div className="flex flex-row">
              <motion.p
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)} // Using the imported zoomIn animation variant
                initial="hidden"
                animate="show"
                className="p-2 flex-1 text-center justify-center"
              >
                Nigeria boasts of the largest active workforce in Africa and the
                world by extension. With about 70% of its population being young
                people with creative minds (156 million), Nigeria is blessed
                with economic asset – a talented and active workforce with the
                capacity for GDP growth and economic development. Sadly, a
                sizeable portion of these talents are not harnessed and the
                business ideas and startups from this active population die
                prematurely due to lack of economic support and infrastructure
                to launch and thrive.
              </motion.p>
              <motion.img
                variants={zoomIn(0.2, 1)} // Using the imported zoomIn animation variant
                initial="hidden"
                animate="show"
                src="https://ravenperformancegroup.com/wp-content/uploads/2019/01/Is-that-really-the-problem.jpg"
                alt="image"
                className="w-[200px] h-[200px] flex-1 rounded-3xl"
              />
            </div>
          </div>
          <div className="text-md text-gray-500">
            <h3 className="font-bold text-3xl text-center my-3">Our mission</h3>
            <div className="flex flex-row">
              <motion.img
                variants={zoomIn(0.2, 1)} // Using the imported zoomIn animation variant
                initial="hidden"
                animate="show"
                src="https://nirmanodisha.org/wp-content/uploads/2020/12/our_mission.jpg"
                alt="image"
                className="flex-1 w-[200px] h-[200px] rounded-3xl object-cover"
              />
              <motion.p
                variants={fadeIn("left", "spring", 0.5 * index, 0.75)} // Using the imported zoomIn animation variant
                initial="hidden"
                animate="show"
                className="p-2 flex-1 text-center justify-center"
              >
                We exist to provide the required 'oxygen' for startup ideas and
                early-stage businesses to launch, thrive and scale. By so doing,
                we are building the next big thing in Nigeria!
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
