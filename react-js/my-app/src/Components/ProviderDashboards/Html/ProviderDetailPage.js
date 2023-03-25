import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const ProviderDetailPage = () => {
  return (
    <div>
      <Typography.Title
        style={{
          textAlign: "left",
          margin: "30px 35px",
          fontSize: "30px",
          fontFamily: "Poppins",
        }}
      >
        User Details
      </Typography.Title>

      {/* --------------------------- tabel ------------------------------------- */}
      <div>
        <div className="card" style={{ display: "flex", width: "95%" }}>
          <div class="header_fixed">
            <table>
              <thead className="text-dark">
                <tr>
                  <th>Name</th>
                  <th>Email ID</th>
                  <th>AGE</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <Link to="/providerDash/provideDetails/editProviderdetail">
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetailPage;
