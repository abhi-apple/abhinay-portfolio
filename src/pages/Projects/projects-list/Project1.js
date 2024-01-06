import React from "react";
const GitLogo = require("../../../assets/logos/GitLogo.png");
function Project1() {
  return (
    <div className="flex flex-col">
      <div
        id="Header"
        className=" flex space-x-4 items-center mx-30 pt-40  justify-center w-1/2 text-justify"
      >
        <a
          href="https://threads-ai.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="text-4xl hover:underline  font-bold  text-lightblue_vs">
            Threads Ai
          </h1>
        </a>
        <a
          href="https://github.com/abhi-apple/threads_ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={GitLogo}
            alt="Git Logo"
            className="h-10 w-10 text-yellow_vs "
          />
        </a>
      </div>

      <div className="mx-12 lg:mx-60 my-8">
        <iframe
          title="Threads Ai"
          src="https://drive.google.com/file/d/1dzUZvmPK2yIfkYk5Sb8WsRXKUAyEADoa/preview"
          width="100%"
          height="400"
          allow="autoplay"
          frameborder="0"
        ></iframe>
      </div>

      <div className="mx-12 lg:mx-60 mb-8 text-lightblue_vs">
        <code>
          An Upgraded version of the existing threads app , here you have
          integrated ai to enhance your bio and to get you post get better and
          generate relatable hashtags
        </code>
      </div>

      <a
        href="https://threads-ai.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs ml-60">
          <code>Live Demo</code>
        </button>
      </a>
    </div>
  );
}

export default Project1;
