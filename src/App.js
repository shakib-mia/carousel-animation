import gsap from "gsap";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Buttons from "./components/Buttons";
import CarouselInner from "./components/CarouselInner";
import Indicators from "./components/Indicators";
import Navbar from "./components/Navbar";
import BlogPage from "./Pages/BlogPage";
import HomePage from "./Pages/HomePage";

function App() {
  const [page, setPage] = useState("One");

  const moveCursor = (e) => {
    const cursorRounded = document.querySelector(".rounded-cursor");
    const mouseY = e.pageY;
    const mouseX = e.pageX;

    cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  };

  window.addEventListener("mousemove", moveCursor);

  useEffect(() => {
    const item = document.getElementsByClassName("active");

    gsap.fromTo(
      ".section-heading",
      {
        marginTop: "-10vw",
        opacity: 0,
      },
      {
        marginTop: 0,
        opacity: 1,
        duration: 2.5,
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
        duration: 2.5,
      }
    );

    window.addEventListener("scroll", () => {
      setPage(item[0]?.id);
      gsap.fromTo(
        ".section-heading",
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
          duration: 0.5,
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
          duration: 1,
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
          duration: 1.5,
          scrollTrigger: {
            trigger: "#card1",
          },
          smoothOrigin: true,
        }
      );

      gsap.fromTo(
        "#blog-1",
        {
          top: "10rem",
          opacity: 0,
          delay: 1,
        },
        {
          top: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: "#latestNewsContainer",
          },
        }
      );
      gsap.fromTo(
        "#blog-2",
        {
          top: "10rem",
          opacity: 0,
        },
        {
          top: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: "#latestNewsContainer",
          },
          smoothOrigin: true,
        }
      );
      gsap.fromTo(
        "#blog-3",
        {
          top: "10rem",
          opacity: 0,
        },
        {
          top: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: "#latestNewsContainer",
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
        ".thirdHeading",
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

      gsap.fromTo(
        "#contactHeader",
        {
          top: "50vh",
        },
        {
          top: "0vh",
          duration: 1,
          smoothOrigin: true,
        }
      );
      gsap.fromTo(
        "#contact",
        {
          top: "70vh",
        },
        {
          top: "0vh",
          duration: 1,
          delay: 1,
          smoothOrigin: true,
        }
      );

      gsap.fromTo(
        "#about-text",
        {
          left: "110vw",
        },
        {
          left: 0,
          duration: 1,
          smoothOrigin: true,
        }
      );
      gsap.fromTo(
        "#about-img",
        {
          left: "-110vw",
        },
        {
          left: 0,
          duration: 1,
          smoothOrigin: true,
        }
      );

      gsap.fromTo(
        "blogButton",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          delay: 3,
          scrollTrigger: {
            trigger: "#latestNewsContainer",
          },
        }
      );
    });
  }, [page]);
  return (
    <div>
      <Navbar textColorCondition={page}></Navbar>
      <Routes>
        <Route
          path="/"
          element={<HomePage setPage={setPage}></HomePage>}
        ></Route>
        <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
      </Routes>
      <p className="text-center fixed-bottom py-2 bg-dark text-white">
        &copy; 2022 All Rights Reserved by Longtail Logistics
      </p>
    </div>
  );
}

export default App;
