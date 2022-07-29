import React from "react";
import AboutImg from "../Logos/About .webp";
import quote from "../Logos/quote.png";

const About = () => {
  return (
    <div
      id="about"
      className="d-flex align-items-center justify-content-center"
    >
      <div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="row row-cols-1 row-cols-lg-2 container">
            <div
              className="position-relative col d-flex justify-content-center"
              id="about-img"
            >
              <img src={AboutImg} alt="" className="img-fluid" />
            </div>
            <div className="position-relative col my-auto ps-5" id="about-text">
              <img src={quote} className="col-3 h-25" alt="" />
              <p className="fw-bold h4">
                "Since I joined Refersion five years ago, we doubled our
                customer base-- and we're still growing fast. This progress
                makes it easy to be excited and optimistic about the future"
              </p>
              <p className="text-muted">UserName</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
