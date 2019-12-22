import React from "../../../node_modules/react";
import Navbar from "../../components/Navbar/Navbar";
import "./homepagestyle.css";
import Footer from "../../components/Footer/Footer";
export default function HomePage() {
  return (
    <>
      <div className="homepage">
        <div className="intro">
          <div>
            <h2 className="hey-im">Hey. I'm Steven.</h2>
          </div>
          <div>
            <h4 className="i-like">I like to create things.</h4>
            <h2>Site under construction...</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
