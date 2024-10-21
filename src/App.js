import React, { Fragment } from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Project from "./project";
import Experience from "./experience";
import CollaborationSection from "./collab";

function App() {
  return (
    <Fragment>
      <body className="body">
        <Navbar />
        <Hero />
        <Project />
        <Experience />
        <CollaborationSection />
      </body>
    </Fragment>
  );
}

export default App;
