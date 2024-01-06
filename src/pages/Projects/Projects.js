import React, { useState } from "react";

import MobileMenu from "../MobileMenu";
import LeftBar from "../LeftBar";
import ProjectsNav from "../Projects/ProjectsNav";
import ProjectsHeader from "../Projects/ProjectsHeader";

import Project1 from "./projects-list/Project1";
import Project2 from "./projects-list/Project2";
import Project3 from "./projects-list/Project3";

const Projects = () => {
  const [showPage, setShowPage] = useState("projectsHeader");
  const [hidePage, setHidePage] = useState([]);
  console.log(hidePage);
  return (
    <div id="home" className="App flex h-max bg-[#1e1e1e]">
      <div className="bg-[#262526] fixed h-full hidden lg:block">
        <LeftBar
          hidePage={hidePage}
          setHidePage={setHidePage}
          showPage={showPage}
          setShowPage={setShowPage}
        />
      </div>
      <div className="bg-[#1e1e1e] lg:pl-72 h-full ">
        <div className="lg:hidden">
          <MobileMenu />
        </div>
        <div className="bg-[#424042] h-16 w-full fixed hidden lg:block">
          <ProjectsNav
            hidePage={hidePage}
            setHidePage={setHidePage}
            showPage={showPage}
            setShowPage={setShowPage}
          />
        </div>
        {showPage === "projectsHeader" ? (
          <>
            <ProjectsHeader id="projectsHeader" />
          </>
        ) : showPage === "project1" ? (
          <Project1 id="project1" />
        ) : showPage === "project3" ? (
          <Project3 id="project3" />
        ) : showPage === "project2" ? (
          <Project2 id="project2" />
        ) : null}
      </div>
    </div>
  );
};

export default Projects;
