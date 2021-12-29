import React from "react";
import "./Card.css";
function Card(props) {
  const { image, name, designation, mail } = props;
  let backimg = `${process.env.PUBLIC_URL}/members/${image}.png`;
  let styles = {
    background: `url( ${backimg} )`,
  };
  let email = `mailto:${mail}`;
  return (
    <div>
      <div className="card_container center" style={styles}>
        <div className="card_image center">
          <div className="card_name"> Name: {name} </div>
          <div className="card_desig"> Designation: {designation} </div>
          <div className="card_mail">
            Email:
            <a href={email}> {mail} </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
