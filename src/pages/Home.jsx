import Carousel from "../components/Carousel";
import First from "../components/First";
import Second from "../components/Second";
import Color from "../components/Color";
import Third from "../components/Third";
import { bird, desert, banner1, banner2, banner3 } from "../assets/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [banner1, banner1, banner1];

function Home() {
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
      <div className="">
        <Carousel autoSlide={true}>
          {[...slides.map((s) => <img src={s} className="object-cover h-screen" />)]}
        </Carousel>
      </div>
      {/* <First /> */}
      {/* <Color /> */}
      <Second />
      <Third />
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

export default Home;
