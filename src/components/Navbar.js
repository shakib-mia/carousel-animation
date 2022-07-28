import React, { useEffect, useState } from "react";
import WhiteLogo from "../Logos/Horizontal/Vectors/Logo_V1_White.svg";
import DarkLogo from "../Logos/Horizontal/Vectors/Logo_V1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ textColorCondition }) => {
  const [textColor, setTextColor] = useState("");
  const [logo, setLogo] = useState("");

  const clickingSystem = (id) => {
    document.getElementById(id).click();
  };

  useEffect(() => {
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
        <a class="text-white col-4 col-lg-1" href="#top" id="logo">
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
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 bg-white">
            <li class="nav-item">
              <a
                class={`nav-link ${textColor}`}
                href="#"
                onClick={() => clickingSystem("Two")}
              >
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class={`nav-link ${textColor}`} href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class={`nav-link ${textColor}`} href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class={`nav-link ${textColor}`} href="#">
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
