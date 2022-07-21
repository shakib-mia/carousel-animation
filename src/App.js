import gsap from "gsap";
import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const textRef = useRef(null);

  useEffect(() => {
    console.log(textRef.current);

    gsap.fromTo(
      textRef.current,
      {
        left: "-100vw",
      },
      {
        left: 0,
      }
    );
  });

  const moveCursor = (e) => {
    const cursorRounded = document.querySelector(".rounded");
    const cursorPointed = document.querySelector(".pointed");
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

    cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  };

  window.addEventListener("mousemove", moveCursor);

  return (
    <div id="carouselExample" class="carousel vert slide">
      <div class="cursor rounded">+</div>
      <div class="cursor pointed"></div>
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExample"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExample" data-slide-to="1"></li>
        <li data-target="#carouselExample" data-slide-to="2"></li>
        <li data-target="#carouselExample" data-slide-to="3"></li>
        <li data-target="#carouselExample" data-slide-to="4"></li>
        <li data-target="#carouselExample" data-slide-to="5"></li>
      </ol>
      <div class="carousel-inner">
        <div
          class="carousel-item active"
          style={{ background: "#8A2BE2", height: "100%" }}
        >
          <img
            src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"
            alt=""
          />
          <div class="carousel-caption">
            <div className="carousel-text" ref={textRef}>
              <h1 className="title">Title</h1>
              <h5 className="sub-title">Sub Title</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt reprehenderit consequatur nesciunt. Porro animi vel ut
                fugiat excepturi. Cumque suscipit fugit porro inventore sequi
                enim unde non ipsum voluptatum quibusdam!
              </p>
            </div>
          </div>
        </div>
        <div
          class="carousel-item"
          style={{ background: "blue", height: "100%" }}
        >
          <img
            src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"
            alt=""
          />
          <div class="carousel-caption">
            <div className="carousel-text">
              <h1 className="title">Title</h1>
              <h5 className="sub-title">Sub Title</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt reprehenderit consequatur nesciunt. Porro animi vel ut
                fugiat excepturi. Cumque suscipit fugit porro inventore sequi
                enim unde non ipsum voluptatum quibusdam!
              </p>
            </div>
          </div>
        </div>
        <div
          class="carousel-item"
          style={{ background: "#87CEEB", height: "100%" }}
        >
          <img
            src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"
            alt=""
          />
          <div class="carousel-caption">
            <div className="carousel-text">
              <h1 className="title">Title</h1>
              <h5 className="sub-title">Sub Title</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt reprehenderit consequatur nesciunt. Porro animi vel ut
                fugiat excepturi. Cumque suscipit fugit porro inventore sequi
                enim unde non ipsum voluptatum quibusdam!
              </p>
            </div>
          </div>
        </div>
        <div
          class="carousel-item"
          style={{ background: "green", height: "100%" }}
        >
          <img
            src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"
            alt=""
          />
          <div class="carousel-caption">
            <div className="carousel-text">
              <div id="title">Title</div>
              <div id="sub-title">Sub Title</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt reprehenderit consequatur nesciunt. Porro animi vel ut
                fugiat excepturi. Cumque suscipit fugit porro inventore sequi
                enim unde non ipsum voluptatum quibusdam!
              </div>
            </div>
          </div>
        </div>
        <div
          class="carousel-item"
          style={{ background: "orange", height: "100%" }}
        >
          <img
            src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"
            alt=""
          />
          <div class="carousel-caption">
            <div className="carousel-text">
              <h1 className="title">Title</h1>
              <h5 className="sub-title">Sub Title</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt reprehenderit consequatur nesciunt. Porro animi vel ut
                fugiat excepturi. Cumque suscipit fugit porro inventore sequi
                enim unde non ipsum voluptatum quibusdam!
              </p>
            </div>
          </div>
        </div>
        <div
          class="carousel-item"
          style={{ background: "#ffff00", height: "100%" }}
        >
          <img
            src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"
            alt=""
          />
          <div class="carousel-caption">
            <div className="carousel-text">
              <h1 className="title">Title</h1>
              <h5 className="sub-title">Sub Title</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt reprehenderit consequatur nesciunt. Porro animi vel ut
                fugiat excepturi. Cumque suscipit fugit porro inventore sequi
                enim unde non ipsum voluptatum quibusdam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
