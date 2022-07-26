import React from "react";

const PageFive = () => {
  return (
    <div className="pageContainer" id="fiveContainer">
      <div className="pageTextContainer text-white d-flex justify-content-center align-items-center flex-column">
        <h1>Contact Us</h1>
        <div id="contact">
          <form className="p-4 m-4 shadow">
            <div className="row">
              <div className="col-12 col-lg-6 my-3">
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder="First Name"
                />
              </div>
              <div className="col-12 col-lg-6 my-3">
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder="Last Name"
                />
              </div>
              <div className="col-12 my-3">
                <input
                  type="email"
                  className="form-control bg-light"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="col-12 my-3">
                <textarea
                  name=""
                  className="form-control bg-light"
                  placeholder="Write Your Message Here"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              value="Send Message"
              className="btn btn-light"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PageFive;
