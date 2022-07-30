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
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#vertical-carousel"
            data-bs-slide="prev"
            id="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#vertical-carousel"
            data-bs-slide="next"
            id="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
