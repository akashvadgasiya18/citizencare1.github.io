import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const EditServices = ({ item }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [s_name, setS_name] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [likes, setLikes] = useState("");
  const [desc, setDesc] = useState("");
  const [serID, setserID] = useState("");

  const [ser, setser] = useState({
    id: "",
    price: "",
    rating: "",
    likes: "",
    desc: "",
  });

  var name, value;
  const input_hand = (e) => {
    name = e.target.name;
    value = e.target.value;

    setser({ ...ser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    ser.id = serID;
    const { id, price, rating, likes, desc } = ser;
    const res = await fetch("/edit_service", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        price,
        rating,
        likes,
        desc,
      }),
    });
    const data = await res.json();
    if (!data) {
      toast.error("All fields are required.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 401) {
      toast.error("Kindly enter price.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 402) {
      toast.error("Kindly select rating.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 403) {
      toast.error("Kindly enter likes.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 404) {
      toast.error("Kindly enter description.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 413) {
      toast.error("service Not Exist", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 427) {
      toast.error("Rating must be less than equal to 5.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 201) {
      navigate("/dashmain/services");
      toast.success("Successfully updated.", {
        position: "top-left",
        theme: "colored",
        hideProgressBar: "false",
      });
    }
  };
  // const [doc_img, setdoc_img] = useState(" ");

  useEffect(() => {
    // dispatch(listServiceDetails(item.params._id))
    const fetchData = async () => {
      const { data } = await axios.get(
        `/dashmain/services/editservicepage/${id}`
      );
      console.log("single service", data);

      setS_name(data.s_name);
      setPrice(data.price);
      setRating(data.rating);
      setLikes(data.likes);
      setDesc(data.desc);
      setserID(data._id);
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
          <form method="post" action="" className="login-form">
            <div
              style={{
                backgroundColor: "white",
                padding: "40px 30px",
                borderRadius: "20px",
                display: "grid",
                textAlign: "left",
              }}
            >
              <h2 style={{ paddingBottom: "30px", textAlign: "center" }}>
                Edit Services
              </h2>
              Service Name
              <input type="text" id="" Name="s_name" value={s_name} required />
              <p>
                <b>(Name can't modified.)</b>
              </p>
              Service Price
              <input
                type="number"
                id=""
                Name="price"
                placeholder={price}
                value={ser.price}
                onChange={input_hand}
                required
              />
              Rating
              <input
                type="number"
                id=""
                Name="rating"
                placeholder={rating}
                value={ser.rating}
                onChange={input_hand}
                required
              />
              Likes
              <input
                type="text"
                id=""
                placeholder={likes}
                Name="likes"
                value={ser.likes}
                onChange={input_hand}
                required
              />
              Descriptions
              <input
                type="text"
                id=""
                Name="desc"
                placeholder={desc}
                value={ser.desc}
                onChange={input_hand}
                required
              />
              <button type="submit" onClick={handleSubmit}>
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditServices;
