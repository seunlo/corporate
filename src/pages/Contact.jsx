import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";

function Contact() {
  return (
    <>
      <div className="bg-cover h-[100px] md:h-[300px] flex items-center justify-center bg-[url('https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg')]">
        <h1 className="text-white font-extrabold text-6xl font-Oswald">Contact Us</h1>
      </div>
      <div className="max-w-6xl mx-auto shadow-2xl my-5 flex flex-col md:flex-row">
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold my-5">Get in touch</h1>
          <div className="">
            <form className="flex flex-col">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Name"
                className="mb-5 rounded-md py-6 border border-slate-300"
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                className="mb-5 rounded-md py-6 border border-slate-300"
              />
              <input
                type="number"
                name=""
                id=""
                placeholder="Phone"
                className="mb-5 rounded-md py-6 border border-slate-300"
              />
              <textarea
                name=""
                id=""
                placeholder="Message"
                rows="5"
                className="mb-5 rounded-md border border-slate-300"
              ></textarea>
              <button
                type="button"
                className="bg-red-500 rounded-tr-2xl rounded-bl-2xl text-xl md:text-2xl text-white p-4 font-bold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="border border-r-0"></div>
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold my-5">Reach Us</h1>
          <div className="">
            <div className="flex gap-5 p-8 items-center">
              <FaMapMarkerAlt className="w-10 h-10 md:w-14 md:h-14 border-2 border-slate-300 rounded-full p-3 text-red-500" />
              <p>
                Plot 287, Ajose Adeogun Street, Victoria Island, Lagos, Nigeria
              </p>
            </div>
            <div className="flex gap-5 p-8 items-center">
              <FaRegEnvelope className="w-10 h-10 md:w-14 md:h-14 border-2 border-slate-300 rounded-full p-3 text-red-500" />
              <p>contact@contact.com</p>
            </div>
            <div className="flex gap-5 p-8 items-center">
              <LuPhoneCall className="w-10 h-10 md:w-14 md:h-14 border-2 border-slate-300 rounded-full p-3 text-red-500" />
              <p>+234-8099-999-999</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
