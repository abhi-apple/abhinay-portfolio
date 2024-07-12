import React from "react";
// import { BriefcaseIcon } from "@heroicons/react/solid";

function Knolskape() {
  return (
    <div
      id="About"
      className="mx-12 mt-40 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="flex flex-col">
          <img
            src="https://th.bing.com/th?id=OLC.u9C+NFL/HRAidw480x360&rs=1&pid=ImgDetMain"
            alt="Abhinay's Profile"
            className="rounded-full w-40 h-40  mb-4"
          />
          <code className="text-lightblue_vs text-3xl">Knolskape</code>
          <code className="text-lightblue_vs text-xl">Software Developer </code>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <ol>
            <li>
              <code>
                1. Software Developer Intern at Knolskape contributing since Jan
                2024
              </code>
            </li>
            <li>
              <code>
                2.Developed an e-commerce site using the MERN stack and later
                upgraded the front-end and partially the back-end using Next.js
                13, enhancing performance and maintainability.
              </code>
            </li>
            <li>
              <code>
                3. Transitioned the back-end architecture from REST API to
                GraphQL, significantly improving the efficiency and flexibility
                of data fetching.
              </code>
            </li>
            <li>
              <code>
                4. Worked on a company simulation website aimed at developing a
                future-ready workforce through experiential learning, utilizing
                TypeScript, Grommet for CSS, and MongoDB for the database.
              </code>
            </li>
            <li>
              <code>
                5. Implemented responsive, user-centric front-end designs and
                ensured cross-browser compatibility.
              </code>
            </li>
            <li>
              <code>
                6. Integrated TypeScript to enhance code quality and
                maintainability through strong typing and improved error
                detection.
              </code>
            </li>
          </ol>

          <a
            href="https://www.linkedin.com/in/abhi-apple/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs ml-60">
              <code>Know More Through Linkedin !</code>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Knolskape;
