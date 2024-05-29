import { Link } from "react-router-dom";
import { howwedoit } from "../assets/images";

function Second() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl mx-auto gap-5">
      <div className="px-4 font-montserrat">
        <h3 className="text-xl font-extrabold text-limeGreen md:text-2xl">
          How We Do It
        </h3>
        <div className="max-w-[590px]">
          <p className="mt-2 mb-3 font-montserrat text-[14px] text-white">
            We are clear on our mission and the roadmap to achieve it. Hence, we
            are very deliberate about talents, bold ideas and innovations. Our
            strategic expression is to <b>S.I.F</b>
          </p>
        </div>
        <div className=" font-montserrat text-[14px] text-white">
          <div className="mb-3">
            <span>
              <b>SPOT</b>
            </span>{" "}
            -{" "}
            <span>
              Through our strategic partnerships and initiatives, we spot
              talents, innovative ideas and viable startups for adoption into
              our foundry and ecosystem.
            </span>
          </div>
          <div className="mb-3">
            <span>
              <b>INCUBATE</b>
            </span>{" "}
            -{" "}
            <span>
              With a team of industry professionals, subject matter experts and
              founders, we provide requisite mentorship, business coaching and
              advisory to our cohort of innovators and founders to ensure their
              startups are market-proof and ready for launch.
            </span>
          </div>
          <div className="mb-3">
            <span>
              <b>FINANCE</b>
            </span>{" "}
            -{" "}
            <span>
              Collaborating with our partners and investors, we provide
              microfinance services and venture capital required to launch and
              scale.
            </span>
          </div>
        </div>
      </div>
      <div className="px-4">
        <img
          src={howwedoit}
          alt="image"
        />
      </div>
    </div>
  );
}

export default Second;
