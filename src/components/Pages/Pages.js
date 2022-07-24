import React from "react";
import Item1 from "../Items/Item1";
import Item2 from "../Items/Item2";
import Item3 from "../Items/Item3";
import Item4 from "../Items/Item4";
import Item5 from "../Items/Item5";
import Item6 from "../Items/Item6";

const Pages = () => {
  const moveCursor = (e) => {
    const cursorRounded = document.querySelector(".rounded");
    const mouseY = e.pageY;
    const mouseX = e.pageX;

    cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  };

  window.addEventListener("mousemove", moveCursor);
  return (
    <div id="pages">
      <div class="cursor rounded">+</div>
      <Item1></Item1>
      <Item2></Item2>
      <Item3></Item3>
      <Item4></Item4>
      <Item5></Item5>
      <Item6></Item6>
    </div>
  );
};

export default Pages;
