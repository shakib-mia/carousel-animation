import React from "react";
import AboutImg from "../Logos/Long Tail About.webp";

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
            <div className="position-relative col my-auto" id="about-text">
              <h1 className="sectionHeading">About Us</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              numquam doloremque consequuntur at aspernatur dolore enim
              architecto, ex ullam praesentium fuga repellendus. Blanditiis
              magni numquam eveniet architecto odio, ipsum magnam, harum sit
              pariatur voluptatibus ex sapiente debitis in! Magni odio
              provident, numquam dolorum quaerat obcaecati corporis sequi veniam
              delectus pariatur?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
