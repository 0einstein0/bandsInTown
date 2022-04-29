import React from "react";
import "./index.css";
import SearchBand from "./components/SearchBand";

function App() {
  return (
    <div
      data-theme="dark"
      className="App bg-[url('../public/cora.jpg')] bg-local "
    >
      <div
        className="
        min-h-screen
         md:container md:mx-auto p-6"
      >
        <div className="grid  grid-row-2 gap-20">
          <h1 className="text-secondary text-center line-through decoration-8 decoration-zinc-900 opacity-80 font-black font-sans text-5xl lg:text-7xl mt-8 ">
            BANDS IN TOWN
          </h1>
          <SearchBand />
        </div>
      </div>
    </div>
  );
}

export default App;
