import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Item1 = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      {
        height: "150%",
      },
      {
        height: "180%",
        duration: 10,
      }
    );

    gsap.fromTo(
      "#text-container",
      {
        paddingTop: "100%",
      },
      {
        paddingTop: "0%",
        duration: 1,
      }
    );
  });

  return (
    <div id="first-section" className="item">
      <div className="img-section">
        <img
          src="https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2017/09/andre-hunter-359225-min.webp"
          alt=""
          ref={imgRef}
        />
      </div>
      <div className="col-12 col-lg-7" id="text-container">
        <h1 className="display-4">
          Create your unique inspiring colorways to the latest custom releases
          from NikeiD
        </h1>
        <p>
          Uncode's update is all about new tech innovation and slick design
          style.
        </p>
        <a href="javascript:void(0)" className="red-button">
          Buy Now - 59$
        </a>
      </div>
    </div>
  );
};

export default Item1;
