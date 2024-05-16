import { Footer } from "flowbite-react";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { Link } from "react-router-dom";

function Footer2() {
  return (
    <div className="bg-[#1A1E25]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row gap-8 justify-between items-start sm:items-center">
          <div className="sm:max-w-[220px] lg:max-w-[350px]">
            <div className="max-w-[130px]">
              <Link to="/" className="">
                <img
                  src="../../public/ElaloeyF.jpeg"
                  alt="Company Logo"
                  className="w-full max-w-[130px] bg-black"
                />
              </Link>
            </div>
            <p className="text-sm lg:text-base text-white mt-4">
              LAUNCH AND SCALE YOUR STARTUP IDEAS; We are building the next big
              thing by providing startups with the oxygen to launch, thrive and
              scale
            </p>
          </div>
          <div className="mt-6 sm:mt-0 flex flex-col">
            <h4 className="text-xl text-white font-bold mb-4">SUBSCRIBE TO NEWSLETTER</h4>
            <form className="flex flex-wrap gap-4">
              <input
                type="text"
                className="form-input rounded-md py-2 text-sm w-full sm:w-auto"
                placeholder="First Name"
              />
              <input
                type="text"
                className="form-input rounded-md py-2 text-sm w-full sm:w-auto"
                placeholder="Last Name"
              />
              <input
                type="text"
                className="form-input rounded-md py-2 text-sm w-full sm:w-auto"
                placeholder="Email"
              />
              <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-md transition-colors focus:outline-none">
                Submit
              </button>
            </form>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="text-xl text-white font-bold mb-4">CONTACT US</h4>
                <p className="text-white text-sm font-bold">
                  Email: <a href="mailto:contact@contact.com" className="text-white">contact@contact.com</a>
                </p>
              </div>
              <div>
                <h4 className="text-xl text-white font-bold mb-4">FOLLOW US</h4>
                <div className="flex gap-2 items-center">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <TiSocialFacebook className="w-10 h-10 rounded-md cursor-pointer bg-white" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <IoLogoInstagram className="w-10 h-10 rounded-md cursor-pointer bg-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer.Divider className="my-8" />
        <div className="text-white text-sm">&copy; {new Date().getFullYear()} Elaloey Foundry. All rights reserved</div>
      </div>
    </div>
  );
}

export default Footer2;
