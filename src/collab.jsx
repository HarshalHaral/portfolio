import React, { useState } from "react";

const CollaborationSection = () => {
  const [copied, setCopied] = useState(false);

  const email = "harshalharal01@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset message after 2 seconds
  };

  return (
    <div className="collaboration-section text-center">
      <div className="status-indicator">
        <span className="dot"></span> Available for Work
      </div>
      <h1 className="message my-4">
        Let's collaborate and bring your vision to life!
      </h1>
      <div className="email-wrapper my-4">
        <button onClick={copyToClipboard} className="email-button">
          {email}
        </button>
        <p className="copy-message">
          {copied ? "Email address copied!" : "Click to copy email address 👆"}
        </p>
      </div>
      <div className="social">
        <a
          href="https://www.linkedin.com/in/harshalharal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://github.com/HarshalHaral"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
      </div>
    </div>
  );
};

export default CollaborationSection;
