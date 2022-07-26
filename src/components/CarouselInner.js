import React from "react";
import PageFive from "../Pages/PageFive";
import PageFour from "../Pages/PageFour";
import PageOne from "../Pages/PageOne";
import PageThree from "../Pages/PageThree";
import PageTwo from "../Pages/PageTwo";

const CarouselInner = ({ AnimationHandle }) => {
  window.addEventListener("scroll", AnimationHandle);

  return (
    <div class="carousel-inner" id="carousel">
      <div class="carousel-item active" id="pageOne">
        <PageOne></PageOne>
      </div>
      <div class="carousel-item" id="pageTwo">
        <PageTwo></PageTwo>
      </div>
      <div class="carousel-item" id="pageThree">
        <PageThree></PageThree>
      </div>
      <div class="carousel-item" id="pageFour">
        <PageFour></PageFour>
      </div>
      <div class="carousel-item" id="pageFive">
        <PageFive></PageFive>
      </div>
    </div>
  );
};

export default CarouselInner;
