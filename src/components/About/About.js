import React, { useEffect } from "react";
import nirma from "../../assets/nirma.png";
import aces from "../../assets/logo.png";
import mission from "../../assets/mission.jpg";
import vision from "../../assets/vision.jpg";
import faculty1 from "../../assets/F1.jpg";
import faculty2 from "../../assets/F2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

import "./About.css";

function About() {
  useEffect(() => {
    AOS.init({ easing: "ease-in-out", mirror: true });
  }, []);
  return (
    <div>
      <div className="abt_cont">
        <div className="abt_mainhead">
          <h1>About Us</h1>
        </div>
        <div className="abt_body1" data-aos="flip-up">
          <div className="abt_img">
            <img src={nirma} alt="Nirma" />
          </div>
          <div className="abt_content1">
            <h2>About Nirma University</h2>
            <p>
              Established in the year 2003, the Nirma University, Ahmedabad is a
              research-oriented, student-centric, multidisciplinary,
              not-for-profit state private university. Within a short period of
              its existence, it has emerged as a nationally renowned higher
              education institution. The University and its constituent
              institutes are highly ranked by different ranking agencies.
            </p>
            <br />
            <p>
              Nirma University is duly recognised by the University Grants
              Commission (UGC) under Section 2 (f) of the UGC Act. The
              University is accredited by the National Assessment and
              Accreditation Council (NAAC). The University is a member of
              Association of Indian Universities (AIU) and the Association of
              Commonwealth Universities (ACU).
            </p>
          </div>
        </div>
        <div className="abt_faculty" data-aos="flip-down">
          <h1>Faculty Advisors</h1>
          <div className="faculty_body">
            <div className="f1">
              <div className="faculty_img">
                <img src={faculty1} alt="faculty" />
              </div>
              <div className="faculty_name">Pooja Shah</div>
            </div>
            <div className="f2">
              <div className="faculty_img">
                <img src={faculty2} alt="faculty" />
              </div>
              <div className="faculty_name">Sapan Sir</div>
            </div>
          </div>
        </div>
        <div className="abt_body2" data-aos="flip-up">
          <div className="abt_img">
            <img src={aces} alt="ACES" />
          </div>
          <div className="abt_content2">
            <h2>About ACES Nirma University</h2>
            <p>
              Association of Computer Engineering Students (ACES), was
              established in 2001 by the Department of Computer Science and
              Engineering. All the students of the Department are members of
              ACES. ACES aims to make students technically stronger by
              organising various workshops and seminars on the latest
              technologies. The organisation also contributes to the betterment
              of society by organising socially relevant technical activities.{" "}
            </p>
          </div>
        </div>
        <div className="abt_body3" data-aos="flip-down">
          <div className="abt_img">
            <img src={mission} alt="ACES" />
          </div>
          <div className="abt_content3">
            <h2>Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis omnis sapiente commodi ratione officia totam quas
              voluptatibus accusantium ut sunt delectus, tempora architecto
              molestiae repellendus rerum ab sequi? Consequatur nam pariatur
              impedit iusto, saepe culpa, explicabo facere est doloremque quis
              nemo minima tenetur optio similique cum fuga omnis perferendis.
              Neque tempore rerum voluptatum asperiores voluptate, numquam
              doloribus laborum distinctio! Vitae!
            </p>
          </div>
        </div>
        <div className="abt_body4" data-aos="flip-up">
          <div className="abt_img">
            <img src={vision} alt="ACES" />
          </div>
          <div className="abt_content4">
            <h2>Vision</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis omnis sapiente commodi ratione officia totam quas
              voluptatibus accusantium ut sunt delectus, tempora architecto
              molestiae repellendus rerum ab sequi? Consequatur nam pariatur
              impedit iusto, saepe culpa, explicabo facere est doloremque quis
              nemo minima tenetur optio similique cum fuga omnis perferendis.
              Neque tempore rerum voluptatum asperiores voluptate, numquam
              doloribus laborum distinctio! Vitae!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
