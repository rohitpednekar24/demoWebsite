import React from "react";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Intro = () => {
  
  return (
    <div id="intro-anchor">
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
    </div>
    </div>
  );
};

export default Intro;
