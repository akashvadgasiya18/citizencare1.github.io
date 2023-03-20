import React, { useEffect, useState } from "react"; //, { useEffect, useState }
import "./Services.css";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { DEL } from "../../Redux/Actions/action";
import Navbar5 from "../Navbar/Navbar5";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { ADD } from "../../Redux/Actions/action";
// import {listServiceDetails} from "../../Redux/Actions/ServiceAction"

const ServicePage = ({ item }) => {
  // const dispatch = useDispatch();
  // const serviceDetail = useSelector(state=>state.serviceDetails);
  // const {error,detail} = serviceDetail;
  // console.log(detail);

  const dispatch = useDispatch();

  const send = (item) => {
    console.log(item);
    dispatch(ADD(item));
  };

  const { id } = useParams();
  // console.log(_id);

  const [s_name, setS_name] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [desc, setDesc] = useState("");
  const [doc_img, setdoc_img] = useState(" ");

  useEffect(() => {
    // dispatch(listServiceDetails(item.params._id))
    const fetchData = async () => {
      const { data } = await axios.get(`/details/${id}`);
      console.log("products...", data);

      setS_name(data.s_name);
      setPrice(data.price);
      setRating(data.rating);
      setDesc(data.desc);
      setdoc_img(data.doc_img);
    };
    fetchData();
  }, [id]);
  // [dispatch,item]

  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);

  // console.log("data is :",Products);
  return (
    <>
      <Navbar5 />
      <div className="main-wrapper">
        {/* <div className="container"> */}
        <div className="product-div">
          <div className="product-div-left">
            <Link to="/service">
              <p
                className="mb-4"
                style={{
                  color: "black",
                  textDecoration: "2px solid white underline",
                }}
              >
                <i class="fa-solid fa-arrow-left mr-2"></i>
                Back
              </p>
            </Link>
            <img src={doc_img} alt="" />
          </div>
          <div className="product-div-right">
            <span className="product-name">{s_name}</span>
            <span className="product-price"> ₹ {price}</span>
            <div className="product-rating">
              <span
                style={{
                  background: "green",
                  color: "white",
                  padding: "2px 8px",
                  borderRadius: "5px",
                }}
              >
                {" "}
                ★ {rating}
              </span>
              <span>Ratings</span>
            </div>
            <p className="product-description">{desc}</p>
            <div className="btn-groups">
              <button
                type="button"
                className="add-cart-btn"
                onClick={() => send(item)}
              >
                <i className="fas fa-shopping-cart"></i>add to cart
              </button>
              <button type="button" className="buy-now-btn">
                <i className="fas fa-wallet"></i>Book now
              </button>
            </div>
          </div>
        </div>

        {/* ----------------------- heading line--------------------------------- */}
        <section
          className="services"
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f1f1f1",
          }}
        >
          <div className="service-heading">
            <span>Service Reviews</span>
          </div>
        </section>

        {/* ----------------------- review section --------------------------------- */}

        <div className="product-div">
          <div className="product-div-left">
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h1>Your Opinion ..??</h1>
            </div>

            <div
              style={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              {Array(5)
                .fill()
                .map((_, index) =>
                  number >= index + 1 || hoverStar >= index + 1 ? (
                    <AiFillStar
                      onMouseOver={() => !number && setHoverStar(index + 1)}
                      onMouseLeave={() => setHoverStar(undefined)}
                      style={{
                        color: "orange",
                        fontSize: "40px",
                      }}
                      onClick={() => setNumber(index + 1)}
                    />
                  ) : (
                    <AiOutlineStar
                      onMouseOver={() => !number && setHoverStar(index + 1)}
                      onMouseLeave={() => setHoverStar(undefined)}
                      style={{ color: "orange", fontSize: "40px" }}
                      onClick={() => setNumber(index + 1)}
                    />
                  )
                )}
            </div>
            <div
              style={{
                marginTop: "2rem",
                width: "70%",
                // display:'flex',
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email or username"
              />

              <Form.Control
                as="textarea"
                name="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px", marginTop: "20px" }}
              />
              <Button
                variant="success"
                className="review-buttons"
                style={{ marginTop: "20px", width: "100%" }}
                type="submit"
                // onClick={reviewSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ServicePage;
