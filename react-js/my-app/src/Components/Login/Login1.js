import React, { useContext, useState } from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "../Registration/Reg2.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../App";
// import Navbar5 from "../Navbar/Navbar5";

const Login1 = () => {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [state, setState] = useState(false);

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
    } else if (res.status === 429) {
      toast.error("All fields are required.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 413) {
      toast.error("email not matched...", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 400) {
      toast.error("Password not matched...", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 201) {
      dispatch({ type: "USER", payload: true });
      toast.success("Successfully login.", {
        position: "top-left",
        theme: "colored",
        hideProgressBar: "false",
      });
      navigate("/");
      console.log(res.data);
      
    }
  };

  return (
    <>
      {/* <Navbar5 /> */}{" "}
      {/* <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul> */}

        <div style={{ backgroundColor: "lightblue", height: "100%" }}>
        <div className="container">
          <form method="post" action="" className="login-form">
            <div
              style={{
                backgroundColor: "white",
                padding: "40px 20px",
                borderRadius: "20px",
                display: "",
              }}>
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

              {/* <div className="row d-flex justify-content-center align-items-center">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5 my-5">
                <div
                  className="card text-black"
                  style={{ width: "100%", height: "100%" }}
                >
                  <div className="card-body p-5 text-center">
                    <div className="mb-md mt-md pb-4">
                      <h2 className="fw-bold mb-2 text-uppercase">Welcome</h2>
                      <p className="text-black-50 mb-5">
                        Please enter your Username and password!
                      </p> */}

              {/* <div className="form-black mb-4 w-full"> */}
              <input
                type="email"
                autoComplete="off"
                name="email"
                style={{ height: "50px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id=""
                // className="form-control form-control"
                placeholder="Enter your email"
              />
              {/* </div> */}
              {/* <div className="form-outline form-black mb-4"> */}
              <input
                type="password"
                name="password"
                style={{ height: "50px" }}
                id=""
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
