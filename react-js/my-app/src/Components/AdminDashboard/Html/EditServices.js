import { Typography } from "antd";
import React from "react";
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
                Name="s_name"
                // value={values.s_name}
                // onChange={handleChange}
                placeholder="Enter service Name"
                required
              />
              <input
                type="text"
                id=""
                Name="price"
                // value={values.price}
                // onChange={handleChange}
                placeholder="Enter service Price"
                required
              />
              <input
                type="text"
                id=""
                Name="rating"
                // value={values.rating}
                // onChange={handleChange}
                placeholder="Enter service Rating"
                required
              />
              <input
                type="text"
                id=""
                Name="likes"
                // value={values.likes}
                // onChange={handleChange}
                placeholder="Enter service Likes"
                required
              />
              <input
                type="text"
                id=""
                Name="desc"
                // value={values.desc}
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
