import React from "react";
import { BriefcaseIcon } from "@heroicons/react/solid";
function StackPro() {
  return (
    <div
      id="About"
      className="mx-12 mt-40 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="flex flex-col">
          <img
            src="https://pbs.twimg.com/profile_images/1304001486414737408/BGlXbTUA_400x400.jpg"
            alt="Abhinay's Profile"
            className="rounded-full w-40 h-40  mb-4"
          />
          <code className="text-lightblue_vs text-3xl">StackPro</code>
          <code className="text-lightblue_vs text-xl">
            FullStack Developer{" "}
          </code>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <ol>
            <li>
              <code>
                1. Worked on a test-conducting platform similar to HackerRank
                using Angular 14, Tailwind CSS, and Django.
              </code>
            </li>
            <li>
              <code>
                2. Led the translation of Figma designs into a responsive,
                user-centric front-end, implementing OOP principles to
                efficiently structure components across project directories.
              </code>
            </li>
            <li>
              <code>
                3. Engineered a substantial 50% performance improvement in page
                load times through code refactoring, applying advanced DSA
                knowledge to optimize algorithms and data structures.
              </code>
            </li>
            <li>
              <code>
                4. Actively engaged in seamlessly integrating the Django
                back-end with the Angular front-end, ensuring robust data flow,
                API interactions, and system stability.
              </code>
            </li>
            <li>
              <code>
                5. Worked in an Agile development framework, where interactive
                processes, constant feedback loops, and close collaboration with
                all teams and stakeholders facilitated rapid project progress
                and exceptional outcomes.
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

export default StackPro;
