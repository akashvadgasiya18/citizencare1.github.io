import React, { useState } from "react";
import { Typography } from "antd";
import "../css/servicepage.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddservicePage = () => {
  const navigate = useNavigate();
  const [ser, setser] = useState({
    s_name: "",
    price: "",
    rating: "",
    likes: "",
    desc: "",
    doc_img: "",
  });

  var name, value;
  const input_hand = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setser({ ...ser, [name]: value });
  };

  const img_upload = (e) => {
    setser({ ...ser, doc_img: e.target.files[0] });
  };

  const send_data = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("s_name", ser.s_name);
    formData.append("price", ser.price);
    formData.append("rating", ser.rating);
    formData.append("likes", ser.likes);
    formData.append("desc", ser.desc);
    formData.append("doc_img", ser.doc_img);
    try {
      await axios.post("/add_services", formData);
      toast.success("Successfully Added.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
      navigate("/dashmain/services");
    } catch (err) {
      if (err.response.status === 401) {
        toast.error("Kindly enter service-name.", {
          position: "top-center",
          theme: "colored",
          hideProgressBar: "false",
        });
      } else if (err.response.status === 402) {
        toast.error("Kindly enter price.", {
          position: "top-center",
          theme: "colored",
          hideProgressBar: "false",
        });
      } else if (err.response.status === 403) {
        toast.error("Kindly select rating.", {
          position: "top-center",
          theme: "colored",
          hideProgressBar: "false",
        });
      } else if (err.response.status === 404) {
        toast.error("Kindly enter likes.", {
          position: "top-center",
          theme: "colored",
          hideProgressBar: "false",
        });
      } else if (err.response.status === 405) {
        toast.error("Kindly enter description.", {
          position: "top-center",
          theme: "colored",
          hideProgressBar: "false",
        });
      } else if (err.response.status === 413) {
        toast.error("Already exists.", {
          position: "top-center",
          theme: "colored",
          hideProgressBar: "false",
        });
      } else if (err.response.status === 411) {
        toast.error("Rating less than 5", {
          position: "top-center",
          theme: "colored",
          hideProgressBar: "false",
        });
      } else if (err.response.status === 412) {
        toast.error("upload document.", {
          position: "top-center",
          theme: "colored",
          hideProgressBar: "false",
        });
      }
    }
  };

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
              ADD MORE SERVICES
            </Typography.Title>
          </div>
          <div>
            <form
              method="post"
              action=""
              className="login-form"
              enctype="multipart/form-data"
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
                  ADD Services
                </h2>
                <input
                  type="text"
                  id=""
                  Name="s_name"
                  value={ser.s_name}
                  onChange={input_hand}
                  placeholder="Enter service Name"
                  autoComplete="off"
                />
                <input
                  type="number"
                  id=""
                  Name="price"
                  value={ser.price}
                  onChange={input_hand}
                  placeholder="Enter service Price"
                  autoComplete="off"
                />
                <input
                  type="number"
                  id=""
                  Name="rating"
                  min={1}
                  max={5}
                  value={ser.rating}
                  onChange={input_hand}
                  placeholder="Enter service Rating"
                  autoComplete="off"
                />
                <input
                  type="text"
                  id=""
                  Name="likes"
                  value={ser.likes}
                  onChange={input_hand}
                  placeholder="Enter service Likes"
                  autoComplete="off"
                />
                <input
                  type="text"
                  id=""
                  Name="desc"
                  value={ser.desc}
                  onChange={input_hand}
                  placeholder="Enter Description"
                  autoComplete="off"
                />
                <input
                  type="file"
                  name="doc_img"
                  style={{ paddingTop: "10px" }}
                  onChange={img_upload}
                />
                <input
                  type="submit"
                  value="Add"
                  onClick={send_data}
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
export default AddservicePage;
