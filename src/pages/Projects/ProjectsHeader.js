import React from "react";
import expImg from "../../assets/logos/projimg.webp";
function ProjectsHeader() {
  return (
    <div
      id="Header"
      className="mx-52 pt-14 items-center justify-center  text-justify"
    >
      <div className="flex flex-col">
        <code className="text-[#e6f1ff] text-5xl my-5">Projects</code>
        <img
          src={expImg}
          alt="Abhinay's Profile"
          className=" w-screen h-96 mb-4"
        />
      </div>

      <a
        href="https://www.biodrop.io/abhi-apple"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs ml-60">
          <code>Check All Live Sites !</code>
        </button>
      </a>
    </div>
  );
}

export default ProjectsHeader;
