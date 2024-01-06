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
      {/* <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Lorem Ipsum</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Masters in Information technology
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • Sept 2014 - July 2017
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Lorem Ipsum</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Lorem - Paris, France{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• July 2017 - Present</code>
            <br />
            <code className="text-sm">
              <br />• Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />• Sed id eros non nisi vulputate eleifend. Vestibulum erat
              ipsum, lacinia ut nibh ut, pulvinar interdum lorem.
              <br />• Aliquam et nisi eu risus ultrices suscipit nec nec quam.
              <br />• Suspendisse pretium fermentum luctus.
              <br />• Maecenas vitae vestibulum ipsum, ut varius diam.
              <br />• Phasellus mattis nunc vel purus maximus.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Nulla tristique luctus lacinia. Nullam ut tortor arcu.
              <br />• Aenean in mi non leo placerat suscipit a eget odio.
              <br />• Vivamus et dolor odio.
              <br />• Suspendisse tempus interdum eros, et bibendum massa tempus
              vitae.
              <br />• Sed in aliquam ligula. Sed eget orci tortor.
              <br />• Pellentesque laoreet laoreet justo, sed efficitur sapien
              tincidunt eu.
              <br />• Nulla tempor nunc eu molestie volutpat. Nunc a accumsan
              dolor.
              <br />• Duis ut congue dui.
            </code>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Resume;
