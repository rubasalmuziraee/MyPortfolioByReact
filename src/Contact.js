import React from "react";

function Contact() {
  return (
    <div className="contact sec">
      <h2>Contact Information</h2>

      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a classname="myinfo" href="mailto:rubasalmuziraee@gmail.com">
            rubasalmuziraee@gmail.com
          </a>
        </li>
        <li>
          <strong>Phone:</strong> +966535395490
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/ruba-al-muziraee-771420246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin/rubaalmuziraee
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/rubasalmuziraee"
            target="_blank"
            rel="noopener noreferrer"
          >
            githu/rubasalmuziraee
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
