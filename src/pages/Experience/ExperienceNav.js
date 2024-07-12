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

const ExperienceNav = ({ showPage, setShowPage, hidePage, setHidePage }) => {
  return (
    <div className="flex flex-row h-full">
      {showPage === "experienceHeader" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("experienceHeader");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Experience.js
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("experienceHeader");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Experience.js
        </Container>
      )}
      {hidePage.includes("knolskape") ? null : showPage === "knolskape" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("knolskape");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          knolskape.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("experienceHeader");
              setHidePage((prevState) => [...prevState, "knolskape"]);
            }}
          />
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("knolskape");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          knolskape.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("experienceHeader");
              setHidePage((prevState) => [...prevState, "knolskape"]);
            }}
          />
        </Container>
      )}
      {hidePage.includes("stackpro") ? null : showPage === "stackpro" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("stackpro");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Stackpro.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("experienceHeader");
              setHidePage((prevState) => [...prevState, "stackpro"]);
            }}
          />
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("stackpro");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Stackpro.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("experienceHeader");
              setHidePage((prevState) => [...prevState, "stackpro"]);
            }}
          />
        </Container>
      )}
      {hidePage.includes("blockmatrix") ? null : showPage === "blockmatrix" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("blockmatrix");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          blockmatrix.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("experienceHeader");
              setHidePage((prevState) => [...prevState, "blockmatrix"]);
            }}
          />
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("blockmatrix");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          blockmatrix.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("experienceHeader");
              setHidePage((prevState) => [...prevState, "blockmatrixrix"]);
              // console.log(hidePage);
            }}
          />
        </Container>
      )}
    </div>
  );
};
export default ExperienceNav;
