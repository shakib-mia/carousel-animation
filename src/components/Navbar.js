import React, { useEffect, useState } from "react";
import WhiteLogo from "../Logos/Horizontal/Vectors/Logo_V1_White.svg";
import DarkLogo from "../Logos/Horizontal/Vectors/Logo_V1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

const Navbar = ({ textColorCondition }) => {
  const [textColor, setTextColor] = useState("");
  const [logo, setLogo] = useState("");

  const clickingSystem = (id) => {
    document.getElementById(id).click();
  };

  useEffect(() => {
    const carouselIndicators = document.getElementsByClassName(
      "carousel-indicators"
    );

    carouselIndicators[0].childNodes.forEach((indicator) =>
      indicator.addEventListener("click", () => {
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

        if (
          indicator.id === "One" ||
          indicator.id === "Three" ||
          indicator.id === "Five"
        ) {
          setTextColor("text-light");
          setLogo(WhiteLogo);
        } else {
          setTextColor("text-dark");
          setLogo(DarkLogo);
        }
      })
    );

    if (
      textColorCondition === "One" ||
      textColorCondition === "Three" ||
      textColorCondition === "Five"
    ) {
      setTextColor("text-light");
      setLogo(WhiteLogo);
    } else {
      setTextColor("text-dark");
      setLogo(DarkLogo);
    }
  }, [textColorCondition]);

  return (
    <nav class="navbar navbar-expand-lg fixed-top" style={{ zIndex: 1032 }}>
      <div class="container-fluid">
        <a
          class="text-white col-4 col-lg-1"
          onClick={() => clickingSystem("One")}
          id="logo"
        >
          <img src={logo} alt="" className="img-responsive" />
        </a>
        <button
          class={`navbar-toggler ${textColor}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class={`nav-link ${textColor} cursor-pointer`}
                onClick={() => clickingSystem("Three")}
              >
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class={`nav-link ${textColor}`}>About</a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link ${textColor}`}
                onClick={() => clickingSystem("Two")}
              >
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link ${textColor}`}
                onClick={() => clickingSystem("Four")}
              >
                Blog
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <button class="red-button rounded-pill px-4 py-2">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
