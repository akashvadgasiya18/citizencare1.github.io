import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  UserhistoryService,
  userSingleDetails,
} from "../../../Redux/Actions/ServiceAction";
import { Typography } from "antd";
import "../../AdminDashboard/css/servicepage.css";

const UserOrder = () => {
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
  },[email]);
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
            <div className="card" style={{ display: "flex", width: "95%" }}>
              <div class="header_fixed">
                <table>
                  <thead className="text-dark">
                    <tr>
                      <th>Payment_id</th>
                      <th>Service name</th>
                      <th>Address</th>
                      <th>Scheduale</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    { orderList.map((item, idx) => {
                      return (
                        <>
                          <tr key={idx}>
                            <td>{item.paymentId}</td>
                            <td>{item.service[0].s_name}</td>
                            <td>{item.address.line1},{item.address.line2},{item.address.postal_code}</td>
                            <td>{item.scheduale}</td>
                            <td>{item.total}</td>
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
