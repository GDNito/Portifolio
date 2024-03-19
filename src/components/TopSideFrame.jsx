import React from "react";
import TechSelect from "./TechSelect";

const TopsideFrames = () => {
  return (
    <div
      id="topside"
      className=" border-sec border-4 py-5 px-5 md:block rounded-3xl relative hidden"
    >
      <TechSelect />
    </div>
  );
};

export default TopsideFrames;
