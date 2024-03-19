import React, { useState } from "react";
import Tech from "./tech";
import Courses from "./Courses";

const TechSelect = () => {
  const [active, setActive] = useState(0);

  const courseClass =
    active === 0
      ? "text-center text-neutral-500 text-3xl"
      : "text-center text-white border-b-4 border-sec text-3xl";
  const techClass =
    active === 1
      ? "text-center text-neutral-500 text-3xl"
      : "text-center text-white border-b-4 border-sec text-3xl";
  const shown = active === 0 ? <Tech /> : <Courses />;
  return (
    <>
      <div className="flex justify-center gap-4">
        <h2 className={techClass} onClick={() => setActive(0)}>
          Tecnologias
        </h2>
        <h2 className={courseClass} onClick={() => setActive(1)}>
          Cursos
        </h2>
      </div>
      {shown}
    </>
  );
};

export default TechSelect;
