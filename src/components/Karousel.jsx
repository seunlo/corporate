import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banner1, banner2, banner3 } from "../assets/images"; // Assume banner2 and banner3 are other images you want to use

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    adaptiveHeight: true,
  };

  const images = [banner1, banner2, banner3]; // Array of images

  return (
    <div className="">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
