import React from "react";
import myImg from "../../assets/logos/abhinayF.gif";

function Header() {
  return (
    <div
      id="Header"
      className="mx-12 lg:mx-60 pt-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div className="flex flex-col">
        <img
          src={myImg}
          alt="Abhinay's Profile"
          className="rounded-full w-40 h-40  mb-4"
        />
        <code className="text-lightblue_vs text-xl">Myself Abhinay</code>
        <code className="text-lightblue_vs text-xl">FullStack Developer </code>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.biodrop.io/abhi-apple"
      >
        <button className="border border-lightblue_vs  text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-auto">
          <code>Check out my Projects !</code>
        </button>
      </a>
    </div>
  );
}

export default Header;
