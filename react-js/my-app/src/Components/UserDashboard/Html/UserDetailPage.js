import { Typography } from "antd";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSingleDetails } from "../../../Redux/Actions/ServiceAction";
import "../css/UserInfo.css";

const UserDetailPage = () => {
  const dispatch = useDispatch();
  const singleData = useSelector((state) => state.singleData);
  const { user } = singleData;

  useEffect(() => {
    dispatch(userSingleDetails());
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
        User Details
      </Typography.Title>

      <div className="userdetail-div">
        <div
          className="userdetail-div-left"
          style={{
            justifyContent: "center",
            display: "block",
            alignItems: "center",
            width: "50%",
          }}
        >
          <i class="fa-solid fa-circle-user"></i>
        </div>
        <div className="userdetail-div-right">
          <label>
            User Name :
            <span style={{ fontWeight: "700", marginLeft: "10px" }}>
              {user.fname}
            </span>
          </label>
          <br />
          <label>
            Email ID :
            <span style={{ fontWeight: "700", marginLeft: "10px" }}>
              {user.email}
            </span>
          </label>
          <br />
          <label>
            AGE :
            <span style={{ fontWeight: "700", marginLeft: "10px" }}>
              {user.age}
            </span>
          </label>
          <br />
          <label>
            Contact No :{" "}
            <span style={{ fontWeight: "700", marginLeft: "10px" }}>
              {user.phone_no}
            </span>
          </label>
          <br />
          <br />
          <label>
            <Link to="/profile/usersdetail/edituserdetail">
              <Button variant="primary">
                <i
                  class="fa-solid fa-pen edit-icons mr-2"
                  style={{ fontSize: "12px" }}
                ></i>
                Edit
              </Button>
            </Link>
          </label>
        </div>
      </div>

      {/* --------------------------- tabel ------------------------------------- */}
      {/* <div>
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
                  <th>Email ID</th>
                  <th>Age</th>
                  <th>Phone no</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{user.fname}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>{user.phone_no}</td>
                  <td>
                    <Link to="/profile/usersdetail/edituserdetail">
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
      </div> */}
    </div>
  );
};

export default UserDetailPage;
