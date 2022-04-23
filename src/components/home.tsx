import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const contactURL = () => {
  window.open(
    "https://go.thryv.com/site/6fxhrqsm3ixnu4f1/activity/dashboard",
    "_self"
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 50,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

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
                <h2>CONNECT WITH OUR DEMOLITION COMPANY</h2>
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
          <div>
            <header className="App-header-grey">
              <h1 className="Header-maroon">
                Why should you choose us for demolition services?
              </h1>
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
          <h1 className="Header-maroon">Reviews</h1>
          <div className="reviews">
            <Carousel
              responsive={responsive}
              showDots={true}
              autoPlay={true}
              centerMode
              infinite
              arrows={false}
              focusOnSelect={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              <div className="reviews-paddingbottom">
                <text className="italics">
                  They, did a very nice job! He showed up on time, very, neat,
                  organized, and professional. I would highly recommend Quality
                  Removal Services to all my family and friends.
                </text>
                <p className="reviews-names">Domenic P.</p>
              </div>
              <div className="reviews-paddingbottom">
                <text className="italics">
                  Answered my request in a timely manor. Showed up when stated
                  and offered a fair quote for the task. Once I accepted the
                  quote they completed the job quickly.
                </text>
                <p className="reviews-names">Donald H.</p>
              </div>
              <div className="reviews-paddingbottom">
                <text className="italics">
                  On time, professional, got the job done quickly would
                  recommend. In fact I have already recommended them to my
                  family.
                </text>
                <p className="reviews-names">Norma J.</p>
              </div>
              <div className="reviews-paddingbottom">
                <text className="italics">
                  I hired Quality Removal Services after they responded quickly
                  to me and gave me an excellent bid. I will definitely use
                  Quality Removal Services again.
                </text>
                <p className="reviews-names">Jamie P.</p>
              </div>
              <div className="reviews-paddingbottom">
                <text className="italics">
                  Zach was quick to respond, professional, reasonably priced and
                  did great work. Highly recommend.
                </text>
                <p className="reviews-names">Sam D.</p>
              </div>
              <div className="reviews-paddingbottom">
                <text className="italics">
                  Zach was amazing from start to finish! He responded quickly to
                  my inquiry and went above and beyond to accommodate my
                  schedule. Zach and Ron did an amazing job. Excellent service
                  at a very reasonable price!! Would definitely recommend and
                  will use them again when I have a need.
                </text>
                <p className="reviews-names">Danielle R.</p>
              </div>
              <div className="reviews-paddingbottom">
                <text className="italics">
                  Zach did an amazing job removing and hauling away a
                  non-functional sunroom to turn it into a patio space for us.
                  He was exceptionally professional and tidy. Very highly
                  recommended!!!
                </text>
                <p className="reviews-names">Emily D.</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
