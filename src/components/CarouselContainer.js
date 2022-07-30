import React from "react";
import Buttons from "./Buttons";
import CarouselInner from "./CarouselInner";
import Indicators from "./Indicators";

const CarouselContainer = ({ setPage }) => {
  return (
    <div class="carousel-container justify-content-center fixed-top">
      <div
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
  );
};

export default CarouselContainer;
