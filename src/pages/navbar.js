import * as React from "react";
import { Link } from "gatsby";

export default function NavBar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/aboutMe">About</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/contact">Contact</Link>
    </>
  );
}
