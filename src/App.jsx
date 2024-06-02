import React, { useState } from "react";
import "./App.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import TrendingFlatRoundedIcon from "@mui/icons-material/TrendingFlatRounded";
import "./Components/Intro";

function App() {

  return (
    <div className="App">
      <header className="header">
        <div className="menu">
          <div className="left-menu">
            <span>
              <CircleRoundedIcon /> <CircleRoundedIcon />
            </span>
          </div>
          <div className="right-menu">
            <span>EN</span>
            <span
              className="contact-us"
              onClick={() => {
                window.open(
                  "mailto:pednekarrohit24@gmail.com?subject=Subject%20Here",
                  "_blank"
                );
              }}
            >
              CONTACT US <ArrowOutwardIcon fontSize="medium" />
            </span>
            <span>
              <MenuRoundedIcon fontSize="medium" />
            </span>
          </div>
        </div>
      </header>
      <main className="main-content">
        <div className="content">
          <div className="content-1">WE CREATE</div>
          <div className="content-2">BEST DIGITAL</div>
          <div className="content-3">PRODUCTS.</div>
        </div>
        <div className="circle-shade"></div>
        <div className="buttons-container">
          <div className="discuss-button">DISCUSS THE PROJECT</div>
          
          <div className="intro-button">
            WHO WE ARE &nbsp; <TrendingFlatRoundedIcon />
          </div>
        
        </div>
      </main>
      <div className="footer-container">
        <div className="left-content">
          <p>
            WE ARE THE LEADERS IN WEB & MOBILE <br />
            DESIGN AND DEVELOPMENT INDUSTRY.
          </p>
        </div>
        <div className="right-content">
          <p className="right-text">
            We create quality content and cool ideas. We create websites,
            applications,3D design, motion design and animation. We bring the
            most daring ideas to life
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
