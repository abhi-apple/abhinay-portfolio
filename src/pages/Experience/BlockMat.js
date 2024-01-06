import React from "react";
import { BriefcaseIcon } from "@heroicons/react/solid";
import block from "../../assets/logos/blockmat.png";
function BlockMat() {
  return (
    <div
      id="About"
      className="mx-12 mt-40 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="flex flex-col">
          <img
            src={block}
            alt="Abhinay's Profile"
            className="rounded-full object-contain bg-white w-40 h-40  mb-4"
          />
          <code className="text-lightblue_vs text-3xl">
            BlockMatrix IT Solutions
          </code>
          <code className="text-lightblue_vs text-xl">
            FullStack Developer{" "}
          </code>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <ol>
            <li>
              <code>
                1. Implemented dynamic Bidding Functionality within an NFT
                Trading platform, seamlessly integrating auction mechanics and
                enhancing the landing page for optimal user engagement
              </code>
            </li>
            <li>
              <code>
                2. Led the creation of 80% of Intencity Project's modern
                homepage using ReactJS and TailwindCSS, delivering an engaging
                and high-performance front-end.
              </code>
            </li>
            <li>
              <code>
                3. Developed a resilient cryptocurrency exchange module for
                Zifipay, an app ensuring seamless digital asset trading and
                enhancing user experience.
              </code>
            </li>
            <li>
              <code>
                4. Upgraded the hospital booking site's admin portal from v4 to
                v5 using ReactJs and MaterialUI, introducing streamlined
                hospital registration for improved administrative functionality.
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

export default BlockMat;
