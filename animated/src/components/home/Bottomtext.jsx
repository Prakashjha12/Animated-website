import React from "react";
import { Link } from "react-router-dom";

const Bottomtext = () => {
  return (
    <div className="font-[font1] flex items-center justify-center gap-2 text-center leading-[6.5vh] pb-2.5  flex-col md:flex-row ">
      <Link
        className=" hover:border-[#d3fd50] hover:text-[#d3fd50] text-5xl md:text-[6.5vh]  uppercase border-2 border-white px-10 py-8 rounded-full mr-2"
        to="/Projects"
      >
        Projects
      </Link>
      <Link
        className=" hover:border-[#d3fd50]  hover:text-[#d3fd50] text-5xl md:text-[6.5vh] uppercase border-2 border-white px-10 py-8 rounded-full"
        to="/Agents"
      >
        Agents
      </Link>
    </div>
  );
};

export default Bottomtext;
