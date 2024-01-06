import React from "react";

const GitLogo = require("../../../assets/logos/GitLogo.png");
function Project2() {
  return (
    <div className="flex flex-col">
      <div
        id="Header"
        className=" flex space-x-4 items-center mx-30 pt-40  justify-center w-1/2 text-justify"
      >
        <a
          href="https://molow.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="text-4xl hover:underline  font-bold  text-lightblue_vs">
            Molo
          </h1>
        </a>
        <a
          href="https://github.com/abhi-apple/MOLO"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={GitLogo}
            alt="Git Logo"
            className="h-10 w-10 text-yellow_vs "
          />
        </a>
      </div>

      <div className="mx-12 lg:mx-60 my-8">
        <iframe
          title="Threads Ai"
          src="https://drive.google.com/file/d/1JkDFp7C8a3bHa0kkb2y_JyMRdfRLjoBz/preview"
          width="100%"
          height="400"
          allow="autoplay"
          frameborder="0"
        ></iframe>
      </div>

      <div className="mx-12 lg:mx-60 mb-8 text-lightblue_vs">
        <code>
          Molo movie streaming website, built with Next.js and Tailwind CSS,
          offers a user-friendly interface for discovering and enjoying movies.
          Users can effortlessly search for movies by name, access detailed
          information, and create accounts for a personalized experience.
        </code>
        <br />
        <br />
        <code>
          The platform includes a secure user authentication system, enabling
          users to save movies to their 'Watch Later' list. With MongoDB as the
          backend database, we ensure efficient data storage and retrieval. The
          sleek design, responsive layout, and seamless integration with
          external APIs contribute to a captivating and immersive movie-watching
          experience.
        </code>
      </div>

      <a
        href="https://molow.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs ml-60">
          <code>Live Demo</code>
        </button>
      </a>
    </div>
  );
}

export default Project2;
