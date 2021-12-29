import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="foo1">
        <h2>
          <Link to="/">ACES</Link>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Architecto
          accusamus earum quia suscipit, labore minima rerum fugit doloribus
          magni corrupti!
        </p>
        <div className="socials__footer">
          <i className="bx bxl-facebook-circle"> </i>
          <i className="bx bxl-instagram"> </i>
          <i className="bx bxl-twitter"> </i>
          <i className="bx bxl-youtube"> </i>
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
  );
}

export default Footer;
