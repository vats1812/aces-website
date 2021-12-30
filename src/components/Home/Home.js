import React from "react";
import upevent from "../../assets/events.jpg";
import "./Home.css";
function Home() {
  return (
    <div>
      <h1 className=" hero__title">We are creatives</h1>

      <section className="egg">
        <div className="section__info">
          <div className="section__content">
            <h1 className="section__title">We are the Future</h1>
            <p className="section__para">
              We create the future. We are association of computer engineering
              students.We organize various technical and non technical
              event,workshop,social events etc.
            </p>
          </div>
        </div>
        <div className="section__image" id="transform"></div>
      </section>
      <section className="glass">
        <div className="section__info">
          <div className="section__content">
            <h1 className="section__title">Powering Computers</h1>
            <p className="section__para">
              Computer is a part of our nowadays world. More and more we become
              dependent on computers. So far computers haven't overcame peoples'
              brains, but in the near future computers will be more intelligent
              than we could ever dreamed about it.
            </p>
          </div>
        </div>
        <div className="section__image" id="stand"></div>
      </section>
      <section id="upcoming-section">
        <h2 className="upcoming__title">Upcoming Events</h2>
        <div className="upcomings">
          <div className="upcoming">
            <div className="upcoming__image">
              <img src={upevent} alt="events" />
            </div>
            <h2>{`</WEBACES>`}</h2>
            <p className="upcoming__text">
              "Website promotes you 24x7, No employee will do that". Build a
              stylish professional website for a university club. <br /> Win
              amazing prizes and rewards worth thousands of rupees! <br /> Also,
              the best website will be deployed as the official website of ACES!
            </p>
            <button className="upcoming__btn">
              <a href="/">Register Now</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
