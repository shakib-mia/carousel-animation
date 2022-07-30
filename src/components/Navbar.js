import React, { useEffect, useState } from "react";
import WhiteLogo from "../Logos/Horizontal/Vectors/Logo_V1_White.svg";
import DarkLogo from "../Logos/Horizontal/Vectors/Logo_V1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Navbar = ({ textColorCondition }) => {
  const [textColor, setTextColor] = useState("text-white");
  const [logo, setLogo] = useState("");
  const [button, setButton] = useState("red-button");
  const [togglerColor, setToggler] = useState("text-white");
  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const [toggleBorder, setToggleBorder] = useState("border-light");

  const navbarScrolling = () => {
    if (
      textColorCondition === "One" ||
      textColorCondition === "Three" ||
      textColorCondition === "Four" ||
      textColorCondition === "Six"
    ) {
      setTextColor("text-white");
      setLogo(WhiteLogo);
      setButton("red-button");
      setToggler("text-white");
      setNavbarBg("bg-transparent");
      setToggleBorder("border-light");
    } else {
      setButton("red-button-alt");
      setTextColor("text-dark");
      setLogo(DarkLogo);
      setToggler("text-dark");
      setNavbarBg("bg-lightblue");
      setToggleBorder("border-dark");
    }
  };

  const clickingSystem = (id) => {
    document.getElementById(id).click();
    navbarScrolling();
    if (id === "One" || id === "Three" || id === "Four" || id === "Six") {
      setTextColor("text-white");
      setLogo(WhiteLogo);
      setButton("red-button");
      setToggler("text-white");
      setNavbarBg("bg-transparent");
    } else {
      setButton("red-button-alt");
      setTextColor("text-dark");
      setLogo(DarkLogo);
      setToggler("text-dark");
      setNavbarBg("bg-lightblue");
    }
  };

  useEffect(() => {
    const carouselIndicators = document.getElementsByClassName(
      "carousel-indicators"
    );

    carouselIndicators[0]?.childNodes.forEach((indicator) =>
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
      })
    );

    navbarScrolling();
  }, [textColorCondition]);

  return (
    <nav
      class={`navbar navbar-expand-lg fixed-top ${navbarBg}`}
      style={{ zIndex: 1032 }}
    >
      <div class="container-fluid px-0 px-lg-5 pt-3">
        <Link
          to="/"
          class="text-white col-4 col-lg-2"
          onClick={() => clickingSystem("One")}
          id="logo"
        >
          <img src={logo} alt="" className="img-responsive w-75" />
        </Link>
        <button
          class={`navbar-toggler ${togglerColor} me-3 border border-3 ${toggleBorder}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
        <div class="collapse navbar-collapse w-100" id="navbarTogglerDemo02">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
            <li class="nav-item">
              <a
                class={`nav-link px-4 ${textColor}`}
                onClick={() => clickingSystem("Three")}
              >
                Services
              </a>
            </li>
            <li class="nav-item">
              <a
                onClick={() => clickingSystem("Two")}
                class={`nav-link px-4 ${textColor}`}
              >
                About
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link px-4 ${textColor}`}
                onClick={() => clickingSystem("Three")}
              >
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link px-4 ${textColor}`}
                onClick={() => clickingSystem("Five")}
              >
                Blog
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <a
              href="#fiveContainer"
              onClick={() => clickingSystem("Six")}
              class={`${button} rounded-pill px-4 py-2`}
            >
              Get Started
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
