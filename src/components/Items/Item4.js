import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Item4 = () => {
  const fourth = useRef(null);
  const blog = useRef(null);
  const blogsRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(blogsRef.current, {
      scrollTrigger: {
        trigger: fourth.current,
      },
      paddingTop: 0,
      duration: 1,
    });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f7f7f7",
        height: "100vh",
        paddingTop: "100vh",
      }}
      className="d-flex align-items-center"
      ref={blogsRef}
    >
      <div className="item container text-center" id="item4" ref={fourth}>
        <h4 className="text-center font-weight-bold">Latest News</h4>
        <div className="row justify-content-around">
          <div className="col-12 col-md-6 col-lg-4 blog" ref={blog}>
            <img
              src="https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2017/09/custom-demo-image-sam-burriss-250706-min.webp"
              className="img-fluid"
              alt=""
            />
            <div className="img-details text-left">
              <small>23.03.2020</small>
              <p>The North Face: Celebrates 50 Years</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 blog" ref={blog}>
            <img
              src="https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2017/09/custom-demo-image-sam-burriss-250706-min.webp"
              className="img-fluid"
              alt=""
            />
            <div className="img-details text-left">
              <small>23.03.2020</small>
              <p>The North Face: Celebrates 50 Years</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 blog" ref={blog}>
            <img
              src="https://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2017/09/custom-demo-image-sam-burriss-250706-min.webp"
              className="img-fluid"
              alt=""
            />
            <div className="img-details text-left">
              <small>23.03.2020</small>
              <p>The North Face: Celebrates 50 Years</p>
            </div>
          </div>
        </div>
        <a href="#" className="btn red-button mt-3">
          The Blog
        </a>
      </div>
    </div>
  );
};

export default Item4;
