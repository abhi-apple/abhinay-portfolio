import React from "react";

function ExperienceHeader() {
  return (
    <div
      id="Header"
      className="mx-52 pt-14 items-center justify-center  text-justify"
    >
      <div className="flex flex-col">
        <code className="text-[#e6f1ff] text-5xl my-5">Experience</code>
        <img
          src="https://images.pexels.com/photos/3183174/pexels-photo-3183174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Abhinay's Profile"
          className=" w-screen h-96 mb-4"
        />
      </div>
      <div className="mx-12  mb-8 text-lightblue_vs">
        <code>
          Recently I have joined a startup named Stackpro as fullstack intern
          where currently I am working an test conducting platform like
          hackerrank and we are using angular for the frontend and Django for
          backend Along with that I have also worked as Full stack intern in my
          2nd year at Blockmatrix IT Solutions. There I have worked on 3
          projects in which 2 were on Fullstack and one was on Blockchain
        </code>
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

export default ExperienceHeader;
