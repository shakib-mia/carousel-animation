import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Item3 = () => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const upperText = useRef(null);
  const lowerText = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  /* Call this function with a string containing the ID name to
   * the element containing the number you want to do a count animation on.*/
  function incEltNbr(id) {
    let elt = document.getElementById(id);
    let endNbr = Number(document.getElementById(id).innerHTML);
    incNbrRec(100, endNbr, elt);
  }

  /*A recursive function to increase the number.*/
  function incNbrRec(i, endNbr, elt) {
    if (i <= endNbr) {
      elt.innerHTML = i;
      setTimeout(function () {
        //Delay a bit before calling the function again.
        incNbrRec(i + 18, endNbr, elt);
      }, 1);
    }
  }

  /*Function called on button click*/
  function incNbr() {
    incEltNbr("nbr");
  }

  useEffect(() => {
    gsap.to(imgRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
      },
      top: "-100%",
      width: "150%",
      duration: 5,
    });

    gsap.to(upperText.current, {
      scrollTrigger: {
        trigger: containerRef.current,
      },
      left: "0",
      duration: 1,
    });

    gsap.to(lowerText.current, {
      scrollTrigger: {
        trigger: upperText.current,
      },
      left: "0",
      duration: 1,
    });
  });

  return (
    <div
      className="three"
      id="three"
      ref={containerRef}
      onLoad={incNbr}
      style={{ zIndex: 999 }}
    >
      <div id="red-bg">
        <div className="container col-12 col-md-8 position-relative">
          <div
            className="row"
            ref={upperText}
            style={{ position: "absolute", left: "-100vw" }}
          >
            <h1 className="col-12 col-md-4 my-3">
              Passionate about apparels and tech stuff
            </h1>
            <div className="col-12 col-md-4 my-3">
              <h1 id="nbr">1978</h1>
              <p>We've got our first 15 prototypes and everything.</p>
            </div>
            <div className="col-12 col-md-4 my-3">
              <h1>50K</h1>
              <p>Our beloved actual followers, we feel great about them.</p>
            </div>
          </div>
          <hr className="bg-white" />
          <div
            className="row"
            ref={lowerText}
            id="lower-text"
            style={{ left: "100vw" }}
          >
            <div className="row">
              <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center">
                <i className="fas fa-layer-group fa-3x"></i>
                <p className="col-8">
                  It’s dedication to innovation through experience.
                </p>
              </div>

              <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center">
                <i className="fas fa-layer-group fa-3x"></i>

                <p className="col-8">
                  It’s dedication to innovation through experience.
                </p>
              </div>

              <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center">
                <i className="fas fa-layer-group fa-3x"></i>

                <p className="col-8">
                  It’s dedication to innovation through experience.
                </p>
              </div>

              <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center">
                <i className="fas fa-layer-group fa-3x"></i>

                <p className="col-8">
                  It’s dedication to innovation through experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2017/09/joe-robles-602630-unsplash-min.webp"
        alt=""
        id="third-img"
        ref={imgRef}
        width="100%"
      />
    </div>
  );
};

export default Item3;
