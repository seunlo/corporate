import React from "react";

function Third() {
  return (
    <>
      <div className="max-w-6xl mx-auto p-4 font-montserrat">
        <h3 className="text-xl font-extrabold text-limeGreen font-montserrat md:text-2xl">
          Our Tribe
        </h3>
        <p className="text-[14px] text-white">
          We are looking for brilliant and innovative minds that can solve
          problems and transform Nigeria. We work with a tribe of young people
          with the right kind of VOICE that can convince our partners, investors
          and their customers. Our adoption and funding are largely based on
          your <b>V.O.I.C.E</b>
        </p>
      </div>
      <div className="my-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-6xl mx-auto gap-5 font-montserrat">
        <div class="bg-[#f7f7f7] w-[210px] md:w-[200px] h-[160px] rounded-lg shadow-md px-2.5 py-5 sm:px-4 sm:py-6 text-center opacity-1 cursor-pointer mix-blend-normal hover:scale-[1.20] duration-500 mx-auto">
          <h5 className="mb-3 font-bold">Viability</h5>
          <p className="text-xs">
            The relevance, unique selling proposition and marketability of the
            idea
          </p>
        </div>
        <div class="bg-[#f7f7f7] w-[210px] md:w-[200px] h-[160px] rounded-lg shadow-md px-2.5 py-5 sm:px-4 sm:py-6 text-center opacity-1 cursor-pointer mix-blend-normal hover:scale-[1.20] duration-500 mx-auto">
          <h5 className="mb-3 font-bold">Originality</h5>
          <p className="text-xs">
            The novelty, innovation and uniqueness of the idea and solution
          </p>
        </div>
        <div class="bg-[#f7f7f7] w-[210px] md:w-[210px] h-[160px] rounded-lg shadow-md px-2.5 py-5 sm:px-4 sm:py-6 text-center opacity-1 cursor-pointer mix-blend-normal hover:scale-[1.20] duration-500 mx-auto">
          <h5 className="mb-3 font-bold">Integrity</h5>
          <p className="text-xs">
            The credibility, sincerity and pedigree of the founder(s) and team
          </p>
        </div>
        <div class="bg-[#f7f7f7] w-[210px] md:w-[200px] h-[160px] rounded-lg shadow-md px-2.5 py-5 sm:px-4 sm:py-6 text-center opacity-1 cursor-pointer mix-blend-normal hover:scale-[1.20] duration-500 mx-auto">
          <h5 className="mb-3 font-bold">Capability</h5>
          <p className="text-xs">
            The expertise, education and experience of the founder(s) in the
            subject area
          </p>
        </div>
        <div class="bg-[#f7f7f7] w-[210px] md:w-[200px] h-[160px] rounded-lg shadow-md px-2.5 py-5 sm:px-4 sm:py-6 text-center opacity-1 cursor-pointer mix-blend-normal hover:scale-[1.20] duration-500 mx-auto">
          <h5 className="mb-3 font-bold">Existence</h5>
          <p className="text-xs">
            The ability of the business/idea to withstand headwinds and exist in
            perpetuity.
          </p>
        </div>
      </div>
    </>
  );
}

export default Third;
