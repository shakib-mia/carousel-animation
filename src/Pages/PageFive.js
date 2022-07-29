import React from "react";

const PageFive = () => {
  return (
    <div className="pageContainer" id="fiveContainer">
      <div className="pageTextContainer text-white d-flex justify-content-center align-items-center flex-column contact">
        <h1 className="secondHeading position-relative" id="contactHeader">
          Get In Touch
        </h1>
        <div className="container">
          <form
            id="contact"
            className="p-4 p-lg-4 m-lg-4 shadow w-100 position-relative"
          >
            <div className="row">
              <div className="col-12 col-lg-6  d-flex flex-column justify-content-between">
                <input
                  className="form-control my-2 p-3"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="form-control my-2 p-3"
                  type="text"
                  placeholder="Email Address"
                />
                <input
                  className="form-control my-2 p-3"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <div className="col-12 col-lg-6 my-2">
                <textarea
                  className="form-control p-3"
                  name=""
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Text Message"
                ></textarea>
              </div>
            </div>
            <div className="text-end">
              <input
                type="submit"
                value="Send Message"
                className="btn btn-light mt-4 text-center px-4 py-2 rounded-pill red-button"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PageFive;
