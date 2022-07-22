import "./App.css";

function App() {
  const moveCursor = (e) => {
    const cursorRounded = document.querySelector(".rounded");
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  };

  window.addEventListener("mousemove", moveCursor);

  return (
    <div id="carouselExample" class="carousel vert slide">
      <div class="cursor rounded">+</div>
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
        <div class="carousel-item active">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"
            alt=""
          />

          <div className="carousel-text d-flex flex-column justify-content-center">
            <h1 className="title">Title</h1>
            <h5 className="sub-title">Sub Title</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              reprehenderit consequatur nesciunt. Porro animi vel ut fugiat
              excepturi. Cumque suscipit fugit porro inventore sequi enim unde
              non ipsum voluptatum quibusdam!
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"
            alt=""
          />
          <div className="carousel-text d-flex flex-column justify-content-center">
            <h1 className="title">Title</h1>
            <h5 className="sub-title">Sub Title</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              reprehenderit consequatur nesciunt. Porro animi vel ut fugiat
              excepturi. Cumque suscipit fugit porro inventore sequi enim unde
              non ipsum voluptatum quibusdam!
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"
            alt=""
          />
          <div className="carousel-text d-flex flex-column justify-content-center">
            <h1 className="title">Title</h1>
            <h5 className="sub-title">Sub Title</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              reprehenderit consequatur nesciunt. Porro animi vel ut fugiat
              excepturi. Cumque suscipit fugit porro inventore sequi enim unde
              non ipsum voluptatum quibusdam!
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"
            alt=""
          />
          <div className="carousel-text d-flex flex-column justify-content-center">
            <h1 className="title">Title</h1>
            <h5 className="sub-title">Sub Title</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              reprehenderit consequatur nesciunt. Porro animi vel ut fugiat
              excepturi. Cumque suscipit fugit porro inventore sequi enim unde
              non ipsum voluptatum quibusdam!
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"
            alt=""
          />
          <div className="carousel-text d-flex flex-column justify-content-center">
            <h1 className="title">Title</h1>
            <h5 className="sub-title">Sub Title</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              reprehenderit consequatur nesciunt. Porro animi vel ut fugiat
              excepturi. Cumque suscipit fugit porro inventore sequi enim unde
              non ipsum voluptatum quibusdam!
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"
            alt=""
          />
          <div className="carousel-text d-flex flex-column justify-content-center">
            <h1 className="title">Title</h1>
            <h5 className="sub-title">Sub Title</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              reprehenderit consequatur nesciunt. Porro animi vel ut fugiat
              excepturi. Cumque suscipit fugit porro inventore sequi enim unde
              non ipsum voluptatum quibusdam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
