import React, { useState } from "react";
import { Typography } from "antd";
import "../../UserDashboard/css/EditInfo.css";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "../../UserDashboard/css/ChangePassword.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { providerSingleDetails } from "../../../Redux/Actions/ServiceAction";

const ProviderEdit = () => {
  const navigate = useNavigate();
  const [choice, setChoice] = useState(false);

  const dispatch = useDispatch();
  const singleProvider = useSelector((state) => state.singleProvider);
  const { provider } = singleProvider;

  const [details, setDetails] = useState({
    id: "",
    p_name: "",
    p_role: "",
    p_mno: "",
    p_add: "",
  });

  var name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    details.id = provider._id;
    const { id, p_name, p_mno, p_add } = details;
    const res = await fetch("/edit_provider", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        p_name,
        p_role: choice,
        p_mno,
        p_add,
      }),
    });
    const data = await res.json();
    if (!data) {
      toast.error("All fields are required.", {
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
      toast.error("Provider Not Exist", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 427) {
      toast.error("Phone number contains only 10 digit.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 201) {
      navigate("/providerDash/provideDetails");
      toast.success("Successfully updated.", {
        position: "top-left",
        theme: "colored",
        hideProgressBar: "false",
      });
    }
  };

  useEffect(() => {
    dispatch(providerSingleDetails());
  }, [dispatch]);

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
          <Link to="/providerDash/provideDetails">
            <FaArrowLeft
              style={{
                marginRight: "10px",
                fontSize: "20px",
                cursor: "pointer",
                color: "black",
              }}
            />{" "}
          </Link>
          EDIT PROVIDER DETAILS
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
              Edit Profile
            </h2>
            <input
              type="text"
              id=""
              Name="p_email"
              value={provider.p_email}
              required
            />
            <p>
              <b>(Email can't be modified..)</b>
            </p>
            <input
              type="text"
              id=""
              Name="p_name"
              placeholder={provider.p_name}
              value={details.p_name}
              onChange={handleChange}
              required
            />
            <select
              value={choice}
              onChange={(e) => setChoice(e.target.value)}
              aria-label="select profession"
            >
              <option value="Electrician">Electrician</option>
              <option value="Carpenter">Carpenter</option>
              <option value="care-taker">care-taker</option>
              <option value="Home-cleaner">Home-cleaner</option>
              <option value="Massage">Massage</option>
              <option value="Tasker">Tasker</option>
              <option value="Salon For Men">Salon For Men</option>
              <option value="Salon For Women">Salon For Women</option>
              <option value="Painter">Painter</option>
              <option value="Doctor">Doctor</option>
            </select>
            <input
              type="text"
              id=""
              Name="p_mno"
              placeholder={provider.p_mno}
              value={details.p_mno}
              onChange={handleChange}
              required
            />
            <textarea
              col="30"
              row="10"
              type="digit"
              name="p_add"
              id=""
              value={details.p_add}
              onChange={handleChange}
              placeholder={provider.p_add}
            />
            <button type="submit" onClick={handleSubmit}>
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProviderEdit;
