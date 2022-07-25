import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Item4 = () => {
  const fourth = useRef(null);
  const blog = useRef(null);

  useEffect(() => {
    gsap.to(fourth.current, {
      paddingTop: 50,
      duration: 2,
      scrollTrigger: {
        trigger: fourth.current,
      },
    });
  }, []);

  return (
    <div style={{ backgroundColor: "#f7f7f7" }}>
      <div
        className="item container text-center"
        id="item4"
        ref={fourth}
        style={{ paddingTop: 100, paddingBottom: 50 }}
      >
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
