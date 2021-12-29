import React, { useState, useRef } from "react";
import validator from "validator";
import emailjs from "emailjs-com";

import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  const forms = useRef();
  const serviceid = process.env.REACT_APP_SSID;
  const tempid = process.env.REACT_APP_TEMPID;
  const usid = process.env.REACT_APP_USID;

  const handleClick = (e) => {
    e.preventDefault();

    const addNote = () => {
      emailjs.sendForm(serviceid, tempid, forms.current, usid).then();
    };
    if (form.name.length < 5) {
      alert("Name can't have 5 letters only");
    } else if (form.name.length > 15) {
      alert("Name can't have more than 15 letters");
    } else if (!validator.isMobilePhone(form.number, "any")) {
      alert("Enter Valid Phone Number");
    } else if (!validator.isEmail(form.email)) {
      alert("Enter a valid Email");
    } else if (form.message.length < 30) {
      alert("Message can't have less than 30 letters");
    } else {
      addNote();

      setForm({
        name: "",
        number: "",
        email: "",
        message: "",
      });
      alert("Message Sent");
    }
  };
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="contact">
        <h1>Contact Us</h1>
        <form className="contact__form" ref={forms}>
          <div className="name">
            <h4> Name </h4>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={onChange}
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="number">
            <h4> Phone No. </h4>
            <input
              type="tel"
              name="number"
              id="number"
              value={form.number}
              onChange={onChange}
              placeholder="Enter Your Number"
              required
            />
          </div>
          <div className="email">
            <h4> Email </h4>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={onChange}
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="message">
            <h4> Message </h4>
            <textarea
              type="text"
              name="message"
              id="message"
              value={form.message}
              onChange={onChange}
              placeholder="Enter your Message"
              required
            />
          </div>
          <button type="submit" className="btn" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
      <div>
        <div className="socials">
          <i className="bx bxl-facebook-circle"> </i>
          <i className="bx bxl-instagram"> </i>
          <i className="bx bxl-twitter"> </i>
          <i className="bx bxl-youtube"> </i>
        </div>
      </div>
    </>
  );
}

export default Contact;
