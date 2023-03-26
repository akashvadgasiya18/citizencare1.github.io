import { Typography } from "antd";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProviderOrder = () => {
  return (
    <>
      <div>
        <div className="home-container">
          <div style={{ width: "100%" }}>
            <Typography.Title
              style={{
                textAlign: "left",
                margin: "30px 35px",
                display: "flex",
                fontFamily: "Poppins",
                fontSize: "25px",
              }}
            >
              <Link to="/dashmain/providerpage">
                <FaArrowLeft
                  style={{
                    marginRight: "10px",
                    fontSize: "20px",
                    cursor: "pointer",
                    color: "black",
                  }}
                />
              </Link>
              SEND ORDER TO PROVIDER
            </Typography.Title>
          </div>
          <div>
            <form method="post" action="" className="login-form">
              <div
                style={{
                  backgroundColor: "white",
                  padding: "40px 30px",
                  borderRadius: "20px",
                  display: "grid",
                }}
              >
                <h2 style={{ paddingBottom: "30px", textAlign: "center" }}>
                  SEND TO PROVIDER
                </h2>
                <input
                  type="text"
                  id=""
                  Name="fname"
                  placeholder="Customer name"
                  autoComplete="off"
                />

                <textarea
                  type="text"
                  id=""
                  Name="address"
                  placeholder="Address"
                  autoComplete="off"
                />
                <input
                  type="text"
                  id=""
                  Name="mobileno"
                  placeholder="Mobile no"
                  autoComplete="off"
                />
                <input
                  type="submit"
                  value="SEND"
                  style={{
                    color: "white",
                    backgroundColor: "blue",
                    cursor: "pointer",
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderOrder;
