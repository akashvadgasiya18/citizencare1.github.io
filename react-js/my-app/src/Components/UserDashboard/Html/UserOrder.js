import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  UserhistoryService,
  userSingleDetails,
} from "../../../Redux/Actions/ServiceAction";
import { Typography } from "antd";
import "../../AdminDashboard/css/servicepage.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const singleData = useSelector((state) => state.singleData);
  const { user } = singleData;
  const historyList = useSelector((state) => state.historyList);
  const { orderList } = historyList;

  useEffect(() => {
    dispatch(userSingleDetails());
  }, [dispatch]);

  const email = user.email;
  useEffect(() => {
    dispatch(UserhistoryService(email));
  }, [email]);

  const done = async (id) => {
    const res = await fetch("/done_history", {
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
      navigate("/profile/userorders");
      toast.success("Successfully doned.", {
        position: "top-left",
        theme: "colored",
        hideProgressBar: "false",
      });
      window.location.reload(true);
    }
  };

  const handel = async (id) => {
    const res = await fetch("/delete_history", {
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
      navigate("/profile/userorders");
      toast.success("Successfully deleted.", {
        position: "top-left",
        theme: "colored",
        hideProgressBar: "false",
      });
      window.location.reload(true);
    }
  };

  return (
    <>
      <div>
        <div>
          <Typography.Title
            style={{
              textAlign: "left",
              margin: "30px 35px",
              fontSize: "30px",
              fontFamily: "Poppins",
            }}
          >
            Booking Details
          </Typography.Title>
          {/* <p>{user.email}</p> */}
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
                      <th>Payment_id</th>
                      <th>Service name</th>
                      <th>Address</th>
                      <th>Date</th>
                      <th>Scheduale</th>
                      <th>Status</th>
                      <th>Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderList.map((item, idx) => {
                      return (
                        <>
                          <tr key={idx}>
                            <td>{item.paymentId}</td>
                            <td>{item.service[0].s_name}</td>
                            <td>
                              {item.address.line1} , {item.address.line2} ,
                              {item.address.postal_code}
                            </td>
                            <td>{item.date}</td>
                            <td>{item.scheduale}</td>
                            <td>{item.status}</td>
                            <td>{item.total}</td>
                            {item.status === "done" ? (
                              <>
                                <td style={{color: "green"}}>Completed</td>
                              </>
                            ) : (
                              <>
                                <td>
                                  <Link
                                    to={`/profile/userorders/editOrder/${item._id}`}
                                  >
                                    <Button
                                      variant="primary"
                                      style={{ marginRight: "10px" }}
                                    >
                                      <i
                                        class="fa-solid fa-pen edit-icons mr-2"
                                        style={{ fontSize: "12px" }}
                                      ></i>
                                      Edit
                                    </Button>
                                  </Link>
                                  <Button
                                    variant="success"
                                    onClick={() => done(item._id)}
                                    style={{ marginRight: "10px" }}
                                  >
                                    {" "}
                                    Done{" "}
                                  </Button>
                                  <Button
                                    variant="danger"
                                    onClick={() => handel(item._id)}
                                  >
                                    Delete
                                  </Button>
                                </td>
                              </>
                            )}
                          </tr>
                        </>
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
export default UserOrder;
