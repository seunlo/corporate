import { Footer } from "flowbite-react";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { Link } from "react-router-dom";
import { logo } from "../assets/images";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function Footer2() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setErrorMessage(null);
      const res = await fetch("http://localhost:3557/send-news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      if (res.ok) {
        toast.success("Your Message Has Been Sent");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <div className="bg-[#1A1E25]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 font-montserrat">
        <div className="flex flex-col sm:flex-row gap-8 justify-between items-start sm:items-center">
          <div className="sm:max-w-[220px] lg:max-w-[350px]">
            <div className="max-w-[130px]">
              <Link to="/">
                <img
                  src={logo}
                  alt="Company Logo"
                  className="w-full max-w-[130px] bg-white"
                />
              </Link>
            </div>
            <p className="text-sm lg:text-base text-white mt-4">
              LAUNCH AND SCALE YOUR STARTUP IDEAS; We are building the next big
              thing by providing startups with the oxygen to launch, thrive and
              scale
            </p>
          </div>
          <div className="mt-6 sm:mt-0 flex flex-col max-w-[400px]">
            <h4 className="text-xl text-white font-bold mb-4 font-Ubuntu">
              SUBSCRIBE TO NEWSLETTER
            </h4>
            <form className="flex flex-wrap gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-input rounded-md py-2 text-sm w-full sm:w-auto"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-input rounded-md py-2 text-sm w-full sm:w-auto"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                onChange={handleChange}
              />
              <input
                type="email"
                className="form-input rounded-md py-2 text-sm w-full sm:w-auto"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-md transition-colors focus:outline-none">
                Submit
              </button>
            </form>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="text-xl text-white font-bold mb-4 font-Ubuntu">
                  CONTACT US
                </h4>
                <p className="text-white text-sm font-bold">
                  Email:{" "}
                  <a href="mailto:contact@contact.com" className="text-white">
                    info@elaloeyfoundry.com
                  </a>
                </p>
              </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer.Divider className="my-8" />
        <div className="text-white text-sm">
          &copy; {new Date().getFullYear()} Elaloey Foundry. All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer2;
