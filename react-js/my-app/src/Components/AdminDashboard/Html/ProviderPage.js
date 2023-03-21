import { Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Data1 from "../../ServiceItem/Data1";
import { providersDetails } from "../../../Redux/Actions/ServiceAction";

const ProviderPage = () => {
  const dispatch = useDispatch();
  const providersList = useSelector((state) => state.providersList);
  const { error, providers } = providersList;

  useEffect(() => {
    dispatch(providersDetails());
  }, [dispatch]);
  return (
    <>
      <div className="home-container">
        <div style={{ width: "100%" }}>
          <Typography.Title
            style={{ textAlign: "left", margin: "30px 35px", fontSize: "30px" }}
          >
            Provider Details
          </Typography.Title>
          {/* <div className="addservice-btn">
            <Link to="/dashboards/services/Addservicepage">
              <Button variant="primary">Add Service</Button>
            </Link>
          </div> */}

          {/* --------------------------- tabel ------------------------------------- */}

          {error ? (
            <h2>{error}</h2>
          ) : (
            <div>
              <div className="card" style={{ display: "flex", width: "95%" }}>
                <div class="header_fixed">
                  <table>
                    <thead className="text-dark">
                      <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email Id</th>
                        <th>Address</th>
                        <th>Documents</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {providers.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.p_name}</td>
                            <td>{item.p_role}</td>
                            <td>{item.p_email}</td>
                            <td>{item.p_add}</td>
                            <td>{item.p_file}</td>
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
          )}
        </div>
      </div>
    </>
  );
};

export default ProviderPage;
