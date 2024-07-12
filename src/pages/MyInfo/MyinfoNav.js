import React from "react";
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

const MyInfoNav = ({ showPage, setShowPage, hidePage, setHidePage }) => {
  return (
    <div className="flex flex-row h-full">
      {showPage === "myInfoHeader" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("myInfoHeader");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Home.js
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("myInfoHeader");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Home.js
        </Container>
      )}
      {hidePage.includes("projects") ? null : showPage === "projects" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("projects");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Projects.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage((prevState) => [...prevState, "projects"]);
            }}
          />
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("projects");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Projects.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage((prevState) => [...prevState, "projects"]);
            }}
          />
        </Container>
      )}
      {hidePage.includes("experience") ? null : showPage === "experience" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("experience");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Experience.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage((prevState) => [...prevState, "experience"]);
            }}
          />
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("experience");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Experience.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage((prevState) => [...prevState, "experience"]);
              console.log(hidePage);
            }}
          />
        </Container>
      )}
    </div>
  );
};
export default MyInfoNav;
