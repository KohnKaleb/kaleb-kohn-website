import React from "react";
import "../css/main.css"
import Layout from "../components/layout.js";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutMe = () => {
  return (
  <Layout>
      <div className="outerContainer">
        <div className="container">
          <p className="my-4">
            I grew up in Beaver Dam Wisconsin and moved to Madison Wisconsin for
            high school. I am a rising junior at UW Madison for Computer science. I
            am also a member of the Air National Guard and have been enlisted for
            over 4 years now and have gone on one deployment to Saudi Arabia.
          </p>
          <p>
            In my free time I like to work on varioius coding projects, running, and
            playing video games. I also have a cute kitty named boots who helps keep
            me company when i'm coding.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;
