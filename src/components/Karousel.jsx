import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banner1, banner2, banner3 } from "../assets/images";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const ImageSlider = () => {
  const navigate = useNavigate(); // Initialize the navigate function

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

  const images = [banner1, banner2, banner3];

  const handleClick = (url) => {
    navigate(url); // Navigate to the specified URL
  };

  return (
    <div className="">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt={`Slide ${index + 1}`} className="" />
            {/* Add a button for the desired slide */}
            {index === 2 && (
              <button
                className="absolute bottom-1 left-10 md:bottom-10 md:left-40 md:w-[180px] h-8 md:h-16 inline-flex items-center justify-center px-5 py-3 border border-limeGreen rounded-tl-2xl rounded-br-2xl font-medium text-white hover:bg-limeGreen"
                onClick={() => handleClick("/register")} // Replace with desired URL
              >
                Register
              </button>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;