import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";

const About = () => {
  return (
    <div
      id="About"
      className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
            Experienced FullStack developer skilled in MERN stack with expertise
            in blockchain, AI-integrated e-commerce, and cryptocurrency apps.
            Proficient in ReactJS, NextJS, and Tailwind CSS for seamless UI/UX
            and MongoDB , NodeJS,Express Js , Django for Backend Integrations.
            Solved 1000+ Leetcode problems by maintaining 1+ Year streak,
            showcasing strong problem-solving. Seeking FullStack role to
            contribute at all project stages, leveraging a holistic
            understanding of development processes.
          </code>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/abhi-apple/"
          >
            <button className="border border-lightblue_vs  text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-auto">
              <code>Know More Through Linkedin !</code>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
