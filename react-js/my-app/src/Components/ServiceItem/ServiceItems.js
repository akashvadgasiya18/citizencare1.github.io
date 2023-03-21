import React from "react";
import { Col } from "reactstrap";
import "../../Components/ServiceItem/service-item.css";
// import ServicePage from "../ServicePages/ServicePage";
import { Link } from "react-router-dom";
// import { useCart } from "react-use-cart";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { ADD } from "../../Redux/Actions/action";

const ServiceItems = ({ item }) => {
  const dispatch = useDispatch();

  const send = (item) => {
    console.log(item);
    dispatch(ADD(item));
  };
  console.log("image :", item.doc_img);

  const imagepath = `http:/localhost:3001/Backend/public/details/${item.doc_img}`;

  return (
    <Col lg="4" md="4" sm="6" className="mb-3">
      <div className="car__item">
        <div className="car__img">
          <img src={imagepath} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{item.s_name}</h4>
          <h6 className="rent__price text-center">
            Rs. {item.price}.00{" "}
            <span style={{ fontFamily: "Poppins", fontWeight: "500" }}>
              / Day
            </span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <Rating value={item.rating} />
            </span>
            <span
              className=" d-flex align-items-center gap-1"
              style={{ fontFamily: "Poppins", fontWeight: "500" }}
            >
              <i class="fa-solid fa-heart"></i>
              {item.likes}
            </span>
          </div>

          <button
            className=" w-100 car__item-btn car__btn-rent"
            onClick={() => send(item)}
          >
            <i
              className="fa-solid fa-shopping-cart"
              style={{ marginRight: "10px" }}
            ></i>
            Add to cart
          </button>

          <Link to={`/details/${item._id}`}>
            <button className=" w-100 car__item-btn car__btn-details">
              <i className="fa-solid fa-eye" style={{ marginRight: "5px" }}></i>
              Preview
            </button>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default ServiceItems;
