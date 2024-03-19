import React from "react";
import Project from "./Project";

const DownSideFrame = () => {
  return (
    <div
      id="downside"
      className=" border-sec border-4 py-4 px-5 rounded-3xl md:flex flex-col items-center relative hidden"
    >
      <Project />
    </div>
  );
};

export default DownSideFrame;
