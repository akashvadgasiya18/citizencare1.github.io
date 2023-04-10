import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typography } from "antd";

const EditUserOrder = () => {
  return (
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
          <Link to="/profile/userorders">
            <FaArrowLeft
              style={{
                marginRight: "10px",
                fontSize: "20px",
                cursor: "pointer",
                color: "black",
              }}
            />{" "}
          </Link>
          EDIT ORDER DETAILS
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
              Edit Order
            </h2>
            <p>user can only edit Date and scheduale their order</p>
            <select aria-label="select profession">
              <option value="">Select</option>
              <option value="8-to-10">8-to-10</option>
              <option value="10-to-12">10-to-12</option>
              <option value="12-to-2">12-to-2</option>
              <option value="2-to-4">2-to-4</option>
              <option value="4-to-6">4-to-6</option>
              <option value="6-to-8">6-to-8</option>
            </select>
            <button type="submit">Edit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserOrder;
