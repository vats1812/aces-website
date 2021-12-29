import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import HamBurger from "./HamBurger/HamBurger";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");
  return (
    <>
      <div className="nav_container">
        <Link to="/">
          <div className="nav_logo">
            <img src={Logo} alt="Logo" width={55} height={55} />
            <span> ACES </span>
          </div>
        </Link>
        <div className="nav_option">
          <Link
            className={
              splitLocation[1] === "" ? "nav_titles active_nav" : "nav_titles"
            }
            to="/"
          >
            <div> Home </div>
          </Link>
          <Link
            className={
              splitLocation[1] === "about"
                ? "nav_titles active_nav"
                : "nav_titles"
            }
            to="/about"
          >
            <div> About Us </div>
          </Link>
          <Link
            className={
              splitLocation[1] === "team"
                ? "nav_titles active_nav"
                : "nav_titles"
            }
            to="/team"
          >
            <div> Our Team </div>
          </Link>
          <Link
            className={
              splitLocation[1] === "event"
                ? "nav_titles active_nav"
                : "nav_titles"
            }
            to="/event"
          >
            <div> Events </div>
          </Link>
          <Link
            className={
              splitLocation[1] === "contact"
                ? "nav_titles active_nav"
                : "nav_titles"
            }
            to="/contact"
          >
            <div> Contact Us </div>
          </Link>
          <div className="ham_burger">
            <HamBurger />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
