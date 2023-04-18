import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import glassesimoji from "../../img/glassesimoji.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";

const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        <div style={{left: '14rem'}} >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop,Adobe,Adobe xd"}
          />
        </div>
        {/* second card */}
        <div style={{top: "12rem", left: "-4rem"}}>
          <Card 
            emoji={glassesimoji}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </div>
        {/* 3rd */}
        <div style={{top: "19rem", left: "12rem"}}>
          <Card 
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Lorem ispum dummy text are usually use in section where we need some random text"}
          />
        </div>

      </div>
    </div>
  );
};

export default Services;
