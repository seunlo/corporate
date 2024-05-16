import React from "react";

function Third() {
  return (
    <>
      <div className="max-w-6xl mx-auto p-4">
        <h2 className="text-4xl font-extrabold text-slate-200 mb-2">OUR TRIBE</h2>
        <p className="">
          We are looking for brilliant and innovative minds that can solve
          problems and transform Nigeria. We work with a tribe of young people
          with the right kind of VOICE that can convince our partners, investors
          and their customers. Our adoption and funding are largely based on
          your VOICE;
        </p>
      </div>
      <div className="my-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-6xl mx-auto">
        <div class="bg-[#f7f7f7] w-[210px] md:w-[200px] h-[160px] rounded-lg shadow-xl px-2.5 py-5 sm:px-4 sm:py-6 text-center opacity-1 cursor-pointer mix-blend-normal hover:scale-[1.20] duration-500">
          <h5 className="mb-3 font-bold">VIABILITY</h5>
          <p className="text-xs">
            The relevance, unique selling proposition and marketability of the
            idea
          </p>
        </div>
        <div class="bg-[#f7f7f7] w-[210px] md:w-[200px] h-[160px] rounded-lg shadow-xl px-2.5 py-5 sm:px-4 sm:py-6 text-center opacity-1 cursor-pointer mix-blend-normal hover:scale-[1.20] duration-500">
          <h5 className="mb-3 font-bold">ORIGINALITY</h5>
          <p className="text-xs">
          The novelty, innovation and uniqueness of the idea and solution
          </p>
        </div>
        <div class="bg-[#f7f7f7] w-[210px] md:w-[210px] h-[160px] rounded-lg shadow-xl px-2.5 py-5 sm:px-4 sm:py-6 text-center opacity-1 cursor-pointer mix-blend-normal hover:scale-[1.20] duration-500">
          <h5 className="mb-3 font-bold">INTEGRITY</h5>
          <p className="text-xs">
          The credibility, sincerity and pedigree of the founder(s) and team
          </p>
        </div>
        <div class="bg-[#f7f7f7] w-[210px] md:w-[200px] h-[160px] rounded-lg shadow-xl px-2.5 py-5 sm:px-4 sm:py-6 text-center opacity-1 cursor-pointer mix-blend-normal hover:scale-[1.20] duration-500">
          <h5 className="mb-3 font-bold">CAPABILITY</h5>
          <p className="text-xs">
          The expertise, education and experience of the founder(s) in the subject 
          </p>
        </div>
        <div class="bg-[#f7f7f7] w-[210px] md:w-[200px] h-[160px] rounded-lg shadow-xl px-2.5 py-5 sm:px-4 sm:py-6 text-center opacity-1 cursor-pointer mix-blend-normal hover:scale-[1.20] duration-500">
          <h5 className="mb-3 font-bold">EXISTENCE</h5>
          <p className="text-xs">
          The ability of the business/idea to withstand headwinds and exist in perpetuity.
          </p>
        </div>
      </div>
    </>
  );
}

export default Third;