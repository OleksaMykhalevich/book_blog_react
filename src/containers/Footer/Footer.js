import React from "react";
import "../Main/grid.css";
import "../Footer/Footer.css";
import facebook from "../Footer/imgFooter/facebookWhite.webp";
import twiter from "../Footer/imgFooter/twiterWhite.webp";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <p className="footerTitle">Subscribe here to get my latest posts</p>
          <div className="registrationArea">
            <p>Enter your email here</p>
            <input className="email" type="email" />
            <button className="emailButt">Join</button>
            <div className="pp">
              <p>
                © 2023 by The Book Lover.Created with{" "}
                <a href="https://www.instagram.com/mykhalevich_o/">Oleksiyyy</a>
              </p>
              <div>
                <img src={twiter}></img>
                <img src={facebook}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
