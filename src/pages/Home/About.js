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
            I am a full-stack developer with a BTech in Computer Science,
            Interned at Knolskape. I worked on a simulation website using
            TypeScript, Grommet, and MongoDB. Previously, I developed a
            test-conducting platform using Angular and Django at StackPro. I
            have built and upgraded an e-commerce site using the MERN stack and
            Next.js, and transitioned the back-end from REST API to GraphQL. At
            Blockmatrix IT Solutions, I contributed to dynamic bidding for an
            NFT trading application and updated a hospital's doctor appointment
            booking site. With over 1100 problems solved on LeetCode, I have a
            500+ day streak and a 1700+ contest rating. My tech stack includes
            Python, JavaScript, HTML, MongoDB, SQL, GraphQL, Node.js, Next.js,
            React.js, and Tailwind CSS. I excel in problem-solving,
            self-learning, and teamwork. My hobbies include upskilling,
            problem-solving, and exploring space and the universe.
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
