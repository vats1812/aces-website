import React from "react";
import { Link } from "react-router-dom";
import "./HamBurger.css";

function HamBurger() {
  function handleUncheck() {
    let ham = document.getElementById("ham");
    if (ham) {
      ham.checked = false;
    } else {
      ham.checked = true;
    }
  }
  return (
    <>
      <div className="ham_container center">
        <input type="checkbox" name="ham" id="ham" />
        <label id="ham_label" className="center" htmlFor="ham">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className="ham_option">
          <ul className="center">
            <li className="center">
              <Link to="/">
                <button className="ham_btn" onClick={handleUncheck}>
                  Home
                </button>
              </Link>
            </li>
            <li className="center">
              <Link to="/about">
                <button className="ham_btn" onClick={handleUncheck}>
                  About
                </button>
              </Link>
            </li>
            <li className="center">
              <Link to="/products">
                <button className="ham_btn" onClick={handleUncheck}>
                  Products
                </button>
              </Link>
            </li>
            <li className="center">
              <Link to="/contact">
                <button className="ham_btn" onClick={handleUncheck}>
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HamBurger;
