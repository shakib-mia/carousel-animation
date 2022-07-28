import gsap from "gsap";
import React from "react";

const PageTwo = () => {
  return (
    <div id="pricing">
      <div className="container pt-sm-5 pt-lg-0 ">
        <h5 className="text-center mt-5 mt-lg-0">Our Price Table</h5>
        <h1 className="text-center">Choose the Best Pack</h1>
        <p className="text-center mb-lg-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, esse!
        </p>

        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 gap-3 justify-content-center text-center">
          <div
            className="col my-auto py-3 py-lg-5 custom-card position-relative"
            id="card1"
          >
            <h5>Silver Pack</h5>
            <h1>$78.00</h1>
            <p>Per/Month</p>
          </div>

          <div
            className="col my-auto py-3 py-lg-5 custom-card position-relative"
            id="card2"
          >
            <h5>Gold Pack</h5>
            <h1 className="text-danger">$174.00</h1>
            <p>Per/Month</p>
          </div>

          <div
            className="col my-auto py-3 py-lg-5 custom-card position-relative"
            id="card3"
          >
            <h5>Platinum Pack</h5>
            <h1>$230.00</h1>
            <p>Per/Month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
