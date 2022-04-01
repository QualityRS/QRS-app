import homeSideImage from "./homeSideImage.jpeg";

const contactURL = () => {
  window.open(
    "https://go.thryv.com/site/6fxhrqsm3ixnu4f1/activity/dashboard",
    "_self"
  );
};

function Home() {
  return (
    <>
      <div>
        <div>
          <div className="home-background-image1">
            <div className="transparent-background">
              <header className="white-header">
                <h1>PITTSBURGH'S FINEST LIGHT DEMOLITION COMPANY</h1>
                <h2>SERVICING WASHINGTON & ALLEGHENY COUNTIES</h2>
                <h3>Licensed & Insured</h3>
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
              <h1 className="Header-maroon">GET YOUR HOME RENOVATION-READY</h1>
              <h2>CONNECT WITH OUR DEMOLITION COMPANY</h2>
              <p>
                Are you ready to start the remodeling project you've been
                dreaming of? Take the first step by scheduling demolition
                services with Quality Removal
                <br />
                Services in Washington County, PA. Our locally owned and
                operated demolition company provides reliable demolition and
                hauling services.
                <br />
                <br />
                Let us help clear space inside or outside your property so you
                can get to work on your next remodel. Get a free estimate for
                our residential or commercial <br />
                demolition services by calling 724-255-1333 today.
              </p>
            </header>
          </div>
          <div className="home-background-image2">
            <div className="transparent-background">
              <header className="white-header">
                <h1>
                  TRUST THE PROFESSIONALS TO TRANSPORT THE HEAVY <br /> STUFF
                </h1>
                <h2>
                  USE OUR HAULING SERVICES TO GET CONSTRUCTION EQUIPMENT TO YOUR
                  WORK SITE
                </h2>
              </header>
              <br />
              <button
                className="button button2"
                onClick={contactURL}
                id="contactbutton"
              >
                CONTACT US
              </button>
            </div>
          </div>

          <div className="Background-Grey-EmergencyServices">
            <div>
              <img
                className="image-left"
                src={homeSideImage}
                alt="homeSideImage"
              />
            </div>
            <div className="Body-left">
              <div className="text-header2 ">
                Find reliable services to get
                <br />
                your property construction-ready
              </div>
              <div className="text-p">
                <br />
                Don't worry about making way for your next remodel. Our
                demolition company has it covered. We can clear out everything
                <br />
                from your kitchen to your shed, so you have a clean slate for
                your next remodeling project.
                <br />
                <br />
                Let us get your property construction-ready with our:
                <br />
                <br />
                <ul className="b">
                  <li>Interior demolition services</li>
                  <li>Exterior demolition services</li>
                  <li>Hauling services</li>
                </ul>
                <br />
                Contact us right away to get started.
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
          <div>
            <header className="App-header">
              <h1 className="Header-maroon">
                Why should you choose us for demolition services?
              </h1>
              <h2>CONNECT WITH OUR DEMOLITION COMPANY</h2>
              <p>
                Starting a new remodeling project can be stressful enough. Keep
                it easy and choose us for your demolition and hauling services.
                <br />
                We have over 10 years of experience in the industry, so you can
                trust us to do the job right.
                <br />
                <br />
                Book us for demolition services and enjoy:
                <br />
                <br />
                <strong>Competitive pricing</strong>
                <br />
                <strong> Personable customer service</strong>
                <br />
                <strong>Flexible scheduling</strong>
                <br />
              </p>
            </header>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
