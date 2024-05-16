import React from "react";
import { RiFundsLine } from "react-icons/ri";

function OurTeam() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-red-500 text-[36px] font-bold font-Oswald">
          Our Team
        </h1>
        <p className="p-6 font-montserrat">
          We are blessed with the right 3H’s (heads, hearts and hands) in the
          world to birth your dreams and ideas. Our team comprise of industry
          experts, founders and investors who are committed to seeing you launch
          and thrive.
        </p>
      </div>
      <div className="max-w-4xl mx-auto flex items-center justify-center flex-col sm:flex-row gap-5 mb-10 p-2">
        <div class="bg-[#f7f7f7] w-[210px] md:w-[200px] h-[160px] rounded-lg shadow-md px-2.5 py-5 sm:px-4 sm:py-6 text-center opacity-1 cursor-pointer mix-blend-normal hover:scale-[1.20] duration-500">
          <RiFundsLine className="w-7 h-7 mx-auto mb-5" />
          <h5 className="mb-3 font-bold">Fundraising</h5>
          <p className="text-xs">
            fundraise from the world’s best investors on demo day
          </p>
        </div>
        <div class="bg-[#f7f7f7] w-[210px] md:w-[200px] h-[160px] rounded-lg shadow-xl px-2.5 py-5 sm:px-4 sm:py-6 text-center opacity-1 cursor-pointer mix-blend-normal hover:scale-[1.20] duration-500">
          <RiFundsLine className="w-7 h-7 mx-auto mb-5" />
          <h5 className="mb-3 font-bold">Fundraising</h5>
          <p className="text-xs">
            fundraise from the world’s best investors on demo day
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
    </>
  );
}

export default OurTeam;