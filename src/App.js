import gsap from "gsap";
import ScrollSmoother from "gsap";
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

  useEffect(() => {
    const item = document.getElementsByClassName("active");

    const currentPage = document.getElementById(`page${item[0]?.id}`);
    setPage(currentPage);

    gsap.fromTo(
      ".display-4",
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
      ".paragraph",
      {
        paddingTop: "100vh",
        opacity: 0,
      },
      {
        paddingTop: 0,
        opacity: 1,
        duration: 1,
      }
    );

    window.addEventListener("scroll", () => {
      gsap.fromTo(
        ".display-4",
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
        ".paragraph",
        {
          paddingTop: "100vh",
          opacity: 0,
        },
        {
          paddingTop: 0,
          opacity: 1,
          duration: 1,
        }
      );

      gsap.fromTo(
        "#card1",
        {
          top: "10rem",
          opacity: 0,
          delay: 1,
        },
        {
          top: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: "#pricing",
          },
        }
      );
      gsap.fromTo(
        "#card2",
        {
          top: "10rem",
          opacity: 0,
        },
        {
          top: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: "#card1",
          },
          smoothOrigin: true,
        }
      );
      gsap.fromTo(
        "#card3",
        {
          top: "10rem",
          opacity: 0,
        },
        {
          top: 0,
          opacity: 1,
          duration: 3,
          scrollTrigger: {
            trigger: "#card1",
          },
          smoothOrigin: true,
        }
      );

      gsap.fromTo(
        "#thirdTextContainer",
        {
          top: "100vh",
          opacity: 0,
        },
        {
          top: "0",
          duration: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: "#thirdContainer",
          },
          smoothOrigin: true,
        }
      );

      gsap.fromTo(
        ".text-center",
        {
          marginTop: "20rem",
          opacity: 0,
        },
        {
          marginTop: 0,
          duration: 1,
          opacity: 1,
        }
      );
    });
  }, []);

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
          <Indicators></Indicators>

          <CarouselInner></CarouselInner>
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default App;
