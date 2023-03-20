import React from "react";
import "./Timelinepage.css";
import { FaCircle } from "react-icons/fa";

const TimelinePage = () => {
  return (
    <>
      {" "}
      <div>
        <div className="service-heading" style={{ marginTop: "2rem" }}>
          <span>STEPS HOW TO WORK THIS SITE</span>
        </div>
      </div>
      <div className="timeline">
        <div className="time-container left-container">
          <span
          className="point-circl"
            style={{
              fontSize: "25px",
              height: "100px",
              width: "33px",
            }}
          >
            <FaCircle />
          </span>
          <div className="text-box">
            <h2>Meet new Customers</h2>
            <p>
              Homecare (also spelled as home care) is health care or supportive
              care provided{" "}
            </p>
          </div>
          <span className="left-container-arrow"></span>
        </div>

        <div className="time-container right-container">
          <span
          className="point-circl"
            style={{
              fontSize: "25px",
              height: "100px",
              //   marginLeft: "-29px",
            }}
          >
            <FaCircle />
          </span>
          <div className="text-box">
            <h2>Grow your Revenue</h2>
            <p>
              Homecare (also spelled as home care) is health care or supportive
              care provided{" "}
            </p>
          </div>
          <span className="right-container-arrow"></span>
        </div>

        <div className="time-container left-container">
          <span
          className="point-circl"
            style={{
              fontSize: "25px",
              height: "100px",
              width: "33px",
            }}
          >
            <FaCircle />
          </span>
          <div className="text-box">
            <h2>Build your online reputation</h2>
            <p>
              Homecare (also spelled as home care) is health care or supportive
              care provided{" "}
            </p>
          </div>
          <span className="left-container-arrow"></span>
        </div>
      </div>
    </>
  );
};

export default TimelinePage;
