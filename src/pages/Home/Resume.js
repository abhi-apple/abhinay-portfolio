import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div id="Resume" className=" mt-32 mb-4 text-justify ml-52">
      <div className="flex justify-between items-center  ">
        <div className="   justify-center items-center flex">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl  whitespace-nowrap">
            Resume
          </code>
        </div>
        <a
          href="https://drive.google.com/uc?export=download&id=1NQCN3nq7ShLkADGlvmr2_SQGhI6FdEVX"
          download="Abhinay_Resume.pdf"
          className="border border-lightblue_vs text-lightblue_vs p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-auto"
        >
          Download Resume
        </a>
      </div>
      <br />
      <br />
      <iframe
        title="Resume"
        src="https://drive.google.com/file/d/1NQCN3nq7ShLkADGlvmr2_SQGhI6FdEVX/preview"
        width="640"
        height="850"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default Resume;
