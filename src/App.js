import gsap from "gsap";
import "./App.css";
import Buttons from "./components/Buttons";
import CarouselInner from "./components/CarouselInner";
import Indicators from "./components/Indicators";

function App() {
  const moveCursor = (e) => {
    const cursorRounded = document.querySelector(".rounded");
    const mouseY = e.pageY;
    const mouseX = e.pageX;

    cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  };

  window.addEventListener("mousemove", moveCursor);

  const AnimationHandle = () => {
    const item = document.getElementsByClassName("active");

    console.log(item);

    const currentPage = document.getElementById(`page${item[0]?.id}`);

    console.log(currentPage?.getElementsByClassName("img"));

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
      currentPage?.getElementsByClassName("img"),
      {
        width: "100vw",
      },
      {
        width: "150vw",
        duration: 5,
        delay: 1,
      }
    );
  };

  setTimeout(AnimationHandle, 1000);

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
          <Indicators AnimationHandle={AnimationHandle}></Indicators>

          <CarouselInner AnimationHandle={AnimationHandle}></CarouselInner>
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default App;
