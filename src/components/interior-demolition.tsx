import React from "react";
import interiordemoimage from "./interiordemoimage.jpg";

const contactURL = () => {
  window.open(
    "https://go.thryv.com/site/6fxhrqsm3ixnu4f1/activity/dashboard",
    "_self"
  );
};

function InteriorDemo() {
  return (
    <>
      <div>
        <div>
          <header className="App-header">
            <h1 className="Header-maroon">
              STRIP YOUR HOME TO ITS BARE BONES BEFORE YOUR REMODEL
            </h1>
            <h2>TURN TO US FOR EMERGENCY DEMOLITION SERVICES</h2>
            <p>
              If you're located in either Washington or Allegheny County,
              Quality Removal Services is your source for emergency demolition
              services. <br /> We provide emergency services caused by snow
              storms, hail storms, fires and flooding.
              <br />
              <br />
              Residents and businesses hire us for emergency Demolition
              services. Call today to learn more about what we can do for you.
            </p>
          </header>
        </div>
        <div className="Background-Grey-EmergencyServices">
          <div>
            <img
              className="image-left"
              src={interiordemoimage}
              alt="interiordemoimage"
            />
          </div>
          <div className="Body-left">
            <div className="text-header2 ">
              Renovate any room you want with us
            </div>
            <div className="text-p">
              <br />
              Your home will be ready for remodeling after our thorough interior
              <br />
              demolition service.
              <br />
              <br />
              Take advantage of our high-quality house demolition services, so
              <br />
              you can remodel your:
              <br />
              <ul className="b">
                <li>Kitchen</li>
                <li>Bathroom</li>
                <li>Living Room</li>
              </ul>
              After tearing down your walls, you'll be in the best position to
              start
              <br />
              building new ones. We won't damage your home's structure, and
              <br />
              we'll haul away debris, so you can focus on designing your new
              room.
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

export default InteriorDemo;
