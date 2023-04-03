import React, { useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import Data1 from "../../ServiceItem/Data1";
import { Typography } from "antd";
import "../css/servicepage.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userBooking } from "../../../Redux/Actions/ServiceAction";

const Order = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookList);
  const { booking } = bookList;

  useEffect(() => {
    dispatch(userBooking());
  }, [dispatch]);

  return (
    <>
      <div className="home-container">
        <div style={{ width: "100%" }}>
          <Typography.Title
            style={{ textAlign: "left", margin: "30px 35px", fontSize: "30px" }}
          >
            Order Page
          </Typography.Title>

          {/* --------------------------- tabel ------------------------------------- */}
          <div>
            <div
              style={{
                display: "flex",
                width: "95%",
                justifyContent: "center",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <div
                class="header_fixed ml-3"
                style={{
                  justifyContent: "center",
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                <table>
                  <thead className="text-dark">
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Zipcode</th>
                      <th>Country</th>
                      <th>Service</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {booking.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.fname}</td>
                          <td>{item.email}</td>
                          <td>{item.address}</td>
                          <td>{item.city}</td>
                          <td>{item.state}</td>
                          <td>{item.zipcode}</td>
                          <td>{item.country}</td>
                          <td>{item.s_name}</td>
                          <td>₹ {item.price}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
