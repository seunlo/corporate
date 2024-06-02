import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";

function FooterPage() {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-12 sm:gap-8 xl:gap-12 justify-between pb-12 text-white pt-20 bg-black">
      {/* flex flex-col sm:flex-row gap-12 sm:gap-8 xl:gap-12 justify-between pb-12 */}
        <div className="flex-1">
          <div className="">
            <Link to="/" className="flex items-center mb-5">
              <img
                src="https://colormadehappy.com/wp-content/uploads/2022/11/Christmas-Tree-Drawing-scaled-e1667860123547.jpg"
                alt="swiphr"
                className="h-10 w-10 mr-2"
              />
              <div className="">
                <p className="font-bold text-3xl">ELALOEY</p>
                <p className="font-bold text-3xl">FOUNDRY</p>
              </div>
            </Link>
            <p className="">
              LAUNCH AND SCALE YOUR STARTUP IDEAS; We are building the next big
              thing by providing startups with the oxygen to launch, thrive and
              scale
            </p>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-lg mb-5">SUBSCRIBE TO NEWSLETTER</h2>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="First Name"
              className="rounded-lg px-3 py-2 bg-gray-700 text-white flex-1"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="rounded-lg px-3 py-2 bg-gray-700 text-white flex-1"
            />
          </div>
          <div className="flex flex-col xl:flex-row gap-3">
            <input
              type="text"
              placeholder="Email"
              className="rounded-lg px-3 py-2 bg-gray-700 text-white flex-1 ring-offset-background"
            />
            <button className="bg-red-500 p-2 rounded-lg w-[120px]">Subscribe</button>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-lg">Contact Us</h2>
          <div className="flex sm:flex-col mt-5 mb-8">
            <p className="text-sm font-bold">Email:</p>
            <p className="mb-4 text-sm">contact@contact.com</p>
          </div>
          <h2 className="font-bold text-lg mb-2">Follow Us</h2>
          <div className="flex gap-2">
            <Link to="https://facebook.com">
              <TiSocialFacebook className="w-10 h-10 border-2 rounded-md cursor-pointer" />
            </Link>
            <Link to="https://facebook.com">
              <IoLogoInstagram className="w-10 h-10 border-2 rounded-md cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </>
    // <Footer container className="border border-teal-500 bg-black text-white">
    //   <div className="max-w-7xl mx-auto mt-5 px-4 sm:px-6 lg:px-8">
    //     <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-[200px]">
    //       <div className="flex flex-col">
    //         <div className="mb-3">
    // <Link to="/" className="flex items-center">
    //   <img
    //     src="https://colormadehappy.com/wp-content/uploads/2022/11/Christmas-Tree-Drawing-scaled-e1667860123547.jpg"
    //     alt="swiphr"
    //     className="h-10 w-10 mr-2"
    //   />
    //   <div className="">
    //     <p className="font-bold text-3xl">ELALOEY</p>
    //     <p className="font-bold text-3xl">FOUNDRY</p>
    //   </div>
    // </Link>
    //         </div>
    //         <p className="mb-4">
    //           LAUNCH AND SCALE YOUR STARTUP IDEAS; We are building the next big
    //           thing by providing startups with the oxygen to launch, thrive and
    //           scale
    //         </p>
    //       </div>
    //       <div className="flex flex-col">
    //         <h2 className="font-bold text-lg mb-5">SUBSCRIBE TO NEWSLETTER</h2>
    //         <div className="flex flex-col sm:flex-row mb-2">
    //           <input
    //             type="text"
    //             placeholder="First Name"
    //             className="mr-2 mb-2 sm:mb-0 rounded-lg px-3 py-2 bg-gray-700 text-white outline-none"
    //           />
    //           <input
    //             type="text"
    //             placeholder="Last Name"
    //             className="rounded-lg px-3 py-2 bg-gray-700 text-white outline-none"
    //           />
    //         </div>
    //         <div className="flex flex-col sm:flex-row">
    //           <input
    //             type="text"
    //             placeholder="Email"
    //             className="rounded-lg mb-2 sm:mr-2 sm:mb-0 px-3 py-2 bg-gray-700 text-white outline-none w-full"
    //           />
    //           <button className="bg-red-500 p-2 rounded-lg">Subscribe</button>
    //         </div>
    //       </div>
    //       <div className="flex flex-col lg:mt-8">
    //         {" "}
    //         {/* Add margin top for large screens */}
    //         <h2 className="font-bold text-lg">Contact Us</h2>
    //         <p className="mb-4">Email: contact@contact.com</p>
    //         <h2 className="font-bold text-lg mb-2">Follow Us</h2>
    //         <div className="flex gap-4">
    //   <Footer.Icon href="#" icon={BsFacebook} />
    //   <Footer.Icon href="#" icon={BsInstagram} />
    //   <Footer.Icon href="#" icon={BsTwitter} />
    // </div>
    //       </div>
    //     </div>
    //     <Footer.Divider className="mt-8" />
    //     <div className="w-full flex justify-start p-3">
    //       <Footer.Copyright
    //         href="#"
    //         by=" Elaloey Foundry. All rights reserved"
    //         year={new Date().getFullYear()}
    //       />
    //     </div>
    //   </div>
    // </Footer>
  );
}

export default FooterPage;
