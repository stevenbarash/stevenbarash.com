import React from "react";
import "./about-style.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
export default function About() {
  return (
    <>
      <div className="container">
        <h2 className="title">about.</h2>
        <div className="body">
          <div className="body-text">
            {/* <p>
              My name is Steven Barash, I will be graduating from the University
              of Pittsburgh with B.S. in Information Science, where my
              coursework focused on software development.
            </p>
            <p>
              When I'm not coding I enjoy photography, playing my guitar, and
              learning languages. Besides my native English, I grew up speaking
              Russian, took 1.5 years of Korean in university, and am currently
              self-studying Spanish and Modern Hebrew.
            </p> */}
          </div>
          <div>
            <img src="/media/profile-pic.JPG" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
