import React from "react";
// import { useCart } from "react-use-cart";
import "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DEL } from "../../Redux/Actions/action";
import impt from "../../images/empty-cart.gif";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const CartMain = () => {
  const loggedIn = window.localStorage.getItem("isLoggedIn");

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log("getdata item :", getdata);

  const dispatch = useDispatch();

  const dlt = (_id) => {
    dispatch(DEL(_id));
  };
  const totalPrice = getdata.reduce((price, item) => price + item.price, 0);

  return (
    <>
      {getdata.length ? (
        <section className="py-5">
          <div className="container">
            <div className="py-4" style={{ width: "100%" }}>
              <h3 class="mb-3 text-center fw-semibold">
                Total Items : [{getdata.length}]
              </h3>
              {/* <table class="table border shadow"> */}
              <Table
                style={{ border: "1px solid lightgray", borderRadius: "10px" }}
              >
                <thead
                  class="thead-primary"
                  style={{ backgroundColor: "#999" }}
                >
                  <tr style={{ backgroundColor: "black", color: "white" }}>
                    <th scope="col">Image</th>
                    <th scope="col">Service Name</th>
                    <th scope="col">Price(per)</th>
                    <th scope="col">Rating</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {getdata.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <img
                            src={item.doc_img}
                            alt=""
                            style={{ height: "6rem" }}
                          />
                        </td>
                        <td>{item.s_name}</td>
                        <td>₹ {item.price}</td>
                        <td>★ {item.rating}</td>
                        <td>
                          <button
                            className="btn btn-danger m-1"
                            onClick={() => dlt(item._id)}
                          >
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
          <div
            className="col-auto ms-auto my-5 mr-5"
            style={{ float: "right" }}
          >
            <h3 style={{ fontFamily: "Arial", fontWeight: "600" }}>
              Total Price
              <span
                style={{
                  marginLeft: "20px",
                  fontFamily: "Arial",
                  fontWeight: "600",
                }}
              >
                ₹ {totalPrice}
              </span>{" "}
            </h3>

            <div className="col-auto">
              <Link to="/service">
                <button className="btn btn-success my-3 mr-3">continue</button>
              </Link>
              {loggedIn ? (
                <Link to="/checkoutpage">
                  <button className="btn btn-primary my-3 mr-3" items={getdata}>
                    Checkout
                  </button>
                </Link>
              ) : (
                // <Link to="/checkoutpage">
                //   <button className="btn btn-primary my-3 mr-3">
                //     Checkout
                //   </button>
                // </Link>
                <Link to="/login">
                  <button className="btn btn-primary my-3 mr-3">
                    Checkout
                  </button>
                </Link>
              )}
            </div>
          </div>
        </section>
      ) : (
        <>
          <div>
            {" "}
            <h1
              className="text-center"
              style={{
                fontFamily: "Poppins",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "15rem",
                fontSize: "4rem",
                fontWeight: "700",
                color: "darkblue",
              }}
            >
              Your cart is Empty
              <img
                src={impt}
                alt=""
                style={{ height: "130px", width: "130px" }}
              />
            </h1>
          </div>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Link
              to="/service"
              style={{
                color: "green",
                textDecoration: "none",
                fontSize: "20px",
              }}
            >
              <i class="fa-solid fa-arrow-left mr-2"></i>
              Go Back
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default CartMain;
