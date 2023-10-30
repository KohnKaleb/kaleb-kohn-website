import * as React from 'react';
import "../css/projects.css";
import Layout from "../components/layout";
import runCrafter from "../videos/runCrafter.gif";
import openingChessPractice from "../videos/openingChessPractice.gif";

const projects = () => {
  return (
    <>
      <Layout />
      <div className="gifs-container">
        <div className="gif-container">
          <img src={runCrafter} alt="Run Crafter"/>
        </div>
        <div className="gif-container">
          <img src={openingChessPractice} alt="Opening Chess Practice"/>
        </div>
      </div>
    </>
  );
};

export default projects;
