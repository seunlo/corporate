import { Footer } from "flowbite-react";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { Link } from "react-router-dom";
import { footer, newfooter} from "../assets/images";
import { LuPhoneCall } from "react-icons/lu";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";

function Footer2() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 font-montserrat pt-6 bg-gray-900">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-8 lg:gap-0">
        <div className="sm:max-w-[220px] lg:max-w-[350px]">
          <div className="max-w-[130px]">
            <Link to="/">
              <img
                src={newfooter}
                alt="Company Logo"
                className="max-w-[110px] mix-blend-screen"
              />
            </Link>
          </div>
          {/* <p className="text-[12px] text-white mt-2">
            We provide the required
            <b> oxygen</b> for startup ideas and early-stage businesses to
            launch, thrive and scale.
          </p> */}
        </div>
        <div className="flex flex-col max-w-[400px] text-white sm:mx-auto lg:mx-0">
          <div>
            <h4 className="text-sm md:text-md text-center text-limeGreen mb-2 font-Ubuntu">
              CONTACT US
            </h4>

            {/* <div className="flex gap-5 items-center">
              <LuPhoneCall className="w-4 h-4" />
              <p className="text-[12px]">+234-7060-679-276</p>
            </div> */}
            <div className="flex gap-5 items-center">
              <PiWhatsappLogoThin className="w-4 h-4" />
              <p className="text-[12px]">+234-8077-089-309</p>
            </div>

            <div className="flex gap-5 items-center">
              <IoMailOutline className="w-4 h-4" />
              <p className="text-white text-[12px]">
                <a href="mailto:info@elaloeyfoundry.com" className="text-white">
                  info@elaloeyfoundry.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="sm:mx-auto lg:mx-0">
          <div className="flex flex-col gap-4">
            <div className="">
              <h4 className="text-sm md:text-md text-center text-limeGreen mb-2 font-Ubuntu">
                STAY CONNECTED
              </h4>
              <div className="flex justify-center gap-2 items-center my-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiSocialFacebook className="w-7 h-7 rounded-md cursor-pointer bg-white" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoInstagram className="w-7 h-7 rounded-md cursor-pointer bg-white" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiTwitterXFill className="w-7 h-7 rounded-md cursor-pointer bg-white" />
                </a>
                <a
                  href="https://tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoTiktok className="w-7 h-7 rounded-md cursor-pointer bg-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer.Divider className="" /> */}
      <div className="border-b border-1 my-2 border-slate-50"></div>
      <div className="text-white text-xs text-center p-1">
        &copy; {new Date().getFullYear()} Elaloey Foundry - All Rights Reserved
      </div>
    </div>
  );
}

export default Footer2;
