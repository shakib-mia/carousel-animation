import gsap from "gsap";
import { useEffect, useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import CarouselInner from "./components/CarouselInner";
import Indicators from "./components/Indicators";
import Navbar from "./components/Navbar";

function App() {
  const [page, setPage] = useState("");

  const moveCursor = (e) => {
    const cursorRounded = document.querySelector(".rounded-cursor");
    const mouseY = e.pageY;
    const mouseX = e.pageX;

    cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  };

  window.addEventListener("mousemove", moveCursor);

  const AnimationHandle = () => {
    const item = document.getElementsByClassName("active");

    const currentPage = document.getElementById(`page${item[0]?.id}`);
    setPage(currentPage);

    gsap.fromTo(
      "#imgFour",
      {
        width: "100%",
        height: "150%",
      },
      {
        width: "150%",
        height: "230%",
        duration: 5,
      }
    );

    gsap.fromTo(
      currentPage?.getElementsByClassName("display-4"),
      {
        marginTop: "-10vw",
        opacity: 0,
      },
      {
        marginTop: 0,
        opacity: 1,
        duration: 1,
      }
    );
    gsap.fromTo(
      currentPage?.getElementsByClassName("paragraph"),
      {
        marginTop: "100vw",
        opacity: 0,
      },
      {
        marginTop: 0,
        opacity: 1,
        duration: 1,
      }
    );

    gsap.fromTo(
      document.getElementById("thirdImage"),
      {
        width: "100vw",
        height: "278vh",
      },
      {
        width: "150vw",
        duration: 8,
        height: "300vh",
      }
    );
    gsap.fromTo(
      document.getElementById("upperText"),
      {
        top: 0,
        left: "-200vw",
      },
      {
        top: 0,
        left: "0",
        duration: 1,
      }
    );
    gsap.fromTo(
      document.getElementById("bottomText"),
      {
        top: 0,
        left: "200vw",
      },
      {
        top: 0,
        left: "0",
        duration: 1,
      }
    );

    gsap.fromTo(
      ".custom-card",
      {
        marginTop: "200vw",
      },
      {
        marginTop: 0,
        duration: 1,
      }
    );

    gsap.fromTo(
      ".blog",
      {
        top: 0,
      },
      {
        top: "33%",
        duration: 1,
      }
    );
  };

  setTimeout(AnimationHandle, 1000);

  return (
    <div>
      <Navbar textColorCondition={page.id}></Navbar>
      <div className="rounded-cursor">+</div>
      <div class="carousel-container justify-content-center fixed-top">
        <div
          id="vertical-carousel"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="false"
          data-bs-wrap="false"
        >
          <Indicators AnimationHandle={AnimationHandle}></Indicators>

          <CarouselInner AnimationHandle={AnimationHandle}></CarouselInner>
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default App;
