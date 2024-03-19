import React from "react";
import oplp from "../assets/oplp.png";

const ProjectShowcase = () => {
  return (
    <div className="py-6 h-full w-full flex">
      <div className="bg-sec rounded-xl h-full w-96 p-2 text-white max-h-96">
        <img src={oplp} alt="" className="h-52 rounded-xl" />
        <h3 className="text-center">One Piece Landing Page</h3>
        <h4 className="text-sm text-center">
          Landing page para pratica e estudos de HTML, CSS e Javascript
          (especialmente o uso do DOM)
        </h4>
        <button
          className="block bg-prim px-2 rounded-xl mb-2"
          onClick={() =>
            window.open(
              "https://github.com/GDNito/OnePiece-LandingPage",
              "_blank"
            )
          }
        >
          Github
        </button>
        <button
          className="block bg-prim px-2 rounded-xl"
          onClick={() =>
            window.open(
              "https://gdnito.github.io/OnePiece-LandingPage/src/",
              "_blank"
            )
          }
        >
          Ver Site
        </button>
      </div>
    </div>
  );
};

export default ProjectShowcase;
