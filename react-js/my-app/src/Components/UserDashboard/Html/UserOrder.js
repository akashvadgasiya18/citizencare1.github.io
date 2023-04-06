import React from "react";
// import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // UserhistoryService,
  userSingleDetails,
} from "../../../Redux/Actions/ServiceAction";
import { Typography } from "antd";
import "../../AdminDashboard/css/servicepage.css";
import axios from "axios";
// import { Link } from "react-router-dom";

const UserOrder = () => {
  const dispatch = useDispatch();
  const singleData = useSelector((state) => state.singleData);
  const { user } = singleData;
  let [responseData, setResponseData] = React.useState("");
  // const [ detail, setDetail ] =useState();
  // const historyList = useSelector((state) => state.historyList);
  // const { user_history } = historyList;
  // console.log(user_history);
  // state = {
  //   details: [],
  // };

  const getdetails = () => {
    const email = user.email;
    axios
      .get(`/userorders/${email}`)
      .then((res) => {
        console.log(res);
        setResponseData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    dispatch(userSingleDetails());
    getdetails();
  }, [dispatch]);

  // const email = user.email;
  // useEffect(() => {
  //   dispatch(UserhistoryService(email));
  //   // get_print();
  // },[email]);
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
          <p>{user.email}</p>
          {/* --------------------------- tabel ------------------------------------- */}
          <div>
            <div className="card" style={{ display: "flex", width: "95%" }}>
              <div class="header_fixed">
                {/* <h1>{responseData.total}</h1> */}
                <table>
                  <thead className="text-dark">
                    <tr>
                      <th>Payment_id</th>
                      {/* <th>Service Name</th>  */}
                      {/* <th>Price(per)</th> */}
                      <th>Scheduale</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={responseData._id}>
                      <td>{responseData.paymentId}</td>
                      <td>{responseData.scheduale}</td>
                      <td>₹ {responseData.total}</td>
                    </tr>
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
