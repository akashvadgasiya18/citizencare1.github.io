import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const EditServices = () => {
  return (
    <>
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
            <Link to="/dashmain/services">
              <FaArrowLeft
                style={{
                  marginRight: "10px",
                  fontSize: "20px",
                  cursor: "pointer",
                  color: "black",
                }}
              />
            </Link>
            EDIT SERVICES
          </Typography.Title>
        </div>

        <div>
          <form
            method="post"
            action=""
            className="login-form"
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
                Name="s_name"
                // value={s_name}
                placeholder="Enter service Name"
                required
              />
              <input
                type="text"
                id=""
                Name="price"
                // value={price}
                // onChange={handleChange}
                placeholder="Enter service Price"
                required
              />
              <input
                type="text"
                id=""
                Name="rating"
                // value={rating}
                // onChange={handleChange}
                placeholder="Enter service Rating"
                required
              />
              <input
                type="text"
                id=""
                Name="likes"
                // value={likes}
                // onChange={handleChange}
                placeholder="Enter service Likes"
                required
              />
              <input
                type="text"
                id=""
                Name="desc"
                // value={desc}
                // onChange={handleChange}
                placeholder="Enter Description"
                required
              />
              <button type="submit">Edit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditServices;
