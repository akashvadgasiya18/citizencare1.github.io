import { Typography } from "antd";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Data1 from "../../ServiceItem/Data1";
import { toast } from "react-toastify";
import { providersDetails } from "../../../Redux/Actions/ServiceAction";

const ProviderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const providersList = useSelector((state) => state.providersList);
  const { error, providers } = providersList;

  useEffect(() => {
    dispatch(providersDetails());
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
    }
  };
  const send = async (p_email) => {
    const res = await fetch("/send_order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        p_email,
      }),
    });
    if (res.status === 413) {
      toast.error("Something went wrong.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 201) {
      navigate("/dashmain/providerpage");
      toast.success("Order sent to provider.", {
        position: "top-left",
        theme: "colored",
        hideProgressBar: "false",
      });
    }
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
                            <td>{item.p_mno}</td>
                            <td>{item.p_add}</td>
                            <td>
                              <img
                                src={`http://localhost:3001/assets/img_pro/${item.p_file}`}
                                alt=""
                                style={{ height: "3rem" }}
                              />
                            </td>
                            <td>
                              <Link to="/dashmain/providerorder">
                                <Button
                                  variant="primary"
                                  className="mr-3"
                                  onClick={() => send(item.p_email)}
                                >
                                  send
                                </Button>
                              </Link>
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
        </div>
      </div>
    </>
  );
};

export default ProviderPage;
