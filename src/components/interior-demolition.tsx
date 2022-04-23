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
        <div className="interior-background-image1">
          <div className="transparent-background">
            <header className="white-header">
              <title>{"PITTSBURGH'S FINEST LIGHT DEMOLITION COMPANY"}</title>
              <h1>RENOVATE ANY ROOM YOU WANT WITH US</h1>
              <h2>TAKE ADVANTAGE OF OUR HIGH-QUALITY HOUSE DEMO SERVICES</h2>
            </header>
            <button
              className="button button2"
              onClick={contactURL}
              id="contactbutton"
            >
              CONTACT US
            </button>
          </div>
        </div>
        <div>
          <header className="App-header">
            <h1 className="Header-maroon">
              STRIP YOUR HOME TO ITS BARE BONES BEFORE YOUR REMODEL
            </h1>
            <p>
              <br />
              Your home will be ready for remodeling after our thorough interior
              demolition service.
              <br />
              Take advantage of our high-quality house demolition services, so
              you can remodel your:
              <br />
              <br />
              Book us for demolition services and enjoy:
              <br />
              <br />
              <strong>Kitchen</strong>
              <br />
              <strong>Bathroom</strong>
              <br />
              <strong>Living Room</strong>
              <br />
              <br />
              After tearing down your walls, you'll be in the best position to
              start building new ones. <br />
              We won't damage your home's structure, and we'll haul away debris,
              so you can focus on designing your new room.
            </p>
          </header>
        </div>
      </div>
    </>
  );
}

export default InteriorDemo;
