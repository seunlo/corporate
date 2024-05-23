import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function StartUp() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Adjust the speed in milliseconds
    speed: 8000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <>
      <div className="bg-cover h-[100px] sm:h-[200px] flex items-center justify-center bg-[url('https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg')]">
        <h1 className="text-white font-extrabold text-6xl font-Oswald">
          Startups
        </h1>
      </div>
      <div className="py-12 text-gray-300 font-montserrat text-[14px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-limeGreen font-Ubuntu sm:text-4xl">
              Pitch Your Startup
            </h2>
            <p className="mt-4text-[16px] font-montserrat text-gray-300">
              Are you a talented young Nigerian? Do you have an innovative idea
              or startup business capable of solving the average Nigerian
              problems and transforming the country? Do you need business
              advisory and funding to launch or scale? Get in touch with us!
            </p>
            <div className="mt-8">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-limeGreen rounded-tl-2xl rounded-br-2xl text-base font-medium rounded-md text-white hover:text-limeGreen"
              >
                Apply Now
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-extrabold text-limeGreen font-Ubuntu sm:text-4xl text-center">
              Incubation Program
            </h3>
            <p className="my-4 text-[14px] font-montserrat text-gray-300">
              Our incubation program is nothing but to ensure that your startup
              idea is market-ready and future-proof. Once you meet the criteria
              for our tribe and confirmed as a potential V.O.I.C.E in our
              cohorts, we officially take you on the P.R.E.P stages before a
              deal is agreed and signed;
            </p>

            {/* <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"> */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row gap-3 max-w-4xl mx-auto">
                <div className="px-4 py-5 sm:p-6 bg-white overflow-hidden shadow rounded-lg">
                  <h4 className="text-xl font-bold font-Ubuntu text-gray-900 text-center">
                    Pitching
                  </h4>
                  <p className="mt-2 text-[14px] leading-5 text-gray-500 text-justify">
                    Welcome to the first stage to pitch your startup ideas for
                    innovation testing and market evaluation. Here, we’d like
                    you to thrill us about the problem(s) you to aim to solve.
                  </p>
                </div>

                <div className="px-4 py-5 sm:p-6 bg-white overflow-hidden shadow rounded-lg">
                  <h4 className="text-xl font-bold font-Ubuntu text-gray-900 text-center">
                    Registration
                  </h4>
                  <p className="mt-2 text-[14px] leading-5 text-gray-500 text-justify">
                    If successful at the pitch stage, you are officially
                    enrolled and onboarded into our cohort and subject to
                    enhancement in the Foundry.
                  </p>
                </div>

                <div className="px-4 py-5 sm:p-6 bg-white overflow-hidden shadow rounded-lg">
                  <h4 className="text-xl font-bold font-Ubuntu text-gray-900 text-center">
                    Enhancement
                  </h4>
                  <p className="mt-2 text-[14px] leading-5 text-gray-500 text-justify">
                    This stage entails working with the Foundry’s industry
                    professionals and subject matter experts across tech,
                    finance and consulting to fine-tune the startup idea for
                    market readiness, business structure and strategy to win in
                    the marketplace.
                  </p>
                </div>
              </div>

              <div className="px-4 py-5 sm:p-6 bg-white overflow-hidden shadow rounded-lg max-w-4xl mx-auto">
                <h4 className="text-xl font-bold font-Ubuntu text-gray-900 text-center">
                  Placement
                </h4>
                <p className="mt-2 text-[14px] leading-5 text-gray-500 text-justify">
                  Congratulations! At this final stage, you are officially
                  presented with a deal - the oxygen you require to launch,
                  thrive and scale. Thus, fulfilling our mission and corporate
                  essence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* text slider is here */}

      <div className="overflow-hidden text-limeGreen font-Ubuntu">
        <Slider {...settings}>
          {["Talents. Ideas. Startups", ""].map((word, index) => (
            <div key={index} className="whitespace-nowrap">
              <span className="inline-block px-4 text-4xl font-bold">
                {word}
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default StartUp;
