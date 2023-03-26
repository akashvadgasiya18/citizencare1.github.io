import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const EditServices = ({ item }) => {
  const { id } = useParams();

  const [s_name, setS_name] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [likes, setLikes] = useState("");
  const [desc, setDesc] = useState("");
  // const [doc_img, setdoc_img] = useState(" ");

  useEffect(() => {
    // dispatch(listServiceDetails(item.params._id))
    const fetchData = async () => {
      const { data } = await axios.get(`/dashmain/services/${id}`);
      console.log("products...", data);

      setS_name(data.s_name);
      setPrice(data.price);
      setRating(data.rating);
      setLikes(data.likes);
      setDesc(data.desc);
      // setdoc_img(data.doc_img);
    };
    fetchData();
  }, [id]);
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
                value={s_name}
                placeholder="Enter service Name"
                required
              />
              <input
                type="text"
                id=""
                Name="price"
                value={price}
                // onChange={handleChange}
                placeholder="Enter service Price"
                required
              />
              <input
                type="text"
                id=""
                Name="rating"
                value={rating}
                // onChange={handleChange}
                placeholder="Enter service Rating"
                required
              />
              <input
                type="text"
                id=""
                Name="likes"
                value={likes}
                // onChange={handleChange}
                placeholder="Enter service Likes"
                required
              />
              <input
                type="text"
                id=""
                Name="desc"
                value={desc}
                // onChange={handleChange}
                placeholder="Enter Description"
                required
              />
              {/* <input type="file" name="doc_img" value={doc_img}/> */}
              <button type="submit">Edit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditServices;
