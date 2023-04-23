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
  const [time, setTime] = useState(false);

  const dispatch = useDispatch();
  const singleProvider = useSelector((state) => state.singleProvider);
  const { provider } = singleProvider;

  const [details, setDetails] = useState({
    id: "",
    p_name: "",
    p_role: "",
    p_mno: "",
    p_add: "",
    time_slot: "",
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
        time_slot: time,
      }),
    });
    const data = await res.json();
    if (!data) {
      toast.error("All fields are required.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 401) {
      toast.error("Kindly enter name.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 402) {
      toast.error("Kindly select profession.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 403) {
      toast.error("Kindly enter phone-no.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 404) {
      toast.error("Kindly enter address.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 405) {
      toast.error("Kindly select time-slot.", {
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
            <select
              // className="form-select"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              aria-label="select time-slot"
            >
              <option value="full-time">full-time</option>
              <option value="9:00-1:00">9:00-1:00</option>
              <option value="10:00-2:00">10:00-2:00</option>
              <option value="11:00-3:00">11:00-3:00</option>
              <option value="12:00-4:00">12:00-4:00</option>
              <option value="1:00-5:00">1:00-5:00</option>
              <option value="2:00-6:00">2:00-6:00</option>
              <option value="3:00-7:00">3:00-7:00</option>
              <option value="4:00-8:00">4:00-8:00</option>
              <option value="5:00-9:00">5:00-9:00</option>
            </select>
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
