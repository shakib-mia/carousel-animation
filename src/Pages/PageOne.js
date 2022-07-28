import React from "react";
import video from "../../src/video1.mp4";

const PageOne = () => {
  return (
    <div id="firstPageContainer" className="fixed-top">
      <div className="pageContainer" id="firstContainer">
        <div className="pageTextContainer text-white d-flex justify-content-center align-items-center">
          <div className="pageText col-12 col-lg-6 text-center">
            <h1 className="section-heading position-relative">
              Freight Dispatching Simplified
            </h1>
            <div className="paragraph my-2">
              <p>We increase your profits and decrease your worries</p>
              <button className="red-button rounded-pill px-5 py-3">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <video autoplay="autoplay" muted loop width="1024">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default PageOne;
