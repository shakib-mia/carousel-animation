import React from "react";
import PageFive from "../Pages/PageFive";
import PageFour from "../Pages/PageFour";
import PageOne from "../Pages/PageOne";
import PageThree from "../Pages/PageThree";
import PageTwo from "../Pages/PageTwo";

const CarouselInner = () => {
  return (
    <div>
      <div class="carousel-item position-absolute active" id="pageOne">
        <PageOne></PageOne>
      </div>
      <div class="carousel-item position-absolute" id="pageTwo">
        <PageTwo></PageTwo>
      </div>
      <div class="carousel-item position-absolute" id="pageThree">
        <PageThree></PageThree>
      </div>
      <div class="carousel-item position-absolute" id="pageFour">
        <PageFour></PageFour>
      </div>
      <div class="carousel-item position-absolute" id="pageFive">
        <PageFive></PageFive>
      </div>
    </div>
  );
};

export default CarouselInner;
