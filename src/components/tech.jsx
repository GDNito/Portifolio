import React from "react";
import css from "../assets/svg/css.svg";
import js from "../assets/svg/js.svg";
import html from "../assets/svg/html.svg";
import react from "../assets/svg/react.svg";
import tailwind from "../assets/svg/tailwind.svg";
import figma from "../assets/svg/figma.svg";

const Tech = () => {
  return (
    <>
      <div id="techs" className="flex flex-wrap m-8 gap-4 justify-center ">
        <img src={css} alt="" />
        <img src={js} alt="" />
        <img src={html} alt="" />
        <img src={react} alt="" />
        <img src={tailwind} alt="" />
        <img src={figma} alt="" />
      </div>
    </>
  );
};

export default Tech;
