import React from "react";
import { Link } from "react-router-dom";
function MyInfoExperience() {
  return (
    <div
      id="Header"
      className="mx-12 lg:mx-60 pt-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div className="flex flex-col">
        <code className="text-lightblue_vs">My Internship </code>
        <code className="text-[#e6f1ff] text-6xl mt-5">Experience</code>
      </div>
      <Link to="/experience">
        <button className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs ">
          <code> Know About Experience !</code>
        </button>
      </Link>
    </div>
  );
}

export default MyInfoExperience;
