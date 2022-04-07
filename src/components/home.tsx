import homeSideImage from "./homeSideImage.jpeg";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const contactURL = () => {
  window.open(
    "https://go.thryv.com/site/6fxhrqsm3ixnu4f1/activity/dashboard",
    "_self"
  );
};

export const reviews = [
  {
    source: "https://live.staticflickr.com/65535/51987065508_d384769e66_k.jpg",
    src: "https://live.staticflickr.com/65535/51987065508_d384769e66_k.jpg",
    width: 3,
    height: 4,
    title: "Shed Demo Before",
  },
  {
    source: "https://live.staticflickr.com/65535/51985996242_6fa8e4afcb_b.jpg",
    src: "https://live.staticflickr.com/65535/51985996242_6fa8e4afcb_b.jpg",
    width: 3,
    height: 4,
    title: "Shed Demo 2",
  },
  {
    source: "https://live.staticflickr.com/65535/51987065438_8322962779_b.jpg",
    src: "https://live.staticflickr.com/65535/51987065438_8322962779_b.jpg",
    width: 3,
    height: 4,
    title: "Shed Demo 3",
  },
];

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     paritialVisibilityGutter: 60,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     paritialVisibilityGutter: 50,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     paritialVisibilityGutter: 30,
//   },
// };

//

function Home() {
  return (
    <>
      <div>
        <div>
          <div className="home-background-image1">
            <div className="transparent-background">
              <header className="white-header">
                <title>{"PITTSBURGH'S FINEST LIGHT DEMOLITION COMPANY"}</title>
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
              <h1 className="Header-maroon">
                GET YOUR PROPERTY RENOVATION-READY
              </h1>
              <h2>CONNECT WITH OUR DEMOLITION COMPANY</h2>
              <p>
                Are you ready to start the remodeling project you've been
                dreaming of? Take the first step by scheduling demolition
                services with Quality Removal
                <br />
                Services in Washington County, PA. Our locally owned and
                operated demolition company provides reliable demolition
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
                <h1>GET A FREE ESTIMATE</h1>
                <h2>
                  YOU MAY ALSO CONTACT US WITH ANY QUESTIONS YOU MAY HAVE!
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
          {/* <div>
            <Carousel responsive={responsive}>
              <div>
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <p className="legend">Legend 2</p>
              </div>
            </Carousel>
          </div> */}
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
          <div>This is beyond fucking stupid</div>
          <div>
            <header className="App-header">
              <h1 className="Header-maroon">
                Why should you choose us for demolition services?
              </h1>
              <h2>CONNECT WITH OUR DEMOLITION COMPANY</h2>
              <p>
                Starting a new remodeling project can be stressful enough. Keep
                it easy and choose us for your demolition.
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
