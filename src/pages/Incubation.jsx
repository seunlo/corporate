import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { startup, pitch, reg, enhance, place } from "../assets/images";

function Incubation() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: "linear",
    arrows: false,
  };

  const stages = [
    {
      title: "Pitching",
      description:
        "Welcome to the first stage to pitch your startup ideas for innovation testing and market evaluation. Here, we’d like you to thrill us about the problem(s) you aim to solve.",
      img: pitch,
    },
    {
      title: "Registration",
      description:
        "If successful at the pitch stage, you are officially enrolled and onboarded into our cohort and subject to enhancement in the Foundry.",
      img: reg,
    },
    {
      title: "Enhancement",
      description:
        "Work with our industry professionals and subject matter experts to fine-tune and enhance your startup for business structure, market-readiness and strategy to win in the marketplace.",
      img: enhance,
    },
    {
      title: "Placement",
      description:
        "Congratulations! At this final stage, you are officially presented with a deal - the oxygen you require to launch, thrive, and scale. Thus, fulfilling our mission and corporate essence.",
      img: place,
    },
  ];

  return (
    <>
      <div className="relative h-[100px] sm:h-[200px] flex items-center justify-center">
        <img
          src={startup}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="py-12 text-gray-300 font-montserrat text-[14px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-extrabold text-limeGreen font-Ubuntu md:text-2xl">
              Pitch Your Startup
            </h3>
            <p className="mt-4 text-[16px] font-montserrat text-white">
              Are you a talented young Nigerian? Do you have an innovative idea
              or startup business capable of solving the average Nigerian
              problems and transforming the country? Do you need business
              advisory and funding to launch or scale? Get in touch with us!
            </p>
            <div className="mt-8">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-limeGreen rounded-tl-2xl rounded-br-2xl text-base font-medium text-white hover:bg-limeGreen"
              >
                Apply Now
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-extrabold text-limeGreen font-Ubuntu md:text-2xl text-center">
              Incubation Program
            </h3>
            <p className="my-4 text-[14px] font-montserrat text-white">
              Our incubation program is designed to ensure that your startup
              idea is market-ready and future-proof. Once you meet the criteria
              for our tribe and are confirmed as a potential V.O.I.C.E in our
              cohorts, we officially take you through the P.R.E.P stages before
              a deal is agreed and signed.
            </p>

            <div className="flex flex-col md:flex-row md:flex-wrap gap-3 justify-center items-center md:items-stretch">
              {stages.map((stage, index) => (
                <div
                  key={index}
                  className="flex-1 min-w-[250px] max-w-sm px-4 py-5 sm:p-6 bg-white overflow-hidden shadow rounded-lg flex flex-col items-center"
                >
                  <img
                    src={stage.img}
                    alt={stage.title}
                    className="w-10 h-10 object-contain mb-2"
                  />
                  <h4 className="text-[16px] font-bold text-gray-900 text-center">
                    {stage.title}
                  </h4>
                  <p className="mt-2 text-[14px] leading-5 text-black text-center">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden text-limeGreen font-Ubuntu">
        <Slider {...settings}>
          {["Talents. Ideas. Startups",''].map((word, index) => (
            <div key={index} className="whitespace-nowrap">
              <span className="inline-block px-8 text-[14px]"> {/* Changed px-4 to px-8 */}
                {word}
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Incubation;
