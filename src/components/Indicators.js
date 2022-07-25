import React from "react";

const Indicators = () => {
  const activationHandle = (id) => {
    console.log(id);
    const indicators = document.getElementsByClassName("indicator");

    for (const indicator of indicators) {
      if (indicator.id === id) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    }
  };

  return (
    <div className="indicators-container">
      <a
        onClick={() => activationHandle("1")}
        id="1"
        className="indicator"
        href="#first-section"
      >
        &nbsp;
      </a>
      <a
        onClick={() => activationHandle("2")}
        id="2"
        className="indicator"
        href="#two"
      >
        &nbsp;
      </a>
      <a
        onClick={() => activationHandle("3")}
        id="3"
        className="indicator"
        href="#three"
      >
        &nbsp;
      </a>
      <a
        onClick={() => activationHandle("4")}
        id="4"
        className="indicator"
        href="#item4"
      >
        &nbsp;
      </a>
      <a
        onClick={() => activationHandle("5")}
        id="5"
        className="indicator"
        href="#item5"
      >
        &nbsp;
      </a>
    </div>
  );
};

export default Indicators;
