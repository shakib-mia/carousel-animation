import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import video from "../../src/Logos/Longtail Logistics 1.mp4";

const PageThree = () => {
  const threeContainer = useRef(null);

  return (
    <div id="firstPageContainer">
      <div className="pageContainer" id="firstContainer">
        <div className="pageTextContainer text-white d-flex justify-content-center align-items-center">
          <div className="pageText col-12 col-lg-6 text-center">
            <h1>
              Behind every great leader there was an even greater logistician.
            </h1>
            <h6 className="text-end">- M Cox</h6>
            While you are behind the wheel, we will always be right behind you.
          </div>
        </div>

        <video autoplay="autoplay" muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default PageThree;
