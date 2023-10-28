import React from "react";
import Layout from "../components/layout";
import kaleb_resume from "../static/kaleb_resume.jpg"
import "../css/resume.css"

const Resume = () => {
  return (
    <Layout>
      <div className="image-scroll-container">
        <div className="image-wrapper">
          <img src={kaleb_resume} alt="Kaleb's Resume" />
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
