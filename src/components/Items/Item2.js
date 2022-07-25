import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Item2 = () => {
  const pageTwo = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(pageTwo.current, {
      opacity: 1,
      top: 70,
      delay: 1,
      duration: 1,
      scrollTrigger: "#tow",
    });
  }, []);
  return (
    <div id="two" style={{ zIndex: -1 }}>
      <div
        className="col-12 col-lg-9 d-flex justify-content-around mx my-5 mx-auto pageTwo"
        ref={pageTwo}
        style={{ top: "100vh" }}
      >
        <div className="show-card">
          <img
            src="https://blogs.icrc.org/law-and-policy/wp-content/uploads/sites/102/2022/03/Drone-image-1096x620.jpg"
            alt=""
            id="left-img"
          />
          <p id="text-1">
            Fitbit Alta HR<sup>TM</sup> Black
            <br />
            <del>$ 100.00</del> $70.00
          </p>
        </div>
        <div className="d-flex flex-column justify-content-between">
          <div className="show-card">
            <img
              src="https://blogs.icrc.org/law-and-policy/wp-content/uploads/sites/102/2022/03/Drone-image-1096x620.jpg"
              alt=""
              id="right-img-1"
            />
            <p id="text-2">
              Fitbit Alta HR<sup>TM</sup> Black
              <br />
              <del>$ 100.00</del> $70.00
            </p>
          </div>
          <div className="show-card">
            <img
              src="https://ichef.bbci.co.uk/news/976/cpsprodpb/1374A/production/_124309697_djigettyimages-1353421153.jpg"
              alt=""
              id="right-img-2"
            />
            <p id="text-3">
              Fitbit Alta HR<sup>TM</sup> Black
              <br />
              <del>$ 100.00</del> $70.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item2;
