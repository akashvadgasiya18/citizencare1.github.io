import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Orderpaid,
  providersDetails,
} from "../../../Redux/Actions/ServiceAction";
import axios from "axios";

const ProviderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const providersList = useSelector((state) => state.providersList);
  const { error, providers } = providersList;
  const [search, setSearch] = useState("");
  const orderList = useSelector((state) => state.orderList);
  const { orders } = orderList;
  let detail = "";
  useEffect(() => {
    dispatch(providersDetails());
    dispatch(Orderpaid());
  }, [dispatch]);

  const handel = async (id) => {
    const res = await fetch("/delete_provider", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
      }),
    });
    if (res.status === 429) {
      toast.error("Something went wrong.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 201) {
      window.location.reload();
      navigate("/dashmain/providerpage");
      toast.success("Successfully deleted.", {
        position: "top-left",
        theme: "colored",
        hideProgressBar: "false",
      });
      window.location.reload(true);
    }
  };
  const send = async (item, detail) => {
    if (detail === "") {
      toast.error("Kindly select order.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else {
      try {
        await axios.post("/send_order", ({item, detail}));
        navigate("/dashmain/providerpage");
        toast.success("Order sent to provider.", {
          position: "top-left",
          theme: "colored",
          hideProgressBar: "false",
        });
        window.location.reload(true);
      } catch (err) {
        if (err.response.status === 413) {
          toast.error("Something went wrong.", {
            position: "top-center",
            theme: "colored",
            hideProgressBar: "false",
          });
        }
      }
    }
  };

  const selectionList = async (item) => {
    detail = item;
  };
  return (
    <>
      <div className="home-container">
        <div style={{ width: "100%" }}>
          <Typography.Title
            style={{ textAlign: "left", margin: "30px 35px", fontSize: "30px" }}
          >
            Provider Details
          </Typography.Title>
          <form>
            <div class="search-sre-container">
              <div class="search_ser_wrap search_ser_wrap_1">
                <div class="search_ser_box">
                  <input
                    type="text"
                    class="input"
                    placeholder="search..."
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                  <div class="btn btn_common">
                    <i class="fas fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
          </form>

          {/* --------------------------- tabel ------------------------------------- */}

          {error ? (
            <h2>{error}</h2>
          ) : (
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
                        <th>Role</th>
                        <th>Email_Id</th>
                        <th>Phone_no</th>
                        <th>Address</th>
                        <th>Time_slot</th>
                        <th>Documents</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {providers
                        .filter((item) => {
                          if (search === " ") {
                            return item;
                          } else if (
                            item.p_role
                              .toLowerCase()
                              .includes(search.toLocaleLowerCase())
                          ) {
                            return item;
                          }
                        })
                        .map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>{item.p_name}</td>
                              <td>{item.p_role}</td>
                              <td>{item.p_email}</td>
                              <td>{item.p_mno}</td>
                              <td>{item.p_add}</td>
                              <td>{item.time_slot}</td>
                              <td>
                                <img
                                  src={`http://localhost:3001/assets/img_pro/${item.p_file}`}
                                  alt=""
                                  style={{ height: "3rem" }}
                                />
                              </td>
                              <td>
                                {/* <Link to="/dashmain/providerorder"> */}
                                <Button
                                  variant="primary"
                                  className="mr-3"
                                  onClick={() => send(item, detail)}
                                >
                                  send
                                </Button>
                                {/* </Link> */}
                                <Button
                                  variant="danger"
                                  onClick={() => handel(item._id)}
                                >
                                  Delete
                                </Button>
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

          {/* -----------------Order Table------------------------ */}
          <br></br>
          <br></br>
          <h1>Order Table</h1>
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
                      <th>Select</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone_no</th>
                      <th>Address</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Zipcode</th>
                      <th>Timing</th>
                      <th>Service</th>
                      <th>Status</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            {" "}
                            <input
                              type="checkbox"
                              name="select"
                              onChange={() => selectionList(item)}
                            />{" "}
                          </td>
                          <td>{item.fname}</td>
                          <td>{item.email}</td>
                          <td>{item.phone_no}</td>
                          <td>{item.address.line1}</td>
                          <td>{item.address.city}</td>
                          <td>{item.address.state}</td>
                          <td>{item.address.postal_code}</td>
                          <td>{item.scheduale}</td>
                          <td>{item.service[0].s_name}</td>
                          <td>{item.status}</td>
                          <td>₹ {item.total}</td>
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

export default ProviderPage;
