import React from "react";
import { FaVideo } from "react-icons/fa6";
import { GrGamepad } from "react-icons/gr";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { RiFundsLine } from "react-icons/ri";
import { AiOutlineDatabase } from "react-icons/ai";

function Second() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-10 items-center max-w-6xl mx-auto gap-5">
      <div className="">
        <img
          src="https://nirmanodisha.org/wp-content/uploads/2020/12/our_mission.jpg"
          alt="image"
        />
      </div>
      <div className="">
        <h2 className="text-6xl font-extrabold text-slate-200">OVERVIEW</h2>
        <div className="p-5 max-w-[590px]">
          <h5 className="font-bold text-[18px] lg:text-[20px]">
            8 weeks. 10 founders. 75+ coinvestors, 2 founder
          </h5>
          <h5 className="font-bold text-[18px] lg:text-[20px]">
            operators. 20+ advisors. 1 goal.
          </h5>
          <p className="mt-6">
            After over a decade of supporting several Africa focused founding
            teams, we have identified five critical areas of support to focus on
            during the program, alongside some of the top experts in these field
          </p>
        </div>
      </div>
      <div className="my-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-[240px]">
        <div class="bg-[#f7f7f7] w-[210px] md:w-[200px] h-[160px] rounded-lg shadow-xl px-2.5 py-5 sm:px-4 sm:py-6 text-center opacity-1 cursor-pointer mix-blend-normal hover:scale-[1.20] duration-500">
          <FaVideo className="w-7 h-7 mx-auto mb-5" />
          <h5 className="mb-3 font-bold">Storytelling</h5>
          <p className="text-xs">
            craft a compelling mission, vision and story of impact
          </p>
        </div>
        <div class="bg-[#f7f7f7] w-[210px] md:w-[200px] h-[160px] rounded-lg shadow-xl px-2.5 py-5 sm:px-4 sm:py-6 text-center opacity-1 cursor-pointer mix-blend-normal hover:scale-[1.20] duration-500">
          <GrGamepad className="w-7 h-7 mx-auto mb-5" />
          <h5 className="mb-3 font-bold">Talent</h5>
          <p className="text-xs">
            assemble, motivate, and lead a high performing team
          </p>
        </div>
        <div class="bg-[#f7f7f7] w-[210px] md:w-[210px] h-[160px] rounded-lg shadow-xl px-2.5 py-5 sm:px-4 sm:py-6 text-center opacity-1 cursor-pointer mix-blend-normal hover:scale-[1.20] duration-500">
          <MdOutlineBusinessCenter className="w-7 h-7 mx-auto mb-5" />
          <h5 className="mb-3 font-bold">Business Development</h5>
          <p className="text-xs">
            find your path to the first million dollars in revenue
          </p>
        </div>
        <div class="bg-[#f7f7f7] w-[210px] md:w-[200px] h-[160px] rounded-lg shadow-xl px-2.5 py-5 sm:px-4 sm:py-6 text-center opacity-1 cursor-pointer mix-blend-normal hover:scale-[1.20] duration-500">
          <AiOutlineDatabase className="w-7 h-7 mx-auto mb-5" />
          <h5 className="mb-3 font-bold">Product Development</h5>
          <p className="text-xs">
            build a product that your customers can’t live without
          </p>
        </div>
        <div class="bg-[#f7f7f7] w-[210px] md:w-[200px] h-[160px] rounded-lg shadow-xl px-2.5 py-5 sm:px-4 sm:py-6 text-center opacity-1 cursor-pointer mix-blend-normal hover:scale-[1.20] duration-500">
          <RiFundsLine className="w-7 h-7 mx-auto mb-5" />
          <h5 className="mb-3 font-bold">Fundraising</h5>
          <p className="text-xs">
            fundraise from the world’s best investors on demo day
          </p>
        </div>
      </div>
    </div>
  );
}

export default Second;
