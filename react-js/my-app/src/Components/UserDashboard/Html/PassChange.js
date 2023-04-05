import "../css/ChangePassword.css";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Changepass() {
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
      navigate("/logout");
      toast.success("Successfully email sent.", {
        position: "top-left",
        theme: "colored",
        hideProgressBar: "false",
      });
    }
  };
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
              <p
                style={{
                  fontSize: "16px",
                  color: "darkgray",
                  marginBottom: "50px",
                }}
              >
                You can change Password through Email ID
              </p>
              <label style={{ float: "left",display:'flex'}}>Enter Email Id</label>
              <input
                type="email"
                id=""
                Name="email"
                // placeholder="Enter email "
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Changepass;
