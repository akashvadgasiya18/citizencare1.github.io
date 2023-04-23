import React, { useState } from "react";
import { Typography } from "antd";
import "../css/EditInfo.css";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "../css/ChangePassword.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { userSingleDetails } from "../../../Redux/Actions/ServiceAction";

const Editprofile = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const singleData = useSelector((state) => state.singleData);
  const { user } = singleData;

  const [values, setValues] = useState({
    fname: "",
    age: "",
    id: "",
    phone_no: "",
  });

  var name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    values.id = user._id;
    const { fname, age, id, phone_no } = values;
    const res = await fetch("/edit_detail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fname,
        age,
        id,
        phone_no,
      }),
    });
    const data = await res.json();
    if (!data) {
      toast.error("All fields are required.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 401) {
      toast.error("Kindly enter name.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 402) {
      toast.error("Kindly select age.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 403) {
      toast.error("Kindly enter phone-no.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 413) {
      toast.error("User Not Exist", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 427) {
      toast.error("Phone number contains only 10 digit.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 201) {
      navigate("/profile/usersdetail");
      toast.success("Successfully updated.", {
        position: "top-left",
        theme: "colored",
        hideProgressBar: "false",
      });
    }
  };

  useEffect(() => {
    dispatch(userSingleDetails());
  }, [dispatch]);

  return (
    <div className="home-container">
      <div style={{ width: "100%" }}>
        <Typography.Title
          style={{
            textAlign: "left",
            margin: "30px 35px",
            display: "flex",
            fontFamily: "Poppins",
            fontSize: "25px",
          }}
        >
          <Link to="/profile/usersdetail">
            <FaArrowLeft
              style={{
                marginRight: "10px",
                fontSize: "20px",
                cursor: "pointer",
                color: "black",
              }}
            />{" "}
          </Link>
          EDIT USER DETAILS
        </Typography.Title>
      </div>

      <div>
        <form method="post" action="" className="login-form">
          <div
            style={{
              backgroundColor: "white",
              padding: "40px 30px",
              borderRadius: "20px",
              display: "grid",
            }}
          >
            <h2 style={{ paddingBottom: "30px", textAlign: "center" }}>
              Edit Profile
            </h2>
            <input type="text" id="" Name="email" value={user.email} required />
            <p style={{ textAlign: "left", color: "red" }}>
              <b>[ Email can't be modified..]</b>
            </p>
            <input
              type="text"
              id=""
              Name="fname"
              placeholder={user.fname}
              value={values.fname}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              id=""
              Name="age"
              max={100}
              min={user.age}
              placeholder={user.age}
              value={values.age}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id=""
              Name="phone_no"
              placeholder={user.phone_no}
              value={values.phone_no}
              onChange={handleChange}
              required
            />
            <button type="submit" onClick={handleSubmit}>
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Editprofile;
