import React from "react";

const Buttons = () => {
  window.addEventListener("wheel", (e) => {
    if (e.wheelDeltaY > 0) {
      document.getElementById("prevButton").click();
    } else {
      document.getElementById("nextButton").click();
    }
  });
  return (
    <div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#vertical-carousel"
        data-bs-slide="prev"
        id="prevButton"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#vertical-carousel"
        data-bs-slide="next"
        id="nextButton"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Buttons;
