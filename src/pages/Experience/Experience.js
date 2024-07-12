import React, { useState } from "react";

import MobileMenu from "../MobileMenu";
import LeftBar from "../LeftBar";
import ExperienceHeader from "./ExperienceHeader";
import StackPro from "./StackPro";
import BlockMat from "./BlockMat";
import ExperienceNav from "./ExperienceNav";
import Knolskape from "./Knolskape";

const Experience = () => {
  const [showPage, setShowPage] = useState("experienceHeader");
  const [hidePage, setHidePage] = useState([]);
  return (
    <div id="experience" className="App flex h-max bg-[#1e1e1e]">
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
          <ExperienceNav
            hidePage={hidePage}
            setHidePage={setHidePage}
            showPage={showPage}
            setShowPage={setShowPage}
          />
        </div>
        {showPage === "experienceHeader" ? (
          <>
            <ExperienceHeader id="experienceHeader" />
          </>
        ) : showPage === "knolskape" ? (
          <Knolskape id="knolskape" />
        ) : showPage === "stackpro" ? (
          <StackPro id="stackpro" />
        ) : showPage === "blockmatrix" ? (
          <BlockMat id="blockmatrix" />
        ) : null}
      </div>
    </div>
  );
};

export default Experience;
