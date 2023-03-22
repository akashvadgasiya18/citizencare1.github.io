import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
// import Data1 from "../../ServiceItem/Data1";
import { Typography } from "antd";
import "../css/servicepage.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listService } from "../../../Redux/Actions/ServiceAction";
import { DEL } from "../../../Redux/Actions/action";

const Servicepages = () => {
  const dispatch = useDispatch();
  const serviceList = useSelector((state) => state.serviceList);
  const { error, service } = serviceList;

  useEffect(() => {
    dispatch(listService());
  }, [dispatch]);

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const dlt = (_id) => {
    dispatch(DEL(_id));
  };

  return (
    <>
      <div className="home-container">
        <div style={{ width: "100%" }}>
          <Typography.Title
            style={{ textAlign: "left", margin: "30px 35px", fontSize: "30px" }}
          >
            Service Page
          </Typography.Title>
          <div className="addservice-btn">
            <Link to="/dashmain/services/Addservicepage">
              <Button variant="primary">Add Service</Button>
            </Link>
          </div>

          {/* --------------------------- tabel ------------------------------------- */}
          {error ? (
            <h2>{error}</h2>
          ) : (
            <div>
              <div
                className="card"
                style={{ display: "flex", width: "95%", marginTop: "5rem" }}
              >
                <div class="header_fixed">
                  <table>
                    <thead className="text-dark">
                      <tr>
                        <th>Image</th>
                        <th>Service Name</th>
                        <th>Price(per)</th>
                        <th>Rating</th>
                        <th>Likes</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {service.map((item) => {
                        return (
                          <tr item={item}>
                            <td>
                              <img
                                src={item.doc_img}
                                alt=""
                                style={{ height: "3rem" }}
                              />
                            </td>
                            <td>{item.s_name}</td>
                            <td>₹ {item.price}</td>
                            <td>⭐{item.rating}</td>
                            <td>{item.likes}</td>
                            <td>
                              <Link
                                to={`/dashmain/services/${item._id}`}
                              >
                                <i
                                  class="fa-solid fa-pen edit-icons icons-1"
                                  style={{
                                    cursor: "pointer",
                                    // marginRight: "30px",
                                    paddingRight: "30px",
                                  }}
                                ></i>
                              </Link>
                              <button
                                style={{
                                  color: "#ce3d3d",
                                  cursor: "pointer",
                                }}
                                onClick={() => dlt(item._id)}
                              >
                                <i class="fa-solid fa-trash edit-icons icons-2"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Servicepages;
