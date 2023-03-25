import React from "react";
import { Typography } from "antd";
import "../css/EditInfo.css";
import "../css/ChangePassword.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Editprofile = () => {
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
          <Link to="/profile/usersdetail">
            <FaArrowLeft
              style={{
                marginRight: "10px",
                fontSize: "20px",
                cursor: "pointer",
                color: "black",
              }}
            />{" "}
          </Link>
          EDIT USER DETAILS
        </Typography.Title>
      </div>

      <div>
        <form
          method="post"
          action=""
          className="login-form"
          // onSubmit={handleSubmit}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "40px 30px",
              borderRadius: "20px",
              display: "grid",
            }}
          >
            <h2 style={{ paddingBottom: "30px", textAlign: "center" }}>
              Edit Services
            </h2>
            <input
              type="text"
              id=""
              Name="fname"
              // value={values.s_name}
              // onChange={handleChange}
              placeholder="name"
              required
            />
            <input
              type="email"
              id=""
              Name=""
              // value={values.price}
              // onChange={handleChange}
              placeholder="Email id"
              required
            />
            <input
              type="number"
              id=""
              Name="Age"
              // value={values.rating}
              // onChange={handleChange}
              placeholder="Age"
              required
            />
            <input
              type="number"
              id=""
              Name="mobile no"
              // value={values.likes}
              // onChange={handleChange}
              placeholder="Enter service Likes"
              required
            />
            <button type="submit">Edit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Editprofile;
