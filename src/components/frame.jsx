import React, { useState } from "react";
import Textabout from "./Textabout";
import Buttons from "./Buttons";
import MobileCourses from "./MobileCourses";
import MobileProjects from "./MobileProjects";

const Frame = () => {
  const [shown, setShown] = useState(0);
  const options = [<Textabout />, <MobileCourses />, <MobileProjects />]; // Pass 'shown' as a prop to ProjectShowcase
  window.addEventListener("resie", () => {
    setShown(0);
  });
  return (
    <div
      id="leftside"
      className=" border-sec border-4 py-2 px-5 rounded-3xl flex flex-col items-center relative max-h-screen overflow-auto"
    >
      {options[shown]}
      <Buttons
        onAboutClick={() => setShown(0)}
        onProjectClick={() => setShown(2)}
        onCourseClick={() => setShown(1)}
      />
    </div>
  );
};

export default Frame;
