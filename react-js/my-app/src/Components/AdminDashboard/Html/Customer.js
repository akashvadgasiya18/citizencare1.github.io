import React, { useEffect, useState } from "react";
import { Typography } from "antd";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../../../Redux/Actions/ServiceAction";

const Customer = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { error, users } = userList;

  useEffect(() => {
    dispatch(userDetails());
  }, [dispatch]);

  const [search, setSearch] = useState("");

  return (
    <>
      <div className="home-container">
        <div style={{ width: "100%", height: "100%" }}>
          <Typography.Title
            style={{ textAlign: "left", margin: "30px 35px", fontSize: "30px" }}
          >
            Customer Details
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

          {/* <div className="addservice-btn">
            <Link to="/dashboards/services/Addservicepage">
              <Button variant="primary">Add Service</Button>
            </Link>
          </div> */}

          {/* --------------------------- tabel ------------------------------------- */}

          <div>
            {error ? (
              <h2>{error}</h2>
            ) : (
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
                        <th>Age</th>
                        <th>Email_Id</th>
                        <th>Phone_no</th>
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {users
                        .filter((item) => {
                          if (search === " ") {
                            return item;
                          } else if (
                            item.fname
                              .toLowerCase()
                              .includes(search.toLocaleLowerCase())
                          ) {
                            return item;
                          }
                        })
                        .map((item) => {
                          return (
                            <tr key={item._id}>
                              <td>{item.fname}</td>
                              <td>{item.age}</td>
                              <td>{item.email}</td>
                              <td>{item.phone_no}</td>
                              {/* <td>
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
                            </td> */}
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
