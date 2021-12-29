import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app_conatiner">
      <Navbar />
      <div className="app_body">
        <Routes>
          <Route exact path="/team" element={<Team />} />
        </Routes>
        <Routes>
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
