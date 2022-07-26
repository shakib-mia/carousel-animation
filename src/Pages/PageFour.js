import React from "react";

const PageFour = () => {
  return (
    <div className="pageContainer container blogSection text-center">
      <div id="latestNewsContainer">
        <h3 className="text-center mb-1">Latest News</h3>
        <div className="row row-cols-1 row-cols-lg-3">
          <a href="#" className="col blog my-1 my-lg-5">
            <img
              src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog.png"
              alt=""
              className="blogImg"
            />
            <h1 className="caption">This is a blog post</h1>
          </a>
          <a href="#" className="col blog my-1 my-lg-5">
            <img
              src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog.png"
              alt=""
              className="blogImg"
            />
            <h1 className="caption">This is a blog post</h1>
          </a>
          <a href="#" className="col blog my-1 my-lg-5">
            <img
              src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog.png"
              alt=""
              className="blogImg"
            />
            <h1 className="caption">This is a blog post</h1>
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
