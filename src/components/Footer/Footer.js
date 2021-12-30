import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="foo1">
          <h2>
            <Link to="/">ACES</Link>
          </h2>
          <p>
            Association of Computer Engineering Students (ACES), was established
            in 2001 by the Department of Computer Science and Engineering. All
            the students of the Department are members of ACES.
          </p>
          <div className="socials__footer">
            <a
              href="https://www.facebook.com/aces.itnu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-facebook-circle"> </i>
            </a>
            <a
              href="https://www.instagram.com/aces_it_nu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-instagram"> </i>
            </a>
            <a
              href="https://www.linkedin.com/company/association-of-computer-engineering-students/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"> </i>
            </a>
          </div>
        </div>
        <div className="foo2">
          <h3> Who are we ? </h3>
          <ul>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
            <li>
              <Link to="/about">Mission</Link>
            </li>
          </ul>
        </div>
        <div className="foo3">
          <h3> Pages </h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="foo4">
          <h3> Location </h3>
          <p>
            <a
              href="https://goo.gl/maps/BqXD9puZqrpkX9Fd8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nirma University, SG highway, Ahmedabad, Gujarat, India
            </a>
          </p>
        </div>
      </footer>
      <div className="footer_built">
        Website created by Raj Patel & Vatsal Rabadia
      </div>
    </>
  );
}

export default Footer;
