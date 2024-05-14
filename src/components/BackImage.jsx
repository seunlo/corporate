import React from "react";

function BackImage() {
  return (
    <div className="">
      <div className="bg-gradient-to-tl from-beige-700 to-white-500 relative">
        <img
          src="https://i.pinimg.com/736x/2e/a0/89/2ea0890014d0e4b78c59abdff3529e7a.jpg"
          alt="image"
          className="w-full h-[200px] object-cover absolute"
        />
        <h1 className="text-center font-extrabold md:text-5xl text-[45px] text-gray-500 absolute top-[100px] left-[450px]">
          About Us
        </h1>
      </div>
    </div>
  );
}

export default BackImage;
