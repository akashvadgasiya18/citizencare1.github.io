import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";

const EditUserOrder = ({ item }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [choice, setChoice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/edit_history", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        choice,
        date,
        id,
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
      toast.error("Kindly select time-slot.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 402) {
      toast.error("Kindly select date.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 413) {
      toast.error("Order not found.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 201) {
      navigate("/profile/userorders");
      toast.success("Successfully updated.", {
        position: "top-left",
        theme: "colored",
        hideProgressBar: "false",
      });
    }
  };
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
          <Link to="/profile/userorders">
            <FaArrowLeft
              style={{
                marginRight: "10px",
                fontSize: "20px",
                cursor: "pointer",
                color: "black",
              }}
            />{" "}
          </Link>
          EDIT BOOKINGS DETAILS
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
              Edit Bookings
            </h2>
            <p>You can only edit Date and scheduale of your order</p>
            <lable
              style={{
                fontSize: "20px",
                fontFamily: "poppins",
                float: "left",
                display: "flex",
                marginTop: "2rem",
              }}
            >
              Booking Date :
            </lable>
            <input
              type="date"
              value={date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDate(e.target.value)}
            />
            <lable
              style={{
                fontSize: "20px",
                fontFamily: "poppins",
                float: "left",
                display: "flex",
              }}
            >
              Booking Time :
            </lable>
            <select
              aria-label="select profession"
              value={choice}
              onChange={(e) => setChoice(e.target.value)}
            >
              <option value="">Select</option>
              <option value="8:00-10:00">8:00-10:00</option>
              <option value="10:00-12:00">10:00-12:00</option>
              <option value="12:00-2:00">12:00-2:00</option>
              <option value="2:00-4:00">2:00-4:00</option>
              <option value="4:00-6:00">4:00-6:00</option>
              <option value="6:00-8:00">6:00-8:00</option>
            </select>
            <button type="submit" onClick={handleSubmit}>
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserOrder;
