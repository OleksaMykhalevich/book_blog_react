import React from "react";
import "./Header.css";
import facebook from "../Header/imgHeader/facebook.webp";
import twiter from "../Header/imgHeader/twiter.webp";
import logo from "../Header/imgHeader/logo.jpg";
import lupa from "../Header/imgHeader/lupa.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const setNavLinkClass = ({ isActive }) => (isActive ? "nav-link" : "menu-link");

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <div className="header">
        <div className="logo">
          <NavLink className={setNavLinkClass} to="/">
            <img alt="logo" src={logo} />
            <h2>T.B.L</h2>
          </NavLink>
        </div>

        <div className="position">
          <div className={menuActive ? "headerMenu active" : "headerMenu"}>
            <ul>
              <li>
                <NavLink className={setNavLinkClass} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={setNavLinkClass} to="/about">
                  About
                </NavLink>
              </li>
              <li>Subscribe</li>
              <div className="socialBut1">
                <img alt="twiter" src={twiter}></img>
                <img alt="facebook" src={facebook}></img>
              </div>
            </ul>
          </div>
          <div className="searchBar">
            <img alt="lupa" src={lupa} />
            <input type="search" placeholder="Search.."></input>
          </div>
          <div className="socialBut">
            <img alt="twiter" src={twiter}></img>
            <img alt="facebook" src={facebook}></img>
          </div>
          <div
            className="headerBurger"
            onClick={() => setMenuActive(!menuActive)}
          >
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};
