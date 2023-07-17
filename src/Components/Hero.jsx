import React from "react";
import bgcover from "../Assests/bgcover.jpg";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={bgcover}
      />
      <div className=" bg-black/30 absolute top-0  left-0 w-full h-screen " />
      <div className="absolute w-full h-screen top-0 flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p className="uppercase">all inclusive </p>
          <h1 className=" font-bold text-5xl md:text-7xl drop-shadow-2xl">Private beaches and Getaway</h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Experience the ultimate luxury and seclusion surrounded by pristine
            beaches, turquoise waters, and lush tropical landscapes. Indulge in
            pure bliss and create unforgettable memories on your dream private
            island holiday.
          </p>
          <button className="bg-white text-black rounded-2xl  py-2 px-2 hover:shadow-xl">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
