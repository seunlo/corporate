import { Link } from "react-router-dom";

function Second() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-10 items-center max-w-6xl mx-auto gap-5">
      <div className="">
        <img
          src="https://nirmanodisha.org/wp-content/uploads/2020/12/our_mission.jpg"
          alt="image"
        />
      </div>
      <div className="p-4 font-Economica">
        <h2 className="text-4xl font-extrabold font-Ubuntu text-slate-300">
          OUR STRATEGY
          <Link to="/register">
            <span
              className={`p-1 text-md font-Ubuntu ${"text-white bg-purple-700 text-sm rounded-full px-3"}`}
            >
              Register
            </span>
          </Link>
        </h2>
        <div className="max-w-[590px]">
          <p className="mt-2 mb-3 font-montserrat">
            We are clear on our mission and the roadmap towards delivering it.
            Thus, we are intentional about talents and the ecosystem we are
            trying to create. Our approach and strategy are simply to S.I.F
          </p>
        </div>
        <div className=" font-montserrat">
          <div className="mb-3">
            <span><b>SPOT</b></span> -{" "}
            <span>
              through our strategic partnerships and initiatives, we spot
              talents, innovative ideas and viable startups for adoption into
              our foundry and ecosystem.
            </span>
          </div>
          <div className="mb-3">
            <span><b>INCUBATE</b></span> -{" "}
            <span>
              with our team of industry experts, founders and investors, we
              provide requisite mentorship, business coaching and advisory
              services for our cohorts and founders.
            </span>
          </div>
          <div className="mb-3">
            <span><b>FUND</b></span> -{" "}
            <span>
              collaborating with our partners and investors, we provide
              microfinance services and venture capital required to launch and
              scale.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;
