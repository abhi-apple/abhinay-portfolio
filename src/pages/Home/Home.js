import React, { useState } from "react";
import MobileMenu from "../MobileMenu";
import LeftBar from "../LeftBar";
import Homenav from "./HomeNav";
import Header from "./Header";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Skills from "./Skills";
const Home = () => {
  const [showPage, setShowPage] = useState("home");
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
          <Homenav
            hidePage={hidePage}
            setHidePage={setHidePage}
            showPage={showPage}
            setShowPage={setShowPage}
          />
        </div>
        {showPage === "home" ? (
          <>
            <Header id="Header" />
          </>
        ) : showPage === "about" ? (
          <About id="About" />
        ) : showPage === "resume" ? (
          <Resume id="Resume" />
        ) : showPage === "skills" ? (
          <Skills id="skills" />
        ) : showPage === "contact" ? (
          <Contact id="Contact" />
        ) : null}
      </div>
    </div>
  );
};

export default Home;
