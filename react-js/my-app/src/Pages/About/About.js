import React from "react";
import Navbar5 from "../../Components/Navbar/Navbar5";
import ImageBanner from "../../Components/Common/ImageBanner";
// import 'animate.css-react'
import i1 from "../../images/worker.jpg";
// import "../../css/About.css";

const About = () => {
  return (
    <>
      <Navbar5></Navbar5>
      <ImageBanner title="About Page" />
      <div className="service-heading" style={{ marginTop: "2rem" }}>
        <span>DETAILS</span>
        <h2>More about Website</h2>
      </div>
      <div className="main-wrapper" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="product-div">
            <div className="product-div-left">
              <img src={i1} alt="" className="about-img" />
            </div>
            <div className="product-div-right">
              <h3>Something more....</h3>
              <p>
                Homecare (also spelled as home care) is health care or
                supportive care provided by a professional caregiver in the
                individual home where the patient or client is living, as
                opposed to care provided in group accommodations like clinics or
                nursing home. Homecare is also known as domiciliary care, social
                care or in-home care. It comprises a range of activities,
                especially paramedical aid by nurses and assistance in daily
                living for ill, disabled or elderly people.
              </p>
              <p>
                Clients receiving home health care may incur lower costs,
                receive equal to better care, and have increased satisfaction in
                contrast to other settings.Occasionally, palliative and
                end-of-life care can be provided through home health nursing.
              </p>
              <p>
                Clients receiving home health care may incur lower costs,
                receive equal to better care, and have increased satisfaction in
                contrast to other settings.Occasionally, palliative and
                end-of-life care can be provided through home health nursing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
