import React from 'react'

const AdminLogin = () => {
  return (
    <>
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
                WELCOME ADMIN
              </h1>
              <p className="text-black-50 mb-5" style={{ textAlign: "center" }}>
                Please enter your essential details for registration
              </p>

              <input
                type="email"
                autoComplete="off"
                name="email"
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
                <button
                  // variant="outline-dark"
                  className="btn btn-outline-dark btn-lg px-5"
                  style={{ marginTop: "-20px" }}
                  type="submit"
                >
                  Login
                </button>
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
  )
}

export default AdminLogin
