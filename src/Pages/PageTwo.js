import React from "react";

const PageTwo = () => {
  return (
    <div id="pricing">
      <div className="bg-overlay">
        <div className="container pt-5 pt-lg-0">
          <h1 className="secondHeading text-center text-white mt-5 mt-lg-0">
            What We Offer
          </h1>

          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 justify-content-center text-start mt-5">
            <div
              className="col my-auto py-3 py-lg-5 custom-card position-relative"
              id="card1"
            >
              <i className="fa fa-magnifying-glass mb-4"></i>

              <h5>Load Search & Freight Procurement</h5>
              <p className="mt-3 h5">Paperwork & Back Office</p>
              <a
                href="#"
                className="btn rounded-pill px-4 py-2 mt-3 red-button"
              >
                Get Started
              </a>
            </div>

            <div
              className="col my-auto py-3 py-lg-5 custom-card position-relative"
              id="card2"
            >
              <i class="fa fa-dollar-sign mb-4"></i>
              <h5>Negotiating Rate with Shippers & Brokers</h5>
              <p className="mt-3 h5">Invoicing & Billing</p>
              <a
                href="#"
                className="btn rounded-pill px-4 py-2 mt-3 red-button"
              >
                Get Started
              </a>
            </div>

            <div
              className="col my-auto py-3 py-lg-5 custom-card position-relative"
              id="card3"
            >
              <i class="fa fa-phone-volume mb-4"></i>

              <h5>Checked Calls & Transport Updates</h5>
              <p className="mt-3 h5">24/7 Customer Support</p>
              <a
                href="#"
                className="btn rounded-pill px-4 py-2 mt-3 red-button"
              >
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
