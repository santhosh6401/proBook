import React from "react";
import "./../assets/style/MainPage.css";
import ProBookLogo from "./../assets/images/ProBook.png";

function AboutUs() {
  return (
    <div style={{ fontFamily: "monospace" , color:"#581845" }} className="text-center">
      <div>
        <img src={ProBookLogo} alt="ProBook Logo" />
      </div>
      <p>Specially for Alumini Tracking and Invitation Sending ....</p>
    </div>
  );
}

export default AboutUs;
