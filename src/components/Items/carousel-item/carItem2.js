import React, { useRef } from "react";

const CarItem2 = () => {
  return (
    <div class="carousel-item">
      <img
        src="https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2017/09/josh-nuttall-286507-min-1.webp"
        alt=""
      />
      <div className="car-caption">
        <div className="text-center">
          <h1 className="display-1 font-weight-bold col-7 mx-auto">
            Carefully curated products & designs
          </h1>
          <p className="car-para">
            Award winning manufactured design built quality
          </p>
          <div>
            <a href="#" className="btn rounded-circle px-3 py-2">
              &darr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarItem2;
