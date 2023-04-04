import React from "react";
import "../../Components/How_Work/Section2.css";
import imag2 from "../../Feature_icon/sec5.png";
import imag3 from "../../Feature_icon/sec4.png";
import imag1 from "../../Feature_icon/sec6.png";

const Section2 = () => {
  return (
    <>
      <section class="aon-why-choose2-area">
        <div class="container-sec2">
          <div class="aon-why-choose2-box">
            <div class="row">
              {/* <!-- COLUMNS LEFT */}

              <div class="col-lg-6 col-md-12">
                <div class="aon-why-choose-info">
                  {/* <!--Title Section Start--> */}

                  <div class="section-head">
                    <span
                      class="aon-sub-title"
                      style={{ color: "#FFB600", fontFamily: "Poppins" }}
                    >
                      Choose
                    </span>
                    <h2 class="sf-title" style={{ color: "#022279" }}>
                      Why Choose us
                    </h2>
                    <p style={{ color: "#555555" }}></p>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p> */}
                  </div>

                  {/* <!--Title Section Start End--> */}

                  <ul class="aon-why-choose-steps list-unstyled">
                    <li class="d-flex">
                      <div class="aon-w-choose-left aon-icon-effect">
                        <div class="aon-w-choose-icon">
                          <i class="aon-icon">
                            <img src={imag3} alt="" />
                          </i>
                        </div>
                      </div>

                      <div class="aon-w-choose-right">
                        <h4 class="aon-title" style={{ color: "#022279" }}>
                          Meet New Customers
                        </h4>
                        <p style={{ color: "#555555" }}>
                          Suspendisse tincidunt rutrum ante. Vestibulum
                          elementum ipsum sit amet turpis elementum lobortis.
                        </p>
                      </div>
                    </li>

                    <li class="d-flex">
                      <div class="aon-w-choose-left aon-icon-effect">
                        <div class="aon-w-choose-icon">
                          <i class="aon-icon">
                            <img src={imag2} alt="imag1" />
                          </i>
                        </div>
                      </div>

                      <div class="aon-w-choose-right">
                        <h4
                          class="aon-title"
                          style={{ color: "#022279", fontFamily: "Poppins" }}
                        >
                          Grow your revenue
                        </h4>
                        <p style={{ color: "#555555" }}>
                          Suspendisse tincidunt rutrum ante. Vestibulum
                          elementum ipsum sit amet turpis elementum lobortis.
                        </p>
                      </div>
                    </li>

                    <li class="d-flex">
                      <div class="aon-w-choose-left aon-icon-effect">
                        <div class="aon-w-choose-icon">
                          <i class="aon-icon">
                            <img src={imag1} alt="" />
                          </i>
                        </div>
                      </div>

                      <div class="aon-w-choose-right">
                        <h4 class="aon-title" style={{ color: "#022279" }}>
                          Build your online reputation
                        </h4>
                        <p style={{ color: "#555555" }}>
                          Suspendisse tincidunt rutrum ante. Vestibulum
                          elementum ipsum sit amet turpis elementum lobortis.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- COLUMNS RIGHT --> */}

              <div class="col-lg col-md-10">
                <div class="aon-why-choose2-line">
                  <div class="aon-why-choose2-pic"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="sf-overlay-main" style={{ opacity: "0.8" }}></div>
        </div>
      </section>
    </>
  );
};
export default Section2;
