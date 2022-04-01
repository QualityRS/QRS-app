import React from "react";
import haulingimage from "./hauling.jpeg";

const contactURL = () => {
  window.open(
    "https://go.thryv.com/site/6fxhrqsm3ixnu4f1/activity/dashboard",
    "_self"
  );
};

function Hauling() {
  return (
    <>
      <div>
        <div>
          <header className="App-header">
            <h1 className="Header-maroon">
              GET CONSTRUCTION EQUIPMENT DELIVERED
              <br /> TO YOUR DOOR
            </h1>
            <h2>LEARN MORE ABOUT OUR HAULING SERVICES</h2>
            <p>
              Once you've cleared out your home or yard to make way for a
              remodel, you don't want to get stumped on how to get construction
              equipment to <br /> your work site. Thankfully, Quality Removal
              Services offers hauling services to get heavy supplies to your
              home hassle-free. With over 10 years of
              <br />
              experience, our equipment hauling company knows how to safely
              deliver construction equipment to your home.
              <br />
              <br />
              Are you ready to get started on your remodeling project? <br />
              Call us today at 724-255-1333 to get a free estimate on our
              hauling services.
            </p>
          </header>
        </div>
        <div className="Background-Grey-EmergencyServices">
          <div>
            <img className="image-left" src={haulingimage} alt="haulingimage" />
          </div>
          <div className="Body-left">
            <div className="text-header2 ">
              Take advantage of our
              <br /> comprehensive hauling
              <br /> services.
            </div>
            <div className="text-p">
              <br />
              You'll have all the tools you need to start your remodel when you
              <br />
              choose us for equipment hauling services.
              <br />
              <br />
              Trust us to haul:
              <br />
              <br />
              Our exterior demolition company can remove your:
              <br />
              <ul className="b">
                <li>Construction Materials</li>
                <li>Mini Excavators</li>
                <li>Skid-Steers</li>
              </ul>
              Get in touch with us right away to discuss our demolition and
              <br />
              hauling services.
              <br />
              <br />
              <div>
                <button
                  className="button button1"
                  onClick={contactURL}
                  id="contactbutton"
                >
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hauling;
