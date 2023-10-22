import * as React from "react";
import { Link } from "gatsby";
import "../css/navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/aboutMe" className="nav-link">About</Link>
      <Link to="/resume" className="nav-link">Resume</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </nav>
  );
}