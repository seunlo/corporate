import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Third() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-6xl mx-auto p-4 font-montserrat">
        <h2 className="text-4xl font-extrabold text-green-600 mb-2 font-Ubuntu">
          Our Tribe
        </h2>
        <p className="text-[14px] text-gray-300">
          We are looking for brilliant and innovative minds that can solve
          problems and transform Nigeria. We work with a tribe of young people
          with the right kind of VOICE that can convince our partners, investors
          and their customers. Our adoption and funding are largely based on
          your <b>V.O.I.C.E</b>
        </p>
      </div>
      <div className="my-5 max-w-6xl mx-auto">
        <Slider {...settings}>
          <div className="bg-[#f7f7f7] w-[210px] md:w-[80px] h-[100px] rounded-lg shadow-md px-2.5 py-5 sm:px-4 sm:py-6 text-center mx-2 cursor-pointer mix-blend-normal hover:scale-105 duration-500">
            <h5 className="mb-1 font-bold">VIABILITY</h5>
            <p className="text-xs capitalize">
              The relevance, unique selling proposition and marketability of the
              idea
            </p>
          </div>
          <div className="bg-[#f7f7f7] w-[210px] md:w-[80px] h-[100px] rounded-lg shadow-md px-2.5 py-5 sm:px-4 sm:py-6 text-center mx-2 cursor-pointer mix-blend-normal hover:scale-105 duration-500">
            <h5 className="mb-1 font-bold">ORIGINALITY</h5>
            <p className="text-xs capitalize">
              The novelty, innovation and uniqueness of the idea and solution
            </p>
          </div>
          <div className="bg-[#f7f7f7] w-[210px] md:w-[80px] h-[100px] rounded-lg shadow-md px-2.5 py-5 sm:px-4 sm:py-6 text-center mx-2 cursor-pointer mix-blend-normal hover:scale-105 duration-500">
            <h5 className="mb-1 font-bold">INTEGRITY</h5>
            <p className="text-xs capitalize">
              The credibility, sincerity and pedigree of the founder(s) and team
            </p>
          </div>
          <div className="bg-[#f7f7f7] w-[210px] md:w-[80px] h-[100px] rounded-lg shadow-md px-2.5 py-5 sm:px-4 sm:py-6 text-center mx-2 cursor-pointer mix-blend-normal hover:scale-105 duration-500">
            <h5 className="mb-1 font-bold">CAPABILITY</h5>
            <p className="text-xs capitalize">
              The expertise, education and experience of the founder(s) in the
              subject area
            </p>
          </div>
          <div className="bg-[#f7f7f7] w-[210px] md:w-[80px] h-[100px] rounded-lg shadow-md px-2.5 py-5 sm:px-4 sm:py-6 text-center mx-2 cursor-pointer mix-blend-normal hover:scale-105 duration-500">
            <h5 className="mb-1 font-bold">EXISTENCE</h5>
            <p className="text-xs capitalize">
              The ability of the business/idea to withstand headwinds and exist
              in perpetuity.
            </p>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Third;
