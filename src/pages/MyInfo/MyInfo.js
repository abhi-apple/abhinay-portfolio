import React, { useState } from "react";

import LeftBar from "../LeftBar";
import MobileMenu from "../MobileMenu";

import MyInfoNav from "./MyinfoNav";

import MyinfoHeader from "./MyInfoHeader";
import MyInfoProjects from "./MyInfoProjects";
import MyInfoExperience from "./MyInfoExperience";

const MyInfo = () => {
  const [showPage, setShowPage] = useState("myInfoHeader");
  const [hidePage, setHidePage] = useState([]);
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
          <MyInfoNav
            hidePage={hidePage}
            setHidePage={setHidePage}
            showPage={showPage}
            setShowPage={setShowPage}
          />
        </div>
        {showPage === "myInfoHeader" ? (
          <>
            <MyinfoHeader id="myInfoHeader" />
            {/* <About id="About" />
            <Resume id="Resume" />
            <Contact id="Contact" />{" "} */}
          </>
        ) : showPage === "projects" ? (
          <MyInfoProjects id="projects" />
        ) : showPage === "experience" ? (
          <MyInfoExperience id="Experience" />
        ) : null}
      </div>
    </div>
  );
};

export default MyInfo;
