import { Footer } from "flowbite-react";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { Link } from "react-router-dom";
import { logo, footer, header } from "../assets/images";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function Footer2() {
  return (
    <div className="bg-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 font-montserrat">
        <div className="flex flex-col sm:flex-row gap-8 justify-between items-start sm:items-center">
          <div className="sm:max-w-[220px] lg:max-w-[350px]">
            <div className="max-w-[130px]">
              <Link to="/">
                <img
                  src={footer}
                  alt="Company Logo"
                  className="w-full max-w-[180px] h-[150px]"
                />
              </Link>
            </div>
            <p className="text-sm lg:text-base text-white mt-4">
              LAUNCH AND SCALE YOUR STARTUP IDEAS; We are building the next big
              thing by providing startups with the oxygen to launch, thrive and
              scale
            </p>
          </div>
          <div className="mt-6 sm:mt-0 flex flex-col max-w-[400px] text-white">
            <div>
              <h4 className="text-xl font-bold mb-4 font-Ubuntu">CONTACT US</h4>

              <div className="flex items-center gap-5">
                <p>Telephone Number:</p>
                <div className="">
                  <p>+234-8077-089-309</p>
                  <p>+234-7060-679-276</p>
                </div>
              </div>
              <p className="text-white text-sm font-bold mt-5">
                Email:{" "}
                <a href="mailto:contact@contact.com" className="text-white">
                  info@elaloeyfoundry.com
                </a>
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="text-xl text-white font-bold mb-4 font-Ubuntu">
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
        <div className="text-white text-sm text-center">
          &copy; {new Date().getFullYear()} Elaloey Foundry. All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer2;
