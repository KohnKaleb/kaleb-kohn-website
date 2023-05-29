import * as React from "react";
import NavBar from "./navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";

const IndexPage = () => {
  return (
    <main>
      <NavBar />
      <p>Hello, my name is Kaleb Kohn and I am a Computer Science Major at UW-Madison.</p>
      <p>I am passionate about computer science and mostly interested in backend development but I like to try and learn all aspects of software development.</p>
    </main>
  );
};

export const Head = () => <title>Kaleb's Website</title>;

export default IndexPage;
