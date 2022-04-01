import React from "react";
import exteriordemoimage from "./exteriordemoimage.jpg";

const contactURL = () => {
  window.open(
    "https://go.thryv.com/site/6fxhrqsm3ixnu4f1/activity/dashboard",
    "_self"
  );
};

function ExteriorDemo() {
  return (
    <>
      <div>
        <div>
          <header className="App-header">
            <h1 className="Header-maroon">UNWANTED STRUCTURES? NO PROBLEM</h1>
            <h2>
              GET STARTED WITH EXTERIOR DEMOLITION SERVICES IN WASHINGTON
              COUNTY, PA
            </h2>
            <p>
              <br />
              Are you looking to update your backyard and add an outdoor living
              area? Remove any structures that are in your way with exterior
              demolition
              <br /> We provide emergency services caused by snow services from
              Quality Removal Services.
              <br />
              <br />
              <br />
              You can also free up space to build a home addition. If you have
              an unsightly garage that's ready for a remodel, turn to us for
              garage demolition
              <br />
              services. Call us today at 724-255-1333 for a free estimate.
            </p>
          </header>
        </div>
        <div className="Background-Grey-EmergencyServices">
          <div>
            <img
              className="image-left"
              src={exteriordemoimage}
              alt="exteriordemoimage"
            />
          </div>
          <div className="Body-left">
            <div className="text-header2 ">
              Decks, Sheds, Pergolas,
              <br /> Additions, and More...
            </div>
            <div className="text-header3 ">
              ROTTED OUT, TAKING UP TOO MUCH SPACE, <br /> OR NOT WHAT YOU WANT?
            </div>
            <div className="text-p">
              <br />
              Clear the way for a brand-new backyard when you bring us in to
              <br />
              take out old outdoor structures.
              <br />
              <br />
              Having any structure like decks in the Northern Hemisphere is
              <br />
              tough to maintain because everything rust and rots. Luckily you
              <br />
              have a solution to that, we are professionals and most known for
              <br />
              deck demolition and other structures. We have the know-how, more
              <br />
              experience, and more efficient than any other company through-out
              <br />
              the greater Pittsburgh, PA area.
              <br />
              <br />
              Our exterior demolition company can remove your:
              <br />
              <ul className="b">
                <li>Shed</li>
                <li>Sunroom</li>
                <li>Deck</li>
                <li>Garage</li>
              </ul>
              Don't try to build around unwanted structures. Arrange for our
              <br />
              demolition services today.
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

export default ExteriorDemo;
