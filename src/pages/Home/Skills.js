import React from "react";

const PythonLogo = require("../../assets/logos/PythonLogo.png");
const ReactLogo = require("../../assets/logos/ReactLogo.png");
const TypescriptLogo = require("../../assets/logos/TypescriptLogo.png");
const JsLogo = require("../../assets/logos/JsLogo.png");
const NextLogo = require("../../assets/logos/NextLogo.png");
const TailwindLogo = require("../../assets/logos/TailwindLogo.png");

const MongoDBLogo = require("../../assets/logos/MongoDBLogo.png");
const NodeJSLogo = require("../../assets/logos/NodeJSLogo.png");
const AngularLogo = require("../../assets/logos/angularLogo.png");
const Django = require("../../assets/logos/django-icon.png");
const AWS = require("../../assets/logos/aws-logo.webp");
const Cpp = require("../../assets/logos/cpp.png");

const About = () => {
  return (
    <div
      id="About"
      className="flex mx-12 mt-60 lg:mx-60 items-center justify-center"
    >
      <div className="flex flex-col">
        <div className="flex">
          <div className="flex-1 mr-8">
            <code className="text-[#e6f1ff]">Languages:</code>
            <div className="grid grid-row-3 gap-2 text-sm mt-5 text-brown_vs">
              <div className="flex flex-row mb-3">
                <img
                  src={JsLogo}
                  alt="Js Logo"
                  className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
                />
                <code>JavaScript</code>
              </div>
              <div className="flex flex-row mb-3">
                <img
                  src={PythonLogo}
                  alt="Js Logo"
                  className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
                />
                <code>Python </code>
              </div>
              <div className="flex flex-row mb-3">
                <img
                  src={TypescriptLogo}
                  alt="Js Logo"
                  className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
                />
                <code>TypeScript</code>
              </div>
              <div className="flex flex-row mb-3">
                <img
                  src={Cpp}
                  alt="Js Logo"
                  className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
                />
                <code>C++</code>
              </div>
            </div>
          </div>

          <div className="flex-1 mr-8">
            <code className="text-[#e6f1ff]">Frameworks:</code>
            <div className="grid grid-rows-3 gap-2 text-sm mt-5 text-brown_vs">
              <div className="flex flex-row mb-3">
                <img
                  src={NextLogo}
                  alt="Next Logo"
                  className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
                />
                <code>Next.js</code>
              </div>
              <div className="flex flex-row mb-3">
                <img
                  src={ReactLogo}
                  alt="Next Logo"
                  className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
                />
                <code>React.js</code>
              </div>
              <div className="flex flex-row mb-3">
                <img
                  src={AngularLogo}
                  alt="Next Logo"
                  className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
                />
                <code>Angular</code>
              </div>
              <div className="flex flex-row mb-3">
                <img
                  src={Django}
                  alt="Next Logo"
                  className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
                />
                <code>Django</code>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <code className="text-[#e6f1ff]">Technologies:</code>
            <div className="grid grid-rows-3 gap-2 text-sm mt-5 text-brown_vs">
              <div className="flex flex-row mb-3">
                <img
                  src={TailwindLogo}
                  alt="Python Logo"
                  className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
                />
                <code>TailwindCss</code>
              </div>
              <div className="flex flex-row mb-3">
                <img
                  src={MongoDBLogo}
                  alt="Python Logo"
                  className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
                />
                <code>MongoDB</code>
              </div>
              <div className="flex flex-row mb-3">
                <img
                  src={NodeJSLogo}
                  alt="Python Logo"
                  className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
                />
                <code>NodeJs</code>
              </div>
              <div className="flex flex-row mb-3">
                <img
                  src={AWS}
                  alt="Python Logo"
                  className="h-5 w-5 ml-3 mr-4 bg-white rounded-full object-fill text-yellow_vs"
                />
                <code>AWS</code>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/abhi-apple"
          >
            <button className="border border-lightblue_vs  text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-auto">
              <code>Explore more about my Skills Through Github !</code>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
