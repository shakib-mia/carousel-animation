import React from "react";
import Buttons from "../components/Buttons";
import CarouselInner from "../components/CarouselInner";
import Indicators from "../components/Indicators";

const HomePage = ({ setPage }) => {
  return (
    <div id="car-container">
      <div className="rounded-cursor">+</div>
      <div class="carousel-container justify-content-center fixed-top">
        <div
          id="vertical-carousel"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="false"
          data-bs-wrap="false"
        >
          <Indicators changePage={setPage}></Indicators>

          <CarouselInner></CarouselInner>
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
