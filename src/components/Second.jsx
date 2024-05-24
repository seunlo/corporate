import { Link } from "react-router-dom";

function Second() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-10 items-center max-w-6xl mx-auto gap-5">
      <div className="p-4 font-Economica">
        <h3 className="text-xl font-extrabold text-limeGreen font-Ubuntu md:text-2xl text-center">
          How We Do It
        </h3>
        <div className="max-w-[590px]">
          <p className="mt-2 mb-3 font-montserrat text-[14px] text-white">
            We are clear on our mission and the roadmap to achieve it. Thus, we
            are deliberate about talents and the ecosystem we are building. Our
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
              through our strategic partnerships and initiatives, we spot
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
              with a team of industry professionals, subject matter experts and
              founders, we provide requisite mentorship, business coaching and
              advisory to our cohort of innovators and founders to ensure their
              startups are market-proof and ready for launch.
            </span>
          </div>
          <div className="mb-3">
            <span>
              <b>FUND</b>
            </span>{" "}
            -{" "}
            <span>
              collaborating with our partners and investors, we provide
              microfinance services and venture capital required to launch and
              scale.
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <img
          src="https://www.invensislearning.com/blog/wp-content/uploads/2021/07/What-is-Strategy-management-for-IT-services-1068x552-1.jpg"
          alt="image"
        />
      </div>
    </div>
  );
}

export default Second;
