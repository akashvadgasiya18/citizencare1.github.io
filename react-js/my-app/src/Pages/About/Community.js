import React from "react";
import "./community.css";
import i1 from "../../images/communiti1.png";
import i2 from "../../images/comminity3.png";
import i3 from "../../images/communiti1.png";

const Community = () => {
  return (
    <>
      {/* <div className="container"> */}
        <div className="service-heading" style={{ marginTop: "2rem" }}>
          <span>Community</span>
          <h2 style={{fontSize:'30px'}}>MEET OUR PROFESSIONAL</h2>
        {/* </div> */}
        <div className="rows">
          <div className="profile-card">
            <div className="profile-content">
              <div className="profile-image">
                <img src={i1} alt="first user" className="profile-imgs" />
              </div>
              <div className="desc">
                <h2>Akash vadasiya</h2>
                <p>
                  Lorem ipsum dolor sit amet adipisicing elit.Lorem ipsum dolor
                  sit amet adipisicing elit.Lorem ipsum dolor sit amet
                  adipisicing elit.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-content">
              <div className="profile-image">
                <img src={i2} alt="first user" className="profile-imgs" />
              </div>
              <div className="desc">
                <h2>Akash vadasiya</h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet adipisicing elit.Lorem ipsum dolor
                  sit amet adipisicing elit.Lorem ipsum dolor sit amet
                  adipisicing elit.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-content">
              <div className="profile-image">
                <img src={i3} alt="first user" className="profile-imgs" />
              </div>
              <div className="desc">
                <h2>Akash vadasiya</h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet adipisicing elit.Lorem ipsum dolor
                  sit amet adipisicing elit.Lorem ipsum dolor sit amet
                  adipisicing elit.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
