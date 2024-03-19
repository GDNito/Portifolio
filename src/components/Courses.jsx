import React from "react";

const courses = ["FMU", "Etec", "Alura", "CNA"];
const locations = ["EAD", "Parque da Juventude", "EAD", "Jaçanã"];
const durations = ["2022 - 2025", "2019 - 2021", "2022", "20xx - 2019"];
const about = [
  "Graduação em Ciencia da Computação",
  "Ensino Médio integrado ao Técnico- Informatica para Internet",
  "Cursos de Desenvolvimento Web",
  "Curso de Inglês com certificado de Cambridge",
];

const Courses = () => {
  const courseItems = courses.map((course, index) => (
    <div
      key={index}
      className="bg-sec w-1/4 min-w-40 min-h-fit max-h-64 text-white flex flex-col gap-2 rounded-xl p-4 text-center"
    >
      <h2 className="text-sm">{course}</h2>
      <h2 className="text-xs">{locations[index]}</h2>
      <h3 className="text-xs">{durations[index]}</h3>
      <h3 className="text-sm md:text-[1.5vw] lg:text-[1.2vw] xl:text-[0.85vw]">
        {about[index]}
      </h3>
    </div>
  ));

  return (
    <div className="h-4/5 box-border m-3 mb-32 flex flex-wrap md:flex-nowrap justify-center gap-2 md:overflow-x-auto">
      {courseItems}
    </div>
  );
};

export default Courses;
