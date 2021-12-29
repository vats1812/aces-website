import React from "react";
import Card from "./Card/Card";
import { Members } from "./Card/Members";
import "./Team.css";
function Team() {
  return (
    <div>
      <div className="team_container">
        <div className="team_info">
          <h1>Our Team</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            nostrum ex, officiis ipsam iusto vitae, numquam fuga at suscipit
            minus repellendus voluptas illum eum blanditiis? Atque aperiam optio
            quisquam laborum amet dicta quae blanditiis?
          </p>
        </div>
        <div className="card">
          {Members.map((member) => (
            <Card
              key={member.image}
              image={member.image}
              name={member.name}
              designation={member.designation}
              mail={member.mail}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
