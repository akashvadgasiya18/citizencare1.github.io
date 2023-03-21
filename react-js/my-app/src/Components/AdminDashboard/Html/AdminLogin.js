import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkValid = () => {
    if (email !== "akash@gmail.com" || password !== "12345") {
      window.alert("Mail or password invalid");
      navigate("/dashboard");
    } else {
      navigate("/dashmain");
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "lightblue", height: "100%" }}>
        <div className="container">
          <form action="" className="login-form">
            <div
              style={{
                backgroundColor: "white",
                padding: "40px 20px",
                borderRadius: "20px",
                display: "",
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
                WELCOME ADMIN
              </h1>
              <p className="text-black-50 mb-5" style={{ textAlign: "center" }}>
                Please enter your essential details for registration
              </p>

              <input
                type="email"
                autoComplete="off"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ height: "50px" }}
                id=""
                // className="form-control form-control"
                placeholder="Enter your email"
              />
              {/* </div> */}
              {/* <div className="form-outline form-black mb-4"> */}
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ height: "50px" }}
                id=""
                autoComplete="off"
                placeholder="Enter Password"
                // className="form-control form-control"
              />
              {/* </div> */}
              <p className="small mb-5" style={{ marginTop: "20px" }}>
                <a className="text-black-50" href="#!">
                  Forgot password?
                </a>
              </p>

              <div style={{ textAlign: "center" }}>
                {/* <Link to="/dashmain"> */}
                <button
                  // variant="outline-dark"
                  className="btn btn-outline-dark btn-lg px-5"
                  style={{ marginTop: "-20px" }}
                  type="submit"
                  onClick={checkValid}
                >
                  Login
                </button>
                {/* </Link> */}
              </div>

              {/* <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <p className="mb">
                  Don't have an account?{" "}
                  <Link to="/registration">
                    <a href="." className="text-black-50 fw-bold">
                      Sign Up
                    </a>
                  </Link>
                </p>
              </div> */}

              {/* <p
                className="small mb-5"
                style={{
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
            
              </p> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
