import { Footer } from "flowbite-react";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { Link } from "react-router-dom";
import { footer } from "../assets/images";
import { LuPhoneCall } from "react-icons/lu";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";

function Footer2() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 font-montserrat bg-gray-600 p-2">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-8 lg:gap-0">
        <div className="sm:max-w-[220px] lg:max-w-[350px]">
          <div className="max-w-[130px]">
            <Link to="/">
              <img
                src={footer}
                alt="Company Logo"
                className="max-w-[180px] mix-blend-lighten"
              />
            </Link>
          </div>
          <p className="text-[12px] text-white mt-2">
            We provide the required
            <b> oxygen</b> for startup ideas and early-stage businesses to
            launch, thrive and scale.
          </p>
        </div>
        <div className="flex flex-col max-w-[400px] text-white sm:mx-auto lg:mx-0">
          <div>
            <h4 className="text-md md:text-xl text-center text-limeGreen font-bold mb-4 font-Ubuntu">
              CONTACT US
            </h4>

            <div className="flex gap-5 items-center">
              <LuPhoneCall className="w-5 h-5" />
              <p>+234-7060-679-276</p>
            </div>
            <div className="flex gap-5 items-center">
              <PiWhatsappLogoThin className="w-5 h-5" />
              <p>+234-8077-089-309</p>
            </div>

            <div className="flex gap-5 items-center">
              <IoMailOutline className="w-5 h-5" />
              <p className="text-white text-sm font-bold text-[12px]">
                <a href="mailto:info@elaloeyfoundry.com" className="text-white">
                  info@elaloeyfoundry.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="sm:mx-auto lg:mx-0">
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-md md:text-xl text-center text-limeGreen font-bold mb-4 font-Ubuntu">
                STAY CONNECTED
              </h4>
              <div className="flex justify-center gap-2 items-center my-5">
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
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiTwitterXFill className="w-10 h-10 rounded-md cursor-pointer bg-white" />
                </a>
                <a
                  href="https://tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoTiktok className="w-10 h-10 rounded-md cursor-pointer bg-white" />
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
  );
}

export default Footer2;
