import React, { useEffect, useState } from "react"; //, { useEffect, useState }
import "./Services.css";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { DEL } from "../../Redux/Actions/action";
import Navbar5 from "../Navbar/Navbar5";
import { useParams } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { ADD } from "../../Redux/Actions/action";
// import {listServiceDetails} from "../../Redux/Actions/ServiceAction"
import Review from "../Reviews/Review";
import i1 from "../../images/Bathrrom_clean.jpeg";
// import FinalRev from "../Reviews/FinalRev";
import Reviews2 from "../Reviews/Reviews2"


const ServicePage = ({ item }) => {
  // const dispatch = useDispatch();
  // const serviceDetail = useSelector(state=>state.serviceDetails);
  // const {error,detail} = serviceDetail;
  // console.log(detail);

  const loggedIn = window.localStorage.getItem("isLoggedIn");

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
  // const [doc_img, setdoc_img] = useState(" ");

  useEffect(() => {
    // dispatch(listServiceDetails(item.params._id))
    const fetchData = async () => {
      const { data } = await axios.get(`/details/${id}`);
      console.log("products...", data);

      setS_name(data.s_name);
      setPrice(data.price);
      setRating(data.rating);
      setDesc(data.desc);
      // setdoc_img(data.doc_img);
    };
    fetchData();
  }, [id]);
  // [dispatch,item]

  // const [number, setNumber] = useState(0);
  // const [hoverStar, setHoverStar] = useState(undefined);

  // console.log("data is :",Products);
  return (
    <>
      <Navbar5 />
      <div className="main-wrapper">
        <div className="product-div">
          <div className="product-div-left">
            <div>
              <Link to="/service">
                <p
                  style={{
                    color: "black",
                    textDecoration: "2px solid white underline",
                  }}
                >
                  <i class="fa-solid fa-arrow-left mr-2"></i>
                  Back
                </p>
              </Link>
            </div>
            <img src={i1} alt="" style={{ height: "80%", width: "70%" }} />
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
              {loggedIn ? (
                <Link to="/checkoutpage">
                  <button type="button" className="buy-now-btn">
                    <i className="fas fa-wallet"></i>Book now
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button type="button" className="buy-now-btn">
                    <i className="fas fa-wallet"></i>Book now
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <Reviews2 />

        {/* ----------------------- heading line--------------------------------- */}
        <section
          className="services"
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "35px",
          }}
        >
          <div className="service-heading">
            <span style={{ fontSize: "30px" }}>Service Reviews</span>
          </div>
        </section>

        {/* ----------------------- review section --------------------------------- */}

        <Review />
      </div>
      {/* </div> */}
    </>
  );
};

export default ServicePage;
