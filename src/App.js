import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Event from "./components/Event/Event";
import Home from "./components/Home/Home";
import Models from "./components/Models/Models";

function App() {
  return (
    <div className="app_conatiner">
      <div className="model">
        <Models/>
      </div>
      <Navbar />
      <div className="app_body">
        <Routes>
          <Route exact path="/" element={<Home />} />{" "}
          <Route exact path="/about" element={<About />} />{" "}
          <Route exact path="/team" element={<Team />} />{" "}
          <Route exact path="/event" element={<Event />} />{" "}
          <Route exact path="/contact" element={<Contact />} />{" "}
        </Routes>{" "}
      </div>{" "}
      <Footer />
    </div>
  );
}

export default App;
