import { useRef } from "react";
import "./App.css";
import PageThree from "./Pages/PageThree";

function App() {
  const pageTwo = useRef(null);

  const moveCursor = (e) => {
    const cursorRounded = document.querySelector(".rounded");
    const mouseY = e.pageY;
    const mouseX = e.pageX;

    cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  };
  window.addEventListener("mousemove", moveCursor);

  window.addEventListener("wheel", (e) => {
    if (e.wheelDeltaY > 0) {
      document.getElementById("prevButton").click();
    } else {
      document.getElementById("nextButton").click();
    }
  });

  return (
    <div>
      <div className="rounded"></div>
      <div class="carousel-container justify-content-center fixed-top">
        <div
          id="vertical-carousel"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="false"
          data-bs-wrap="false"
        >
          <ol class="carousel-indicators">
            <li
              data-bs-target="#vertical-carousel"
              id="one"
              data-bs-slide-to="0"
              class="active"
            ></li>
            <li
              data-bs-target="#vertical-carousel"
              id="two"
              data-bs-slide-to="1"
            ></li>
            <li
              data-bs-target="#vertical-carousel"
              id="three"
              data-bs-slide-to="2"
            ></li>
            <li
              data-bs-target="#vertical-carousel"
              id="four"
              data-bs-slide-to="3"
            ></li>
            <li
              data-bs-target="#vertical-carousel"
              id="five"
              data-bs-slide-to="4"
            ></li>
            <li
              data-bs-target="#vertical-carousel"
              id="six"
              data-bs-slide-to="5"
            ></li>
          </ol>
          <div class="carousel-inner" id="carousel">
            <div class="carousel-item active" id="pageOne">
              <PageThree></PageThree>
            </div>
            <div class="carousel-item" id="pageTwo" ref={pageTwo}>
              <PageThree></PageThree>
            </div>
            <div class="carousel-item" id="pageThree">
              <PageThree></PageThree>
            </div>
            <div class="carousel-item" id="pageFour">
              <PageThree></PageThree>
            </div>
            <div class="carousel-item" id="pageFive">
              <PageThree></PageThree>
            </div>
            <div class="carousel-item" id="pageSix">
              <PageThree></PageThree>
            </div>
          </div>
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
      </div>
    </div>
  );
}

export default App;
