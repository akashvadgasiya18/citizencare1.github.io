import React from "react";
import "../../UserDashboard/css/ChangePassword.css";

const ProviderPasschange = () => {
  return (
    <>
      <div className="home-container">
        <div>
          <form method="post" action="" className="login-form">
            <div
              style={{
                marginTop: "5rem",
                backgroundColor: "white",
                padding: "40px 30px",
                borderRadius: "20px",
                display: "grid",
              }}
            >
              <h2 style={{ paddingBottom: "30px", textAlign: "center" }}>
                Change Password
              </h2>
              <input
                type="email"
                id=""
                Name="email"
                placeholder="Enter email "
                autoComplete="off"
                // onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="submitButton"
                value="Submit"
                // onClick={handel_login}
              >
                Change
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProviderPasschange;
