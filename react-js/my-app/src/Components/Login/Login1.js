import React, { useState } from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "../Registration/Reg2.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login1 = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handel_login = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();
    if (!data) {
      toast.error("Please fill data.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 401) {
      toast.error("Kindly enter email.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 402) {
      toast.error("Kindly enter password.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 413) {
      toast.error("Invalid credentional", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 201) {
      toast.success("Successfully login User.", {
        position: "top-left",
        theme: "colored",
        hideProgressBar: "false",
      });
      window.localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } else if (res.status === 202) {
      toast.success("Successfully login Provider.", {
        position: "top-left",
        theme: "colored",
        hideProgressBar: "false",
      });
      window.localStorage.setItem("isProvider", true);
      navigate("/providerDash");
    } else if (res.status === 203) {
      toast.success("Successfully login Admin.", {
        position: "top-left",
        theme: "colored",
        hideProgressBar: "false",
      });
      window.localStorage.setItem("isAdmin", true);
      navigate("/dashmain");
    }
  };

  return (
    <>
      <div className="bg-img1">
        <div className="container">
          <form method="post" action="" className="login-form">
            <div
              style={{
                backgroundColor: "white",
                padding: "40px 20px",
                borderRadius: "20px",
                display: "",
                marginTop: "90px",
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
                Please enter your essential details for registration
              </p>

              <input
                type="email"
                autoComplete="off"
                name="email"
                style={{ height: "50px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // className="form-control form-control"
                placeholder="Enter your email"
              />
              {/* </div> */}
              {/* <div className="form-outline form-black mb-4"> */}
              <input
                type="password"
                name="password"
                style={{ height: "50px" }}
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                // className="form-control form-control"
              />
              <p className="small mb-5" style={{ marginTop: "20px" }}>
                <Link to="/changepassword">
                  <a className="text-black-50" href=".">
                    Forgot password?
                  </a>
                </Link>
              </p>

              <div style={{ textAlign: "center" }}>
                <button
                  // variant="outline-dark"
                  className="btn btn-outline-dark btn-lg px-5"
                  style={{ marginTop: "-20px" }}
                  type="submit"
                  onClick={handel_login}
                >
                  Login
                </button>
              </div>

              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <p className="mb">
                  Don't have an account?{" "}
                  <Link to="/registration">
                    <a href="." className="text-black-50 fw-bold">
                      Sign Up
                    </a>
                  </Link>
                </p>
              </div>

              <p
                className="small mb-5"
                style={{
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                <Link to="/">
                  <a className="text-black-50" href=".">
                    <i className="fa-solid fa-left-long mr-2"></i>
                    Back Home
                  </a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login1;
