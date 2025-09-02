import React from "react";
import Video from "./video";

const Toptext = () => {
  return (
    <div className="font-[font1] pt-2.5 text-center ">
      <div className="text-[6.5vh]  md:text-[9.5vh] uppercase leading-[9.5vh]  justify-center flex items-center ">
        welcome
      </div>
      <div className="text-[6.5vh]  md:text-[9.5vh] uppercase leading-[9.5vh]  justify-center flex items-center ">
        Hey this is
      </div>
      <div className="text-[6.5vh] md:text-[9.5vh] justify-center flex items-center uppercase leading-[9.5vh]  ">
        prakash
        <div className="h-[8vw]  rounded-full overflow-hidden">
          <Video />
        </div>
        jha
      </div>
    </div>
  );
};

export default Toptext;
