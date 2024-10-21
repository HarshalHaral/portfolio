import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container ">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="#">
              <img src="./assets/Favicon-Harshal Haral.png" /> Harshal T.H
            </a>
            <button
              className="resume btn btn-outline-light "
              type="submit"
              //   style={borderRadius : "64px"}
            >
              <a
                href="../assets/Harshal-UX-UI-Resume.pdf" // Link to the resume in the public folder
                download="Harshal_UI-Developer_Resume.pdf" // Optional: customize downloaded file name
                className="download-button"
              >
                Download resume
              </a>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
