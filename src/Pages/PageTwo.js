import React from "react";

const PageTwo = () => {
  return (
    <div className="pageContainer" id="threeContainer">
      <div className="container">
        <div className="cards-container">
          <div className="firstCard">
            <img
              src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJvbmV8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
              id="firstImg"
            />
            <div className="firstCaption">
              <h1 className="ps-2 pb-2 ps-lg-5 pb-lg-5">
                About The Image <br /> Will Go Here
              </h1>
            </div>
          </div>

          <div id="rightTwo">
            <div className="secondCard">
              <img
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJvbmV8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
                id="rightTop"
              />
              <div className="secondCap">
                <h1 className="ps-2 pb-2 ps-lg-5 pb-lg-5">
                  About The Image <br /> Will Go Here
                </h1>
              </div>
            </div>

            <div className="thirdCard">
              <img
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJvbmV8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
                id="rightBottom"
              />
              <div className="thirdCap">
                <h1 className="ps-2 pb-2 ps-lg-5 pb-lg-5">
                  About The Image <br /> Will Go Here
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
