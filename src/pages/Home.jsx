import Carousel from "../components/Carousel";
import First from "../components/First";
import Second from "../components/Second";
import Third from "../components/Third";
import { bird, desert } from "../assets/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [bird, desert];

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
          {[...slides.map((s) => <img src={s} className="object-cover" />)]}
        </Carousel>
      </div>
      {/* <First /> */}
      <Second />
      <Third />
      <div className="overflow-hidden text-green-500 font-Ubuntu">
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
