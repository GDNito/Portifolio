import React from "react";

const Buttons = ({ onAboutClick, onCourseClick, onProjectClick }) => {
  return (
    <div className="w-10/12 flex justify-between fixed bottom-16 md:hidden">
      <button
        type="button"
        className="bg-prim border-sec border-2 w-24 text-white rounded-3xl text-sm shadow-lg shadow-sec"
        onClick={onAboutClick}
      >
        Sobre Mim
      </button>
      <button
        type="button"
        className="bg-prim border-sec border-2 w-24 text-white rounded-3xl text-sm shadow-lg shadow-sec"
        onClick={onProjectClick}
      >
        Projetos
      </button>
      <button
        type="button"
        className="bg-prim border-sec border-2 w-24 rounded-3xl text-white text-sm h-9 shadow-lg shadow-sec"
        onClick={onCourseClick}
      >
        Cursos
      </button>
    </div>
  );
};

export default Buttons;
