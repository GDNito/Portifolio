import React from "react";
import Tech from "./tech";
import Courses from "./Courses";
const MobileCourses = () => {
  return (
    <>
      <h2 className="text-4xl text-white ">Tecnologias</h2>
      <Tech />
      <h2 className="text-white text-4xl ">Cursos</h2>
      <Courses />
    </>
  );
};

export default MobileCourses;
