import * as React from "react";
import { Link } from "gatsby";
import "../css/navbar.css";

export default function NavBar() {
  return (
    <>
      <div className="header">
        <div className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/aboutMe">About</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
}