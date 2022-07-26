import React, { useRef } from "react";

const PageThree = () => {
  const imgThree = useRef(null);
  const threeContainer = useRef(null);

  return (
    <div className="pageContainer" id="threeContainer" ref={threeContainer}>
      <div className="pageTextContainer text-white d-flex justify-content-center align-items-center">
        <div className="pageText col-6 text-center">
          <h1 className="display-4 fw-bolder">
            Create your unique inspiring colorways to the latest custom releases
            from NikeiD
          </h1>
          <p className="my-5">
            Uncode's update is all about new tech innovation and slick design
            style.
          </p>
          <button className="btn btn-outline-danger rounded-pill px-4 py-2">
            Buy Now - $59
          </button>
        </div>
      </div>
      <img
        src="https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2017/09/andre-hunter-359225-min.webp"
        alt=""
        ref={imgThree}
        id="imgThree"
        className="img"
      />
    </div>
  );
};

export default PageThree;
