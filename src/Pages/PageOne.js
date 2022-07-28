import React from "react";
import video from "../../src/Logos/Longtail video 2.mp4";

const PageFour = () => {
  return (
    <div id="firstPageContainer">
      <div className="pageContainer" id="firstContainer">
        <div className="pageTextContainer text-white d-flex justify-content-center align-items-center">
          <div className="pageText col-12 col-lg-6 text-center">
            <h1 className="display-4 fw-bolder">
              Freight Dispatching Simplified
            </h1>
            <div className="paragraph">
              <p className="my-5">
                We increase your profits and decrease your worries
              </p>
              <button className="red-button rounded-pill px-4 py-2">
                Buy Now - $59
              </button>
            </div>
          </div>
        </div>

        <video autoplay="autoplay" muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default PageFour;
