import { Alert } from "flowbite-react";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";

function Contact() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.fname ||
      !formData.email ||
      !formData.pnumber ||
      !formData.message
    ) {
      return setErrorMessage("Please fill out all fields");
    }

    try {
      setErrorMessage(null);
      const res = await fetch("http://localhost:3557/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      if (res.ok) {
        //Alert("Email has been sent");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <>
      <div className="bg-cover h-[100px] md:h-[300px] flex items-center justify-center bg-[url('https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg')]">
        <h1 className="text-white font-extrabold text-6xl font-Oswald">
          Contact Us
        </h1>
      </div>
      <div className="max-w-6xl mx-auto shadow-2xl my-5 flex flex-col md:flex-row">
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold my-5 font-Ubuntu">Get in touch</h1>
          <div className="">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fname"
                id="fname"
                onChange={handleChange}
                placeholder="Your Name"
                className="mb-5 rounded-md py-6 border border-slate-300"
              />
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                placeholder="Email"
                className="mb-5 rounded-md py-6 border border-slate-300"
              />
              <input
                type="number"
                name="pnumber"
                id="pnumber"
                onChange={handleChange}
                placeholder="Phone"
                className="mb-5 rounded-md py-6 border border-slate-300"
              />
              <textarea
                name="message"
                id="message"
                onChange={handleChange}
                placeholder="Message"
                rows="5"
                className="mb-5 rounded-md border border-slate-300"
              ></textarea>
              <button
                type="submit"
                className="bg-red-500 rounded-tr-2xl rounded-bl-2xl text-xl md:text-2xl text-white p-4 font-bold font-Ubuntu"
              >
                Submit
              </button>
            </form>
            {errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )}
          </div>
        </div>
        <div className="border border-r-0"></div>
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold my-5 font-Ubuntu">Our Presence</h1>
          <div className="font-montserrat">
            <div className="flex gap-5 p-8 items-center">
              <FaMapMarkerAlt className="w-10 h-10 md:w-14 md:h-14 border-2 border-slate-300 rounded-full p-3 text-red-500" />
              <div className="flex flex-col">
                <p>Olu Osifeso Street Yaba, Lagos Nigeria</p>
                <p>+234-8077-089-309</p>
                <p>+234-7060-679-276</p>
              </div>
            </div>
            <div className="flex gap-5 p-8 items-center">
              <FaMapMarkerAlt className="w-10 h-10 md:w-14 md:h-14 border-2 border-slate-300 rounded-full p-3 text-red-500" />
              <div className="flex flex-col">
                <p>Torkildsen Way, CM20 1AW, Harlow, Essex United Kingdom</p>
                <p>+447-436-655-940</p>
              </div>
            </div>
            <div className="flex gap-5 p-8 items-center">
              <FaMapMarkerAlt className="w-10 h-10 md:w-14 md:h-14 border-2 border-slate-300 rounded-full p-3 text-red-500" />
              <div className="flex flex-col">
                <p>Legacy boulevard SE Calgary. T2X 2B9 Canada</p>
                <p>+19-055-981-853</p>
              </div>
            </div>
            <div className="flex gap-5 p-8 items-center">
              <FaRegEnvelope className="w-10 h-10 md:w-14 md:h-14 border-2 border-slate-300 rounded-full p-3 text-red-500" />
              <p>info@elaloeyfoundry.com</p>
            </div>
            {/* <div className="flex gap-5 p-8 items-center">
              <LuPhoneCall className="w-10 h-10 md:w-14 md:h-14 border-2 border-slate-300 rounded-full p-3 text-red-500" />
              <p>+234-8099-999-999</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
