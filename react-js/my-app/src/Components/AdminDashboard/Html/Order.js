import React from "react";
// import Button from "react-bootstrap/Button";
import Data1 from "../../ServiceItem/Data1";
import { Typography } from "antd";
import "../css/servicepage.css";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <>
      <div className="home-container">
        <div style={{ width: "100%" }}>
          <Typography.Title
            style={{ textAlign: "left", margin: "30px 35px", fontSize: "30px" }}
          >
            Order Page
          </Typography.Title>
          {/* <div className="addservice-btn">
            <Link to="/dashboards/services/Addservicepage">
              <Button variant="primary">Add Service</Button>
            </Link>
          </div> */}

          {/* --------------------------- tabel ------------------------------------- */}
          <div style={{ width: "100%" }}>
            <div className="card">
              <div class="header_fixed">
                <table>
                  <thead className="text-dark">
                    <tr>
                      <th>Image</th>
                      <th>Service Name</th>
                      <th>Price(per)</th>
                      <th>rating</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Data1.serviceData.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <img
                              src={item.img}
                              alt=""
                              style={{ height: "3rem" }}
                            />
                          </td>
                          <td>{item.s_name}</td>
                          <td>₹ {item.price}</td>
                          <td> {item.rating}</td>
                          <td>
                            <Link to="/dashboards/services/editservicepage">
                              <i
                                class="fa-solid fa-pen edit-icons icons-1"
                                style={{
                                  cursor: "pointer",
                                  // marginRight: "30px",
                                  paddingRight: "30px",
                                }}
                              ></i>
                            </Link>
                            <i
                              class="fa-solid fa-trash edit-icons icons-2"
                              style={{
                                color: "#ce3d3d",
                                cursor: "pointer",
                              }}
                            ></i>
                          </td>
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
