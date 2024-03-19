import React from "react";
import oplp from "../assets/oplp.png";
import MobileProjectMold from "./MobileProjectMold";

const MobileProjects = () => {
  return (
    <>
      <h2 className="text-white text-3xl py-5">Projetos</h2>
      <MobileProjectMold
        image={oplp}
        projectName={"One Piece Landing Page"}
        projectAbout={
          " Landing page para pratica e estudos de HTML, CSS e Javascript"
        }
        github={"https://github.com/GDNito/OnePiece-LandingPage"}
        site={"https://gdnito.github.io/OnePiece-LandingPage/src/"}
      />
    </>
  );
};

export default MobileProjects;
