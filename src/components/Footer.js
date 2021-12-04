import React from "react";

const Footer = () => {

    const yearOfBirth = (birthYear) =>{
        return birthYear + " - "+ new Date().getFullYear()
    } 
  return (
    <>
      <footer className="container">
        <p>© Pawornwat Tangwattanapornchai {yearOfBirth("2000")}</p>
      </footer>
    </>
  );
};

export default Footer;
