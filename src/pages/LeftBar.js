import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const GitLogo = require("../assets/logos/GitLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
const KaggleLogo = require("../assets/logos/Leetcode.webp");
const MailLogo = require("../assets/logos/MailLogo.png");

const JSIcon = require("../assets/icons/JSIcon.png");
const TSIcon = require("../assets/icons/TSIcon.png");
const NextJSIcon = require("../assets/logos/nextjstrans.png");
const ThreadsLogo = require("../assets/logos/threadslogo.png");
const HuluLogo = require("../assets/logos/hululogo.png");
const AppleLogo = require("../assets/logos/applelogo.png");
const StakProLogo = require("../assets/logos/stackpro.jpeg");
const Knolskape = require("../assets/logos/knolskape.jpeg");
const BlockLogo = require("../assets/logos/blockmat.png");
const HomeLogo = require("../assets/logos/homelogo.png");
const AboutLogo = require("../assets/logos/aboutlogo.png");
const SkillsLogo = require("../assets/logos/skillslogo.png");
const ResumeLogo = require("../assets/logos/resumelogo.png");
const Maill = require("../assets/logos/maill.png");

const LeftBar = ({ showPage, setShowPage, hidePage, setHidePage }) => {
  const navigate = useNavigate();
  const [showHometList, setshowHometList] = useState(true);
  const [showProjectsList, setshowProjectsList] = useState(true);

  const [showDetails, setshowDetails] = useState(true);
  const [showExperienceList, setshowExperienceList] = useState(true);
  const handleInfoClick = () => {
    setshowDetails(!showDetails);
    navigate("/");
  };
  const handleHomeClick = () => {
    setshowHometList(!showHometList);
    navigate("/home");
  };
  const handleProjectsClick = () => {
    setshowProjectsList(!showProjectsList);
    navigate("/projects");
  };
  const handleExperienceClick = () => {
    setshowExperienceList(!showExperienceList);
    navigate("/experience");
  };

  const handleHomeInfoClick = (altText) => {
    if (window.location.pathname !== "/home") {
      navigate("/home");
    }
    console.log("came");
    setShowPage(altText);

    setHidePage((prevHidePage) => {
      const hidePageString = String(prevHidePage);
      if (hidePageString.includes(altText)) {
        return hidePageString.replace(altText, "");
      } else {
        return hidePageString;
      }
    });
  };
  const handleProjectsInfoClick = (altText) => {
    // Check if the current route is "/home"
    if (window.location.pathname !== "/projects") {
      // Navigate to "/home"
      navigate("/projects");
    }
    // console.log(hidePage);
    setShowPage(altText);

    setHidePage((prevHidePage) => {
      // console.log(prevHidePage);
      const hidePageString = String(prevHidePage);
      if (hidePageString.includes(altText)) {
        return hidePageString.replace(altText, "");
      } else {
        return hidePageString;
      }
    });
  };
  const handleExperienceInfoClick = (altText) => {
    // Check if the current route is "/home"
    if (window.location.pathname !== "/experience") {
      // Navigate to "/home"
      navigate("/experience");
    }
    // console.log(hidePage);
    setShowPage(altText);

    setHidePage((prevHidePage) => {
      // console.log(prevHidePage);
      const hidePageString = String(prevHidePage);
      if (hidePageString.includes(altText)) {
        return hidePageString.replace(altText, "");
      } else {
        return hidePageString;
      }
    });
  };

  // ... (other code remains the same)

  const HomeInfoItem = ({ icon, altText, projectName }) => (
    <div
      className="ml-12 my-3 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60"
      onClick={() => handleHomeInfoClick(altText)}
    >
      <img src={icon} alt={altText} className="w-7 mr-1 ml-5  text-yellow_vs" />
      <p>{projectName}</p>
    </div>
  );

  const HomeList = ({ projects }) => (
    <div>
      {projects.map((project, index) => (
        <HomeInfoItem key={index} {...project} />
      ))}
    </div>
  );

  const ProjectItem = ({ icon, altText, projectName }) => (
    <div
      className="ml-12 my-3 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60"
      onClick={() => handleProjectsInfoClick(altText)}
    >
      <img src={icon} alt={altText} className="w-7 mr-1 ml-5  text-yellow_vs" />
      <p>{projectName}</p>
    </div>
  );

  const ProjectList = ({ projects }) => (
    <div>
      {projects.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </div>
  );
  const ExperienceItem = ({ icon, altText, projectName }) => (
    <div
      className="ml-12 my-3 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60"
      onClick={() => handleExperienceInfoClick(altText)}
    >
      <img src={icon} alt={altText} className="w-7 mr-1 ml-5  text-yellow_vs" />
      <p>{projectName}</p>
    </div>
  );

  const ExperienceList = ({ projects }) => (
    <div>
      {projects.map((project, index) => (
        <ExperienceItem key={index} {...project} />
      ))}
    </div>
  );

  const homeDetails = [
    { icon: HomeLogo, altText: "home", projectName: "Home" },
    { icon: AboutLogo, altText: "about", projectName: "About" },
    { icon: SkillsLogo, altText: "skills", projectName: "Skills" },
    { icon: ResumeLogo, altText: "resume", projectName: "Resume" },
    { icon: Maill, altText: "contact", projectName: "Contact" },
  ];

  const projects = [
    {
      icon: ThreadsLogo,
      altText: "project1",
      projectName: "Threads-AI",
    },
    {
      icon: HuluLogo,
      altText: "project2",
      projectName: "MOLO ",
    },
    {
      icon: AppleLogo,
      altText: "project3",
      projectName: "Apple-Cart",
    },
  ];

  const experienceDetails = [
    {
      icon: Knolskape,
      altText: "knolskape",
      projectName: "Software Developer Intern",
    },
    {
      icon: StakProLogo,
      altText: "stackpro",
      projectName: "Full Stack Intern",
    },
    {
      icon: BlockLogo,
      altText: "blockmatrix",
      projectName: "Software Developer Intern",
    },
  ];

  return (
    <div className="text-[#a2aabc] overflow-y-scroll text-lg mt-5 flex bg-[#262526] h-full">
      <div>
        <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
          onClick={handleInfoClick}
        >
          {showDetails ? (
            <ChevronDownIcon className="w-7 mr-1" />
          ) : (
            <ChevronRightIcon className="w-7 mr-1" />
          )}
          <p>My Information</p>
        </div>

        {showDetails ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={handleHomeClick}
            >
              {showHometList ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}
              <p>Home</p>
            </div>
            {showHometList ? <HomeList projects={homeDetails} /> : null}

            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              // onClick={() => setshowProjectsList(!showProjectsList)}
              onClick={handleProjectsClick}
            >
              {showProjectsList ? (
                <ChevronDownIcon className="w-7 mr-1 ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1 ml-5" />
              )}
              <p>Projects</p>
            </div>
            {showProjectsList ? <ProjectList projects={projects} /> : null}

            {/* Add Blockchain Projects */}
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              // onClick={() => setshowExperienceList(!showExperienceList)}
              onClick={handleExperienceClick}
            >
              {showExperienceList ? (
                <ChevronDownIcon className="w-7 mr-1 ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1 ml-5" />
              )}
              <p>Experience</p>
            </div>
            {showExperienceList ? (
              <ExperienceList projects={experienceDetails} />
            ) : null}
          </>
        ) : null}

        <div className="fixed bottom-0 py-9 ">
          <div className="flex px-6 space-x-7">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/abhi-apple"
            >
              <img
                src={GitLogo}
                alt="Git Logo"
                className="h-10 bg-white rounded-full  w-10 text-yellow_vs  hover:scale-150"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://leetcode.com/abhinay-thor/"
            >
              <img
                src={KaggleLogo}
                alt="Kaggle Logo"
                className="h-10   rounded-full  w-10 text-yellow_vs  hover:scale-150"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/abhi-apple/"
            >
              <img
                src={LinkedinLogo}
                alt="Linkedin Logo"
                className="h-10 w-10 text-yellow_vs hover:scale-150"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:abhinayreddy0112@gmail.com"
            >
              <img
                src={MailLogo}
                alt="Mail Logo"
                className="h-10 w-10 text-yellow_vs hover:scale-150"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
