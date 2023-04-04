import React from "react";
import "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEL } from "../../Redux/Actions/action";
<<<<<<< HEAD
import axios from "axios";
import { useEffect } from "react";
=======
>>>>>>> 9217b08c62cfab293df4ed5f6c5ad1052863b2b5
import impt from "../../images/empty-cart.gif";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { userSingleDetails } from "../../Redux/Actions/ServiceAction";
import { Link } from "react-router-dom";

const CartMain = () => {
  const loggedIn = window.localStorage.getItem("isLoggedIn");

  const getdata = useSelector((state) => state.cartreducer.carts);
  const totalPrice = getdata.reduce((price, item) => price + item.price, 0);
<<<<<<< HEAD
  const dispatch = useDispatch();
  // const singleData = useSelector((state) => state.singleData);
  // const { user } = singleData;
=======
  // console.log(getdata);
  const dispatch = useDispatch();
  const singleData = useSelector((state) => state.singleData);
  const { user } = singleData;
>>>>>>> 9217b08c62cfab293df4ed5f6c5ad1052863b2b5
  // console.log(user.email);

  const dlt = (_id) => {
    dispatch(DEL(_id));
  };

  const handle = () => {
    axios
      .post("/create-checkout-session", {
        getdata,
<<<<<<< HEAD
=======
        user
>>>>>>> 9217b08c62cfab293df4ed5f6c5ad1052863b2b5
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    dispatch(userSingleDetails());
  }, [dispatch]);
<<<<<<< HEAD

=======
>>>>>>> 9217b08c62cfab293df4ed5f6c5ad1052863b2b5
  return (
    <>
      {getdata.length ? (
        <section className="py-5">
          <div className="container">
            <div className="py-4" style={{ width: "100%" }}>
              <h3 class="mb-3 text-center fw-semibold">
                <Link to="/service">
                  <span
                    style={{
                      float: "left",
                      color: "black",
                      fontSize: "23px",
                      fontFamily: "arial",
                    }}
                  >
                    <i class="fa-sharp fa-solid fa-arrow-left mr-2"></i>continue
                  </span>
                </Link>
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
                            src={`http://localhost:3001/assets/image/${item.doc_img}`}
                            alt=""
                            style={{ height: "3rem" }}
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
            className="my-5 container"
            style={{
              textAlign: "right",
              padding: "20px 20px",
              display: "block",
              // border: "2px solid black",
            }}
          >
            <h3 style={{ fontFamily: "Arial", fontWeight: "600" }}>
              Total Price
              <span
                style={{
                  marginLeft: "30px",
                  fontFamily: "Arial",
                  fontWeight: "600",
                }}
              >
                ₹ {totalPrice}
              </span>{" "}
            </h3>
            <div>
              {loggedIn ? (
<<<<<<< HEAD
                // <button onClick={handle} className="btn btn-primary my-3 mr-3" items={getdata}>
                //   Checkout
                // </button>

                <button
                  onClick={handle}
                  className="btn btn-outline-dark btn-lg my-3"
                  style={{ padding: "10px 70px" }}
                  items={getdata}
                >
                  Checkout
                </button>
=======
                  <button onClick={handle} className="btn btn-primary my-3 mr-3" items={getdata}>
                    Checkout
                  </button>
>>>>>>> 9217b08c62cfab293df4ed5f6c5ad1052863b2b5
              ) : (
                <Link to="/login">
                  <button
                    className="btn btn-outline-dark btn-lg my-3"
                    style={{ padding: "10px 70px" }}
                  >
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
