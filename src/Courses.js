import React from "react";

function Courses() {
  return (
    <div className="Courses sec">
      <h3>
        <a
          className="Courses-Link"
          href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/?couponCode=24T2MT111524"
          target="_blank"
          rel="noopener noreferrer"
        >
          React - The Complete Guide{" "}
        </a>{" "}
      </h3>
      <p>Udemy | 2024 - present | 61 hourt</p>
      <hr />

      <h3>
        <a
          className="Courses-Link"
          href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/?couponCode=24T2MT111524"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Complete Web Development Bootcamp
        </a>
      </h3>
      <p>Udemy | 2024 | 61 hours </p>
      <div className="button-container">
        <a
          href="https://github.com/rubasalmuziraee/WebDevelopmentBootcampLabs"
          target="_blank"
          rel="noopener noreferrer"
          className="ViewMyWork-link"
        >
          View My Labs
        </a>
      </div>
      <hr />

      <h3>
        <a
          className="Courses-Link"
          href="https://www.udemy.com/course/docker-from-zero-to-hero/?couponCode=24T2MT111524"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docker, From Zero To Hero
        </a>
      </h3>
      <p>Udemy | 2023 | 10 Hours</p>
      <hr />

      <h3>
        <a
          className="Courses-Link"
          href="https://futurex.nelc.gov.sa/sites/default/files/certificates/2023-02/FX23R95826M5OJ-en-1677391929.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cybersecurity Incident Analysis
        </a>
      </h3>

      <p>Hemaya | 2023 | 65 Hours</p>
    </div>
  );
}

export default Courses;
