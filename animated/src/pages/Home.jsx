import React from "react";
import Video from "../components/home/video";
import Toptext from "../components/home/Toptext";
import Bottomtext from "../components/home/Bottomtext";

const home = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-full relative flex flex-col justify-between">
        <Toptext />
        <Bottomtext />
      </div>
    </div>
  );
};

export default home;
