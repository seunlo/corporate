import React from "react";
import { Link } from "react-router-dom";

function StartUp() {
  return (
    <>
      <div className="bg-cover h-[100px] sm:h-[200px] flex items-center justify-center bg-[url('https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg')]">
        <h1 className="text-white font-extrabold text-6xl font-Oswald">
          Startups
        </h1>
      </div>
      <div className="py-12 text-gray-300 font-montserrat text-[14px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-green-500 font-Ubuntu sm:text-4xl">
              Pitch Your Startup
            </h2>
            <p className="mt-4 text-[14px] font-montserrat text-gray-300">
              Are you a talented young Nigerian? Do you have an innovative idea
              or startup business capable of solving the average Nigerian
              problems and transforming the country? Do you need business
              advisory and funding to launch or scale? Get in touch with us!
            </p>
            <div className="mt-8">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-green-500 rounded-tl-2xl rounded-br-2xl text-base font-medium rounded-md text-white hover:bg-green-500"
              >
                Apply Now
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-extrabold text-green-500 font-Ubuntu sm:text-4xl">
              Incubation Program
            </h3>
            <p className="mt-4 text-[14px] font-montserrat text-gray-300">
              Our incubation program is nothing but to ensure that your startup
              idea is market-ready and business-proofed. It comprises of the
              following P.R.E.P stages:
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h4 className="text-xl font-bold font-Ubuntu text-gray-900">
                    Pitching
                  </h4>
                  <p className="mt-2 text-base text-gray-500">
                    The first stage where you pitch your ideas for innovation
                    and market evaluation.
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h4 className="text-xl font-bold font-Ubuntu text-gray-900">
                    Registration
                  </h4>
                  <p className="mt-2 text-base text-gray-500">
                    If successful at the pitch stage, you'll be accepted and
                    enrolled into our cohort foundry
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h4 className="text-xl font-bold font-Ubuntu text-gray-900">
                    Enhancement
                  </h4>
                  <p className="mt-2 text-base text-gray-500">
                    This involves working with our industry professionals and
                    subject matter expert to prune and fine-tune the startup
                    idea with relevant advisory
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h4 className="text-xl font-bold font-Ubuntu text-gray-900">
                    Placement
                  </h4>
                  <p className="mt-2 text-base text-gray-500">
                    {/* Add description for Placement */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartUp;
