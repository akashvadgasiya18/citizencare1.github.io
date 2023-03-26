import { Typography } from "antd";
import React from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { providerSingleDetails } from "../../../Redux/Actions/ServiceAction";

const ProviderDetailPage = () => {
  const dispatch = useDispatch();
  const singleProvider = useSelector((state) => state.singleProvider);
  const { provider } = singleProvider;

  useEffect(() => {
    dispatch(providerSingleDetails());
  }, [dispatch]);
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
        Provider Details
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
                  <th>Profession</th>
                  <th>Email ID</th>
                  <th>Phone_no</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{provider.p_name}</td>
                  <td>{provider.p_role}</td>
                  <td>{provider.p_email}</td>
                  <td>{provider.p_mno}</td>
                  <td>{provider.p_add}</td>
                  <td>
                    <Link to="/providerDash/provideDetails/editProviderdetail">
                      <Button variant="primary">
                        <i
                          class="fa-solid fa-pen edit-icons mr-2"
                          style={{ fontSize: "12px" }}
                        ></i>
                        Edit
                      </Button>
                    </Link>
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
