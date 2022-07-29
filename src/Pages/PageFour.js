import React from "react";

const PageFour = () => {
  return (
    <div className="blogSection text-center" id="blog">
      <div id="latestNewsContainer" className="container">
        <h1 className="text-center mt-5 pt-4 secondHeading" id="blogHeader">
          Latest News
        </h1>
        <div className="blog-container mx-5 px-3 mx-sm-0 px-sm-0">
          <a href="#" className="blog my-1 my-lg-2" id="blog-1">
            <img
              src="https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2017/09/custom-demo-image-sam-burriss-250706-min.jpg"
              alt=""
              className="blogImg img-fluid"
            />
            <div className="caption text-start px-4 pb-3">
              <div>
                <small>25.03.2020</small>
                <h3>
                  The North Face: <br /> Celebrates 50 Years
                </h3>
              </div>
            </div>
          </a>
          <a href="#" className="blog my-1 my-lg-2" id="blog-2">
            <img
              src="https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2021/04/john-fornander-eYPcWdvn50s-unsplash.jpg"
              alt=""
              className="blogImg img-fluid"
            />
            <div className="caption text-start px-4 pb-3">
              <div>
                <small>22.03.2020</small>
                <h3>Supreme: Redefine The Rule Of StreetWear</h3>
              </div>
            </div>
          </a>
          <a href="#" className="blog my-1 my-lg-2" id="blog-3">
            <img
              src="https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2017/09/custom-demo-image-tobias-van-schneider-310435-2-min.jpg"
              alt=""
              className="blogImg img-fluid"
            />
            <div className="caption text-start px-4 pb-3">
              <div>
                <small>20.03.2020</small>
                <h3>Van Schneider X Unsplash Sweatshirt</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
      <a href="#" className="red-button btn rounded-pill px-4">
        The Blog
      </a>
    </div>
  );
};

export default PageFour;
