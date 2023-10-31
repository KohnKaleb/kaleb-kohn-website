import React from "react";
import { CgCopyright } from "react-icons/cg";

const Footer = () => {
  return (
    <>
      <p style={{ fontSize: '15px'}}>
        <CgCopyright size={15} color="blue" /> author: Kaleb Kohn @
        KalebKohn.com
      </p>
    </>
  );
};

export default Footer;
