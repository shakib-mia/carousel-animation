import React from "react";

const PageTwo = () => {
  return (
    <div id="pricing">
      <div className="bg-overlay">
        <div className="container pt-5 pt-lg-0">
          <h1 className="secondHeading text-center text-white mt-5 mt-lg-0">
            What We Offer
          </h1>

          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 gap-3 justify-content-center text-center mt-5">
            <div
              className="col my-auto py-3 py-lg-5 custom-card position-relative"
              id="card1"
            >
              <h5>Load Search & Freight Procurement</h5>
              <p>Paperwork & Back Office</p>
              <a href="#" className="btn rounded-pill px-3 mt-3 red-button">
                Get Started
              </a>
            </div>

            <div
              className="col my-auto py-3 py-lg-5 custom-card position-relative"
              id="card2"
            >
              <h5>Negotiating Rate with Shippers & Brokers</h5>
              <p>Invoicing & Billing</p>
              <a href="#" className="btn rounded-pill px-3 mt-3 red-button">
                Get Started
              </a>
            </div>

            <div
              className="col my-auto py-3 py-lg-5 custom-card position-relative"
              id="card3"
            >
              <h5>Checked Calls & Transport Updates</h5>
              <p>24/7 Customer Support</p>
              <a href="#" className="btn rounded-pill px-3 mt-3 red-button">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
