import * as React from "react";
import NavBar from "./navbar.js";

const AboutPage = () => {
  return (
    <main>
      <NavBar />
      <h1>About</h1>
      <p>Computer Science Major UW-Madison</p>
      <p>
        Passionate about computer science and mostly interested in backend
        development but I like to try and learn all aspects of software
        development
      </p>
      <p>
        I am also a member of the Air Force National Guard and have been in for
        over 4 years now, and have gone on one deployment to Saudi Arabia
      </p>
    </main>
  );
};

export const Head = () => <title>Kaleb's Website</title>;

export default AboutPage;
