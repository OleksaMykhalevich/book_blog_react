import React from "react";
import "./Header.css";
import facebook from "../Header/imgHeader/facebook.webp";
import twiter from "../Header/imgHeader/twiter.webp";
import logo from "../Header/imgHeader/logo.jpg";
import lupa from "../Header/imgHeader/lupa.png";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo}></img>
          <h2>T.B.L</h2>
        </div>
        <div className="position">
          <div className="headerMenu">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Subscribe</li>
            </ul>
          </div>
          <div className="searchBar">
            <img src={lupa} />
            <input type="search" placeholder="Search.."></input>
          </div>
          <div className="socialBut">
            <img src={twiter}></img>
            <img src={facebook}></img>
          </div>
        </div>
      </div>
    </>
  );
};
