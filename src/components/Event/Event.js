import React from "react";

import "./Event.css";
function Event() {
  return (
    <section>
      <header className="event__banner">
        <h1 className="event__banner__text">Events</h1>
      </header>

      <div className="container">
        <div className="photo-grid ">
          <div className="grid-item card-sq-big ">
            <img src={require(`./IMG_0037.jpg`)} alt="" />
          </div>
          <div className="grid-item">
            <img src={require(`./IMG_0040.jpg`)} alt="" />
          </div>
          <div className="grid-item card-tall">
            <img src={require(`./IMG_0042.jpg`)} alt="" />
          </div>
          <div className="grid-item">
            <img src={require(`./IMG_0043.jpg`)} alt="" />
          </div>
          <div className="grid-item">
            <img src={require(`./IMG_0044.jpg`)} alt="" />
          </div>
          <div className="grid-item">
            <img src={require(`./IMG_0045.jpg`)} alt="" />
          </div>
          <div className="grid-item card-wide">
            <img src={require(`./IMG-20191003-WA0018.jpg`)} alt="" />
          </div>
          <div className="grid-item">
            <img src={require(`./IMG_0037.jpg`)} alt="" />
          </div>
        </div>
      </div>

      <div className="intro">
        <h1>Our Trademark Events</h1>
      </div>

      <section className="events">
        <div className="events__image order-1">
          <img src={require(`./IMG_0037.jpg`)} alt="Event" />
        </div>
        <div className="events__content">
          <h1>Title of the event #1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            eius accusamus ut, nulla architecto consequatur eligendi cum sint
            repellendus sit illum ipsa. Quae, illo atque officia facere suscipit
            quidem nisi. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ratione saepe, eveniet quis, cum consequuntur enim dolorem
            adipisci deleniti consectetur asperiores eum error vel explicabo est
            cumque sunt minus veniam voluptatem alias ad sapiente sit. Tempore,
            ullam. Fugiat accusamus cum necessitatibus.
          </p>
        </div>
      </section>

      <section className="events">
        <div className="events__image">
          <img src={require(`./IMG_0042.jpg`)} alt="Event" />
        </div>
        <div className="events__content">
          <h1>Title of the event #1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            eius accusamus ut, nulla architecto consequatur eligendi cum sint
            repellendus sit illum ipsa. Quae, illo atque officia facere suscipit
            quidem nisi. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ratione saepe, eveniet quis, cum consequuntur enim dolorem
            adipisci deleniti consectetur asperiores eum error vel explicabo est
            cumque sunt minus veniam voluptatem alias ad sapiente sit. Tempore,
            ullam. Fugiat accusamus cum necessitatibus.
          </p>
        </div>
      </section>

      <section className="events">
        <div className="events__image order-1">
          <img src={require(`./IMG_0044.jpg`)} alt="Event" />
        </div>
        <div className="events__content">
          <h1>Title of the event #1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            eius accusamus ut, nulla architecto consequatur eligendi cum sint
            repellendus sit illum ipsa. Quae, illo atque officia facere suscipit
            quidem nisi. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ratione saepe, eveniet quis, cum consequuntur enim dolorem
            adipisci deleniti consectetur asperiores eum error vel explicabo est
            cumque sunt minus veniam voluptatem alias ad sapiente sit. Tempore,
            ullam. Fugiat accusamus cum necessitatibus.
          </p>
        </div>
      </section>

      <section className="events">
        <div className="events__image">
          <img src={require(`./IMG_0045.jpg`)} alt="Event" />
        </div>
        <div className="events__content">
          <h1>Title of the event #1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            eius accusamus ut, nulla architecto consequatur eligendi cum sint
            repellendus sit illum ipsa. Quae, illo atque officia facere suscipit
            quidem nisi. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ratione saepe, eveniet quis, cum consequuntur enim dolorem
            adipisci deleniti consectetur asperiores eum error vel explicabo est
            cumque sunt minus veniam voluptatem alias ad sapiente sit. Tempore,
            ullam. Fugiat accusamus cum necessitatibus.
          </p>
        </div>
      </section>
    </section>
  );
}
export default Event;
