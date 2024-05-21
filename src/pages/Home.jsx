import Carousel from "../components/Carousel";
import First from "../components/First";
import Second from "../components/Second";
import Third from "../components/Third";
import { bird, desert } from "../assets/images";

const slides = [bird, desert];

function Home() {
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
    </>
  );
}

export default Home;
