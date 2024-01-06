import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { XIcon } from "@heroicons/react/solid";

const JSIcon = require("../../assets/icons/JSIcon.png");

const Container = tw.div`
  h-full 
  flex 
  items-center 
  justify-center
  px-4 
  text-white 
  hover:bg-[#1e1e1e]
  hover:text-yellow_vs
  cursor-pointer
  text-lg
  font-medium
  text-gray-300
`;

const ActiveContainer = tw.div`
  h-full 
  flex 
  items-center 
  justify-center
  px-4 
  text-white 
  bg-[#1e1e1e]
  hover:text-yellow_vs
  cursor-pointer
  text-lg
  font-medium
  text-gray-300
`;

const ProjectsNav = ({ showPage, setShowPage, hidePage, setHidePage }) => {
  // const [hidePage, setHidePage] = useState([]);

  return (
    <div className="flex flex-row h-full">
      {showPage === "projectsHeader" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("projectsHeader");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Projects.js
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("projectsHeader");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Projects.js
        </Container>
      )}
      {hidePage.includes("project1") ? null : showPage === "project1" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("project1");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          project1.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("projectsHeader");
              setHidePage((prevState) => [...prevState, "project1"]);
            }}
          />
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("project1");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          project1.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("projectsHeader");
              setHidePage((prevState) => [...prevState, "project1"]);
            }}
          />
        </Container>
      )}
      {hidePage.includes("project2") ? null : showPage === "project2" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("project2");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          project2.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("projectsHeader");
              setHidePage((prevState) => [...prevState, "project2"]);
            }}
          />
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("project2");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          project2.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("projectsHeader");
              setHidePage((prevState) => [...prevState, "project2"]);
              // console.log(hidePage);
            }}
          />
        </Container>
      )}
      {hidePage.includes("project3") ? null : showPage === "project3" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("project3");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          project3.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("projectsHeader");
              setHidePage((prevState) => [...prevState, "project3"]);
            }}
          />
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("project3");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          project3.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("projectsHeader");
              setHidePage((prevState) => [...prevState, "project3"]);
              // console.log(hidePage);
            }}
          />
        </Container>
      )}
    </div>
  );
};
export default ProjectsNav;
