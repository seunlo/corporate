import React from "react";
import { FaVideo } from "react-icons/fa6";
import { GrGamepad } from "react-icons/gr";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { RiFundsLine } from "react-icons/ri";
import { AiOutlineDatabase } from "react-icons/ai";

function Second() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-10 items-center max-w-6xl mx-auto gap-5">
      <div className="">
        <img
          src="https://nirmanodisha.org/wp-content/uploads/2020/12/our_mission.jpg"
          alt="image"
        />
      </div>
      <div className="p-4">
        <h2 className="text-4xl font-extrabold text-slate-200">OUR STRATEGY</h2>
        <div className="max-w-[590px]">
          <p className="mt-2">
            We are clear on our mission and the roadmap towards delivering it.
            Thus, we are intentional about talents and the ecosystem we are
            trying to create. Our approach and strategy are simply to S.I.F
          </p>
        </div>
        <div className="">
          <div className="">
            <span className="text-xl text-bold">SPOT</span> -{" "}
            <span>
              through our strategic partnerships and initiatives, we spot
              talents, innovative ideas and viable startups for adoption into
              our foundry and ecosystem.
            </span>
          </div>
          <div className="">
            <span className="text-xl text-bold">INCUBATE</span> -{" "}
            <span>
              with our team of industry experts, founders and investors, we
              provide requisite mentorship, business coaching and advisory
              services for our cohorts and founders.
            </span>
          </div>
          <div className="">
            <span className="text-xl text-bold">FUND</span> -{" "}
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
