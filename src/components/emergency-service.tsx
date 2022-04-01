import emergencyimage from "./emergencyimage.jpg";

const contactURL = () => {
  window.open(
    "https://go.thryv.com/site/6fxhrqsm3ixnu4f1/activity/dashboard",
    "_self"
  );
};

function EmergencyService() {
  return (
    <>
      <div>
        <div>
          <header className="App-header">
            <h1 className="Header-maroon">
              IS YOUR PROPERTY SEVERELY DAMAGED?
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
              src={emergencyimage}
              alt="emergencyimage"
            />
          </div>
          <div className="Body-left">
            <div className="text-header2 ">
              When To Call Us For Demolition Services
            </div>
            <div className="text-p">
              <br />
              No matter your reasons for needing our emergency services,
              <br />
              we'll make sure you're in good shape. You should call us if your
              property has:
              <br />
              <ul className="b">
                <li>Damage from a fire</li>
                <li>Damage from a snow or hail storm</li>
                <li>Water damage</li>
              </ul>
              Contact us today to schedule emergency demolition services.
              <br />
              We'll get there as quickly as possible.
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

export default EmergencyService;
