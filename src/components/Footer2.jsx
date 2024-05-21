import { Footer } from "flowbite-react";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { Link } from "react-router-dom";
import { footer, footer2 } from "../assets/images";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function Footer2() {
  return (
    <div className="bg-gray-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-montserrat">
        <div className="flex flex-col sm:flex-row gap-8 justify-between items-start sm:items-center">
          <div className="sm:max-w-[220px] lg:max-w-[350px]">
            <div className="max-w-[130px]">
              <Link to="/">
                <img
                  src={footer}
                  alt="Company Logo"
                  className="max-w-[120px]"
                />
              </Link>
            </div>
            <p className="text-[12px] text-white mt-2">
              LAUNCH AND SCALE YOUR STARTUP IDEAS; We provide the required
              <b> oxygen</b> for startup ideas and early-stage businesses to
              launch, thrive and scale.
            </p>
          </div>
          <div className="flex flex-col max-w-[400px] text-white">
            <div>
              <h4 className="text-md md:text-2xl font-bold mb-4 font-Ubuntu text-center text-green-600">CONTACT US</h4>

              <div className="flex flex-col lg:flex-row items-center gap-5 sm:gap-2 text-[12px]">
                <p>Telephone Number:</p>
                <div className="">
                  <p>+234-8077-089-309</p>
                  <p>+234-7060-679-276</p>
                </div>
              </div>
              <p className="text-white text-sm font-bold mt-5 text-[12px]">
                Email:{" "}
                <a href="mailto:info@elaloeyfoundry.com" className="text-white">
                  info@elaloeyfoundry.com
                </a>
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="text-md md:text-2xl text-center text-green-600 font-bold mb-4 font-Ubuntu">
                  FOLLOW US
                </h4>
                <div className="flex gap-2 items-center">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TiSocialFacebook className="w-10 h-10 rounded-md cursor-pointer bg-white" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoInstagram className="w-10 h-10 rounded-md cursor-pointer bg-white" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoInstagram className="w-10 h-10 rounded-md cursor-pointer bg-white" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoInstagram className="w-10 h-10 rounded-md cursor-pointer bg-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer.Divider className="" />
        <div className="text-white text-xs p-1 text-center">
          &copy; {new Date().getFullYear()} Elaloey Foundry. All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer2;
