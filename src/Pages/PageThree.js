import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";

const PageThree = () => {
  const threeContainer = useRef(null);

  return (
    <div className="pageContainer" id="thirdContainer" ref={threeContainer}>
      <img
        src="https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2017/09/joe-robles-602630-unsplash-min.webp"
        alt=""
        id="thirdImage"
      />

      <div id="thirdCaption">
        <div className="container">
          <div
            className="row row-cols-1 row-cols-lg-3 text-white"
            id="upperText"
          >
            <div className="col my-3 display-4 fw-bold">
              Passionate about apparels and tech stuff
            </div>

            <div className="col my-3 ">
              <h1 className="display-4 fw-bold">1978</h1>
              <p className="text-white col-8">
                We've got our first 15 prototypes and everything.
              </p>
            </div>

            <div className="col my-3  display-4 text-white fw-bold">
              Passionate about apparels and tech stuff
            </div>
          </div>
          <hr />
          <div
            className="row row-cols-1 row-cols-lg-4 text-white"
            id="bottomText"
          >
            <div className="col">
              <div className="row align-items-center my-3 my-lg-5">
                <div className="col-2 h1">
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </div>
                <div className="col-10">
                  Everything we create is designed with you in mind.
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row align-items-center my-3 my-lg-5">
                <div className="col-2 h1">
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </div>
                <div className="col-10">
                  Everything we create is designed with you in mind.
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row align-items-center my-3 my-lg-5">
                <div className="col-2 h1">
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </div>
                <div className="col-10">
                  Everything we create is designed with you in mind.
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row align-items-center my-3 my-lg-5">
                <div className="col-2 h1">
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </div>
                <div className="col-10">
                  Everything we create is designed with you in mind.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
