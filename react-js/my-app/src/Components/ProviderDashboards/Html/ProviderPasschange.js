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
                type="text"
                id=""
                Name="old"
                placeholder="OLD Password"
                required
              />
              <input
                type="password"
                id=""
                Name="newpass"
                placeholder="New Password"
                required
              />
              <input
                type="password"
                id=""
                Name="cnewpass"
                placeholder="Confirm Password"
                required
              />

              <button type="submit">Change</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProviderPasschange;
