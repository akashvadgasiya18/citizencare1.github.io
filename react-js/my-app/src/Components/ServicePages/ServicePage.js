import React, { useEffect } from "react"; //, { useEffect, useState }
import "./Services.css";
import { Link } from "react-router-dom";
import Navbar5 from "../Navbar/Navbar5";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD } from "../../Redux/Actions/action";
import Review from "../Reviews/Review";
// import i1 from "../../images/Bathrrom_clean.jpeg";
// import FinalRev from "../Reviews/FinalRev";
import Reviews2 from "../Reviews/Reviews2";
import Footer from "../Footer/Footer";
import { SinglelistService } from "../../Redux/Actions/ServiceAction";

const ServicePage = () => {
  const dispatch = useDispatch();
  const singleService = useSelector((state) => state.singleService);
  const { product } = singleService;

  const send = (product) => {
    console.log();
    dispatch(ADD(product));
  };

  const { id } = useParams();

  useEffect(() => {
    dispatch(SinglelistService(id));
  }, [id]);

  return (
    <>
      <Navbar5 />
      <div className="main-wrapper">
        <div className="product-div" style={{ backgroundColor: "ghostwhite" }}>
          <div className="product-div-left">
            <img
              src={`http://localhost:3001/assets/image/${product.doc_img}`}
              alt=""
              style={{ height: "100%", width: "70%", borderRadius: "50px" }}
            />
          </div>
          <div className="product-div-right">
            <span className="product-name">{product.s_name}</span>
            <span className="product-price"> ₹ {product.price}</span>
            <div className="product-rating">
              <span
                style={{
                  background: "green",
                  color: "white",
                  padding: "2px 8px",
                  borderRadius: "5px",
                }}
              >
                ★ {product.rating}
              </span>
              <span>Ratings</span>
            </div>
            <p className="product-description">{product.desc}</p>
            <div className="btn-groups inline-block">
              <button
                type="button"
                className="add-cart-btn"
                onClick={() => send(product)}
              >
                <i className="fas fa-shopping-cart"></i>Add to Service
              </button>

              <Link to="/service">
                <button type="button" className="buy-now-btn">
                  <i class="fa-sharp fa-solid fa-arrow-left mr-2"></i> Back To
                  Page
                </button>
              </Link>
            </div>
          </div>
        </div>
        <section
          className="services"
          style={{
            height: "35px",
          }}
        >
          <div className="service-heading">
            <span style={{ fontSize: "30px" }}>Customer Reviews</span>
          </div>
        </section>

        <Reviews2 />

        {/* ----------------------- heading line--------------------------------- */}
        <section
          className="services my-5"
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
      <Footer />
    </>
  );
};

export default ServicePage;
