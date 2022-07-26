import React from "react";
import { Link } from "react-router-dom";

const PageFour = () => {
  return (
    <div className="blogSection text-center" id="blog">
      <div id="latestNewsContainer" className="container">
        <h1 className="text-center secondHeading" id="blogHeader">
          Latest News
        </h1>
        <div className="blog-container mx-5 px-3 mx-sm-0 px-sm-0">
          <Link to="/blog" className="blog my-1 my-lg-2" id="blog-1">
            <img
              src="https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2017/09/custom-demo-image-sam-burriss-250706-min.jpg"
              alt=""
              className="blogImg img-fluid"
            />
            <div className="caption text-start px-2 pb-1 px-lg-4 pb-lg-3">
              <div>
                <small>25.03.2020</small>
                <h3>
                  The North Face: <br /> Celebrates 50 Years
                </h3>
              </div>
            </div>
          </Link>
          <Link to="/blog" className="blog my-1 my-lg-2" id="blog-2">
            <img
              src="https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2021/04/john-fornander-eYPcWdvn50s-unsplash.jpg"
              alt=""
              className="blogImg img-fluid"
            />
            <div className="caption text-start px-2 pb-1 px-lg-4 pb-lg-3">
              <div>
                <small>22.03.2020</small>
                <h3>Supreme: Redefine The Rule Of StreetWear</h3>
              </div>
            </div>
          </Link>
          <Link to="/blog" className="blog my-1 my-lg-2" id="blog-3">
            <img
              src="https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2017/09/custom-demo-image-tobias-van-schneider-310435-2-min.jpg"
              alt=""
              className="blogImg img-fluid"
            />
            <div className="caption text-start px-2 pb-1 px-lg-4 pb-lg-3">
              <div>
                <small>20.03.2020</small>
                <h3>Van Schneider X Unsplash Sweatshirt</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Link
        to="/blog"
        className="red-button-alt btn rounded-pill px-5 py-2 mt-4"
        id="blogButton"
      >
        The Blog
      </Link>
    </div>
  );
};

export default PageFour;
