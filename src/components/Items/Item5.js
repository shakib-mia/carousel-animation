import React from "react";

const Item5 = () => {
  return (
    <div
      className="item text-white py-5"
      id="item5"
      style={{
        backgroundColor: "#ddd",
      }}
    >
      <h1 className="text-center">Contact Us</h1>
      <form className="col-12 col-lg-6 mx-auto">
        <input
          className="form-control my-2"
          type="text"
          placeholder="Enter Your Name"
        />
        <input
          className="form-control my-2"
          type="email"
          placeholder="Enter Your Email"
        />
        <textarea
          className="form-control my-2"
          id=""
          rows="10"
          placeholder="What's in your mind"
        ></textarea>
        <input type="submit" value="Submit" className="btn btn-primary py-3" />
      </form>
    </div>
  );
};

export default Item5;
