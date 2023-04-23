import React, { useState } from "react";
import "react-bootstrap";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { DEL } from "../../Redux/Actions/action";
import impt from "../../images/empty-cart.gif";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { userSingleDetails } from "../../Redux/Actions/ServiceAction";
import { Link } from "react-router-dom";
import "../../css/Pagenotfound.css";

const CartMain = () => {
  const loggedIn = window.localStorage.getItem("isLoggedIn");

  const getdata = useSelector((state) => state.cartreducer.carts);
  const totalPrice = getdata.reduce((price, item) => price + item.price, 0);
  const [choice, setChoice] = useState();
  const [date, setDate] = useState();
  const dispatch = useDispatch();
  const singleData = useSelector((state) => state.singleData);
  const { user } = singleData;

  const dlt = (_id) => {
    dispatch(DEL(_id));
  };

  const handle = () => {
    if (getdata.length >= 2) {
      toast.error("Only one service can be booked.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (!date) {
      toast.error("Kindly select date.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (!choice) {
      toast.error("Kindly select time-slot.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else {
      axios
        .post("/create-checkout-session", {
          getdata,
          user,
          choice,
          date,
          userId: user._id,
        })
        .then((res) => {
          if (res.data.url) {
            window.location.href = res.data.url;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    dispatch(userSingleDetails());
  }, [dispatch]);

  return (
    <>
      {getdata.length ? (
        <section className="py-5">
          <div className="container">
            <div
              className="py-4"
              style={{ width: "100%", textAlign: "center" }}
            >
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
                            style={{ height: "7rem", width: "10rem" }}
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
            <br></br>
            <lable
              style={{
                fontSize: "25px",
                fontWeight: "600",
                fontFamily: "poppins",
              }}
            >
              Booking Date :
            </lable>
            <input
              type="date"
              style={{
                fontSize: "20px",
                fontFamily: "poppins",
                width: "200px",
                backgroundColor: "lavender",
                border: "none",
                borderRadius: "0px",
                height: "45px",
                marginTop: "12px",
                marginLeft: "12px",
                padding: "0px 20px",
              }}
              value={date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDate(e.target.value)}
            />
            <br></br>
            <lable
              style={{
                fontSize: "25px",
                fontWeight: "600",
                fontFamily: "poppins",
              }}
            >
              Booking Time :
            </lable>
            <select
              value={choice}
              onChange={(e) => setChoice(e.target.value)}
              aria-label="select profession"
              style={{
                fontSize: "20px",
                fontFamily: "poppins",
                width: "200px",
                backgroundColor: "lavender",
                border: "none",
                borderRadius: "0px",
                height: "45px",
                marginTop: "12px",
                marginLeft: "12px",
                padding: "0px 20px",
              }}
            >
              <option value="">Select</option>
              <option value="8:00-10:00">8:00-10:00</option>
              <option value="10:00-12:00">10:00-12:00</option>
              <option value="12:00-2:00">12:00-2:00</option>
              <option value="2:00-4:00">2:00-4:00</option>
              <option value="4:00-6:00">4:00-6:00</option>
              <option value="6:00-8:00">6:00-8:00</option>
            </select>
            <div className="col-auto">
              {loggedIn ? (
                <button
                  onClick={handle}
                  className="btn btn-outline-dark btn-lg my-4"
                  items={getdata}
                  style={{ padding: "10px 100px", marginRight: "-15px" }}
                >
                  Checkout
                </button>
              ) : (
                <>
                  <script>window.alert("Kindly Login")</script>
                  <Link to="/login">
                    <button
                      className="btn btn-outline-dark btn-lg my-3"
                      style={{ padding: "10px 100px" }}
                    >
                      Checkout
                    </button>
                  </Link>
                </>
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
            <div className="notfound">
              <Link to="/service">
                <i class="fa-solid fa-arrow-left mr-2"></i> Go Back{" "}
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CartMain;
