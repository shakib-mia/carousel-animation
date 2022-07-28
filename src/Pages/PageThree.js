import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import video from "../../src/Logos/Longtail Logistics 1.mp4";

const PageThree = () => {
  const threeContainer = useRef(null);

  return (
    <div id="firstPageContainer">
      <div className="pageContainer" id="thirdContainer">
        <div className="pageTextContainer text-white d-flex justify-content-center align-items-center">
          <figure
            class="text-center col-6 position-relative"
            id="thirdTextContainer"
          >
            <div id="quotation" className="position-relative">
              <blockquote class="blockquote ">
                <h1>
                  Behind every great leader there was an even greater
                  logistician.
                </h1>
              </blockquote>
              <figcaption class="blockquote-footer text-white text-end me-5">
                M Cox
              </figcaption>
            </div>
            <p id="quote-para" className="position-relative">
              While you are behind the wheel, we will always be right behind
              you.
            </p>
          </figure>
        </div>

        <video autoplay="autoplay" muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default PageThree;
