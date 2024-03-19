import React from "react";
import Frame from "./components/frame";
import TopSideFrame from "./components/TopSideFrame";
import DownSideFrame from "./components/DownSideFrame";

const App = () => {
  return (
    <div
      id="app"
      className="h-screen w-screen bg-prim p-2 sm:p-4  md:p-8 xl:p-12 grid  md:grid-rows-5 md:grid-cols-5 gap-8 xl:gap-10"
    >
      <Frame />
      <TopSideFrame />
      <DownSideFrame />
    </div>
  );
};

export default App;
