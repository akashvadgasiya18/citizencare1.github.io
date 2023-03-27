import React, { useState } from "react";
import "../css/Registration.css";
import "../css/Login1.css";
// import Footer from '../Components/Footer/Footer'
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const ChangePassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handel_login = async (e) => {
    e.preventDefault();
    const reset = await fetch("/forgotpassword", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
      }),
    });
    if (reset.status === 429) {
      toast.error("All fields are required.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (reset.status === 413) {
      toast.error("User not exists.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (reset.status === 201) {
      navigate("/login");
      toast.success("Successfully email sent.", {
        position: "top-left",
        theme: "colored",
        hideProgressBar: "false",
      });
    }
  };
  return (
    <>
      <div
        className="home-container"
        style={{ backgroundColor: "lightblue", height: "100%" }}
      >
        <div className="container">
          <form
            method="post"
            action=""
            className="login-form"
            style={{ marginTop: "8rem" }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "40px 40px",
                borderRadius: "20px",
                display: "grid",
              }}
            >
              <h1
                style={{
                  paddingBottom: "50px",
                  textAlign: "center",
                  fontFamily: "poppins",
                  fontWeight: "700",
                }}
              >
                WELCOME
              </h1>
              <p className="text-black-50 mb-5" style={{ textAlign: "center" }}>
                Please enter your Email id for password change
              </p>
              <input
                type="email"
                id=""
                Name="email"
                placeholder="Enter email "
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="submitButton"
                value="Submit"
                onClick={handel_login}
              >
                Change
              </button>
              <div className="my-3">
                <Link to="/">
                  <a className="text-black-50" href=".">
                    <i className="fa-solid fa-left-long mr-2"></i>
                    Back Home
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChangePassword;
