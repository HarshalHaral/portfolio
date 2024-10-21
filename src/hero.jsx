import React from "react";

const Hero = () => {
  return (
    <div className="herosection">
      <div className="hero text-center">
        <h1 className="main-heading">
          Namaste👋, I’m <spam class="harshal">Harshal</spam>
          <br />I <span className="research">Research</span>,
          <span className="design"> Design</span> &
          <span className="develope"> Develope</span>
        </h1>
        <h3>
          Based in Pune, I’m a UX/UI Developer blending creativity with tech to
          craft seamless, resonant digital experiences.
        </h3>
        <button type="button lg" class="btn btn-light">
          harshalharal01@gmail.com
        </button>
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
    </div>
  );
};
export default Hero;
