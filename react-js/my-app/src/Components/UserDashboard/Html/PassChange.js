import "../css/ChangePassword.css";
import React from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSingleDetails } from "../../../Redux/Actions/ServiceAction";

function Changepass() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const singleData = useSelector((state) => state.singleData);
  const { user } = singleData;
  const email = user.email;

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

  useEffect(() => {
    dispatch(userSingleDetails());
  }, [dispatch]);
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
              <input
                type="email"
                id=""
                Name="email"
                autoComplete="off"
                value={user.email}
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
