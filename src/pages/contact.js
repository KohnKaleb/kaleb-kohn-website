import React from "react";
import Layout from "../components/layout";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        <a target="_blank" href="mailto:kohnkaleb@gmail.com">
          <FaEnvelope size={30} color="black" />
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/kaleb-kohn-2a1b3622b/"
        >
          <FaLinkedin size={30} color="black" />
        </a>

        <a target="_blank" href="https://github.com/KohnKaleb">
          <FaGithub size={30} color="black" />
        </a>
      </p>
    </Layout>
  );
};

export default Contact;
