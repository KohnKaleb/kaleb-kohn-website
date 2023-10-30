import React from "react";
import Layout from "../components/layout";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import "../css/contact.css";

const Contact = () => {
  return (
    <Layout>
      <div className="contact-icons">
        <a target="_blank" href="mailto:kohnkaleb@gmail.com">
          <FaEnvelope size={100} color="black" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/kaleb-kohn-2a1b3622b/">
          <FaLinkedin size={100} color="black" />
        </a>
        <a target="_blank" href="https://github.com/KohnKaleb">
          <FaGithub size={100} color="black" />
        </a>
      </div>
    </Layout>
  );
};

export default Contact;
