import React from "react";

const PageFour = () => {
  return (
    <div className="pageContainer container blogSection text-center" id="blog">
      <div id="latestNewsContainer">
        <h3 className="text-center mt-5 pt-4" id="blogHeader">
          Latest News
        </h3>
        <div className="row">
          <a
            href="#"
            className="col-8 col-md-6 col-lg-4 mx-auto blog my-1 my-lg-5"
            id="blog-1"
          >
            <img
              src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog.png"
              alt=""
              className="blogImg"
            />
            <h1 className="caption">This is a blog post</h1>
          </a>
          <a
            href="#"
            className="col-8 col-md-6 col-lg-4 mx-auto blog my-1 my-lg-5"
            id="blog-2"
          >
            <img
              src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog.png"
              alt=""
              className="blogImg"
            />
            <h1 className="caption">This is a blog post</h1>
          </a>
          <a
            href="#"
            className="col-8 col-md-6 col-lg-4 mx-auto blog my-1 my-lg-5"
            id="blog-3"
          >
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
