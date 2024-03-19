import React from "react";

const MobileProjectMold = ({
  image,
  projectName,
  projectAbout,
  github,
  site,
}) => {
  return (
    <div id="projects" className="w-full">
      <div className="bg-sec rounded-xl h-90 w-48 p-2 text-white max-h-96">
        <img src={image} alt="" className=" rounded-xl" />
        <h3 className="text-center">{projectName}</h3>
        <h4 className="text-sm text-center">{projectAbout}</h4>
        <button
          className="block bg-prim px-2 rounded-xl mb-2"
          onClick={() => window.open(github, "_blank")}
        >
          Github
        </button>
        <button
          className={
            site != "none"
              ? "block bg-prim px-2 rounded-xl"
              : "none bg-prim px-2 rounded-xl"
          }
          onClick={() => window.open(site, "_blank")}
        >
          Ver Site
        </button>
      </div>
    </div>
  );
};

export default MobileProjectMold;
