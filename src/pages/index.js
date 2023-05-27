import * as React from "react";
import NavBar from "./navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";

const IndexPage = () => {
  return (
    <main>
      <h1>Kaleb Kohn</h1>
      <NavBar />
    </main>
  );
};

export const Head = () => <title>Kaleb's Website</title>;

export default IndexPage;
