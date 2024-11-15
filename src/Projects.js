import React from "react";

function Projects() {
  return (
    <div className="Projects sec">
      <h3>FoodyFood Website</h3>
      <p>FWeb Development Project | 2024 - Present</p>
      <ul>
        <li>
          -Collaborated with a freelance team to develop a wholesale website for
          Foody Food, ensuring smooth communication and project progression.
        </li>{" "}
        <li>
          {" "}
          Contributed to the development of key features, including product
          catalog, shopping cart, and custom contact form.
        </li>
      </ul>

      <hr />
      <h3>Face Detection Technique</h3>
      <p>Final Year Project | 2022 - 2023</p>
      <ul>
        <li>
          The study aims to develop automatic human face detection from images
          using AI and ML for applications in surveillance and biometrics,
          covering areas like access control, law enforcement, entertainment,
          and personal safety.
        </li>
      </ul>
      <div className="button-container">
        <a
          href="https://github.com/rubasalmuziraee/MyFinalYearProject"
          target="_blank"
          rel="noopener noreferrer"
          className="ViewMyWork-link"
        >
          View My Work
        </a>
      </div>
      <hr />
      <h3>SmartWallet Application </h3>
      <p>Cloud Computing Project | 2021 - 2022</p>
      <ul>
        <li>
          {" "}
          Leading over a group to introduce an Android application to provide
          the user with greater awareness about saving and money management.
        </li>
      </ul>
      <div className="button-container">
        <a
          href="https://github.com/rubasalmuziraee/AppProject"
          target="_blank"
          rel="noopener noreferrer"
          className="ViewMyWork-link"
        >
          View My Work
        </a>
      </div>
      <hr />
      <h3>BeautyGate Website </h3>
      <p>Web Development project | 2020 - 2021</p>
      <ul>
        <li>
          Heading a group to present a website that talks about providing all
          women's beauty needs in one place.
        </li>
      </ul>
      <div className="button-container">
        <a
          href="https://github.com/rubasalmuziraee/WebDevelopmentProject"
          target="_blank"
          rel="noopener noreferrer"
          className="ViewMyWork-link"
        >
          View My Work
        </a>
      </div>
    </div>
  );
}

export default Projects;
