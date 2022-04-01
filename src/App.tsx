import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import fullLogo from "./qrsLogoFull.png";
import Home from "./components/home";
import InteriorDemo from "./components/interior-demolition";
import ExteriorDemo from "./components/exterior-demolition";
import Hauling from "./components/hauling";
import Gallery from "./components/gallery";
import Reviews from "./components/reviews";
import EmergencyService from "./components/emergency-service";
import {
  FaPhoneAlt,
  FaInstagram,
  FaFacebookSquare,
  FaGoogle,
  FaPrint,
  FaEnvelope,
} from "react-icons/fa";

const facebookLink = () => {
  window.open(
    "https://www.facebook.com/Quality-Removal-Services-117133849688848"
  );
};

const googleLink = () => {
  window.open(
    "https://www.google.com/search?hl=en&_ga=2.264488903.992345222.1631018404-1487512567.1623869780&q=Quality+Removal+Services+LLC&ludocid=9607521983387035438&lsig=AB86z5Vo3ZA1BKvJq9SoNtbtKBMp"
  );
};

const instagramLink = () => {
  window.open("https://www.instagram.com/qualityremovalservices/");
};

const contactURL = () => {
  window.open("https://go.thryv.com/site/6fxhrqsm3ixnu4f1/activity/dashboard");
};

const printURL = () => {
  window.print();
};

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <h1 className="Icons">
            <FaPhoneAlt /> &nbsp; (724) 225-1333 Call Now!
            <span className="Large-margin">
              <button className="button3" onClick={facebookLink}>
                <FaFacebookSquare />
              </button>
              <button className="button3" onClick={instagramLink}>
                <FaInstagram />{" "}
              </button>
              <button className="button3" onClick={googleLink}>
                <FaGoogle />
              </button>
              <button className="button3" onClick={contactURL}>
                <FaEnvelope />
              </button>
              <button className="button3" onClick={printURL}>
                <FaPrint />
              </button>
            </span>
          </h1>
        </div>
        <img
          className="Full-logo"
          src={fullLogo}
          alt="qualityRemovalServices"
        />
        <div className="tab">
          <Link to="/">
            <button className="tablinks" id="home">
              HOME
            </button>
          </Link>
          <Link to="emergency-service">
            <button className="tablinks" id="emergency-service">
              EMERGENCY SERVICE
            </button>
          </Link>
          <Link to="interior-demolition">
            <button className="tablinks" id="interior-demolition">
              INTERIOR DEMOLITION
            </button>
          </Link>
          <Link to="exterior-demolition">
            <button className="tablinks" id="exterior-demolition">
              EXTERIOR DEMOLITION
            </button>
          </Link>
          <Link to="hauling">
            <button className="tablinks" id="hauling">
              HAULING
            </button>
          </Link>
          <Link to="gallery">
            <button className="tablinks" id="gallery">
              GALLERY
            </button>
          </Link>

          <Link to="reviews">
            <button className="tablinks" id="reviews">
              REVIEWS
            </button>
          </Link>

          {/* <Link to="contact-us">
            <button
              className="tablinks"
              id="contact-us"
            >
              CONTACT US
            </button>
          </Link> */}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emergency-service" element={<EmergencyService />} />
          <Route path="/interior-demolition" element={<InteriorDemo />} />
          <Route path="/exterior-demolition" element={<ExteriorDemo />} />
          <Route path="/hauling" element={<Hauling />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          {/* <Route path="/contact-us" element={<Contact />} /> */}
        </Routes>
      </div>
      <div className="footer">
        <div className="copyright">
          Copyright © 2022 Quality Removal Services, all rights reserved.
          <br />
          Eighty Four, PA 15330 (724) 255-1333
        </div>
      </div>
    </Router>
  );
}

export default App;
