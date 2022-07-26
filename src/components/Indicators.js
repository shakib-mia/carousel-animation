import React from "react";

const Indicators = ({ AnimationHandle }) => {
  return (
    <ol class="carousel-indicators">
      <li
        onClick={AnimationHandle}
        data-bs-target="#vertical-carousel"
        id="One"
        data-bs-slide-to="0"
        class="active"
      ></li>
      <li
        onClick={AnimationHandle}
        data-bs-target="#vertical-carousel"
        id="Two"
        data-bs-slide-to="1"
      ></li>
      <li
        onClick={AnimationHandle}
        data-bs-target="#vertical-carousel"
        id="Three"
        data-bs-slide-to="2"
      ></li>
      <li
        onClick={AnimationHandle}
        data-bs-target="#vertical-carousel"
        id="Four"
        data-bs-slide-to="3"
      ></li>
      <li
        onClick={AnimationHandle}
        data-bs-target="#vertical-carousel"
        id="Five"
        data-bs-slide-to="4"
      ></li>
      <li
        onClick={AnimationHandle}
        data-bs-target="#vertical-carousel"
        id="Six"
        data-bs-slide-to="5"
      ></li>
    </ol>
  );
};

export default Indicators;
