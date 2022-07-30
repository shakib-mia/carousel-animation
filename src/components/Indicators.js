import React from "react";

const Indicators = ({ changePage }) => {
  return (
    <ol class="carousel-indicators">
      <li
        data-bs-target="#vertical-carousel"
        onClick={() => changePage("One")}
        id="One"
        data-bs-slide-to="0"
        class="active"
      ></li>
      <li
        data-bs-target="#vertical-carousel"
        onClick={() => changePage("Two")}
        id="Two"
        data-bs-slide-to="1"
      ></li>
      <li
        data-bs-target="#vertical-carousel"
        onClick={() => changePage("Three")}
        id="Three"
        data-bs-slide-to="2"
      ></li>
      <li
        data-bs-target="#vertical-carousel"
        onClick={() => changePage("Four")}
        id="Four"
        data-bs-slide-to="3"
      ></li>
      <li
        data-bs-target="#vertical-carousel"
        onClick={() => changePage("Five")}
        id="Five"
        data-bs-slide-to="4"
      ></li>
      <li
        data-bs-target="#vertical-carousel"
        onClick={() => changePage("Six")}
        id="Six"
        data-bs-slide-to="5"
      ></li>
    </ol>
  );
};

export default Indicators;
