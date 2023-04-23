import React, { useState } from "react";
import Footer from "../Footer/Footer";
import axios from "axios";
import "./Reg2.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Registration1 = () => {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);
  const [choice, setChoice] = useState();
  const [time, setTime] = useState();

  // ------------------------------ for provider----------------------------------
  const [provider, setProvider] = useState({
    p_name: "",
    p_role: "",
    p_email: "",
    p_mno: "",
    p_password: "",
    p_cpassword: "",
    p_add: "",
    time_slot: "",
    p_file: "",
  });

  const input_handle = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setProvider({ ...provider, [name]: value });
  };

  const img_upload = (e) => {
    setProvider({ ...provider, p_file: e.target.files[0] });
  };

  const send_p_data = async (e) => {
    e.preventDefault();
    if (!choice || !time) {
      toast.error("All fields are required.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else {
      const formData = new FormData();
      formData.append("p_name", provider.p_name);
      formData.append("p_role", choice);
      formData.append("p_email", provider.p_email);
      formData.append("p_mno", provider.p_mno);
      formData.append("p_password", provider.p_password);
      formData.append("p_cpassword", provider.p_cpassword);
      formData.append("p_add", provider.p_add);
      formData.append("time_slot", time);
      formData.append("p_file", provider.p_file);
      try {
        await axios.post("/p_registration", formData);
        navigate("/login");
        toast.success("Successfully registerd.", {
          position: "top-left",
          theme: "colored",
          hideProgressBar: "false",
        });
      } catch (err) {
        if (err.response.status === 401) {
          toast.error("Kindly enter name.", {
            position: "top-center",
            theme: "colored",
            hideProgressBar: "false",
          });
        } else if (err.response.status === 402) {
          toast.error("Kindly select profession.", {
            position: "top-center",
            theme: "colored",
            hideProgressBar: "false",
          });
        } else if (err.response.status === 403) {
          toast.error("Kindly enter email.", {
            position: "top-center",
            theme: "colored",
            hideProgressBar: "false",
          });
        } else if (err.response.status === 404) {
          toast.error("Kindly enter phone-no.", {
            position: "top-center",
            theme: "colored",
            hideProgressBar: "false",
          });
        } else if (err.response.status === 405) {
          toast.error("Kindly enter password.", {
            position: "top-center",
            theme: "colored",
            hideProgressBar: "false",
          });
        } else if (err.response.status === 406) {
          toast.error("Kindly enter confirm-password.", {
            position: "top-center",
            theme: "colored",
            hideProgressBar: "false",
          });
        } else if (err.response.status === 407) {
          toast.error("Kindly select time-slot.", {
            position: "top-center",
            theme: "colored",
            hideProgressBar: "false",
          });
        } else if (err.response.status === 427) {
          toast.error("Phone number contains only 10 digit.", {
            position: "top-center",
            theme: "colored",
            hideProgressBar: "false",
          });
        } else if (err.response.status === 413) {
          toast.error("Already Exist", {
            position: "top-center",
            theme: "colored",
            hideProgressBar: "false",
          });
        } else if (err.response.status === 411) {
          toast.error("password can't be less than 5.", {
            position: "top-center",
            theme: "colored",
            hideProgressBar: "false",
          });
        } else if (err.response.status === 422) {
          toast.error("Confirm password and password should be same.", {
            position: "top-center",
            theme: "colored",
            hideProgressBar: "false",
          });
        } else if (err.response.status === 429) {
          toast.error("Upload document.", {
            position: "top-center",
            theme: "colored",
            hideProgressBar: "false",
          });
        }
      }
    }
  };

  // --------------------------- for user -----------------------------------
  const navigate = useNavigate();
  const [values, setValues] = useState({
    fname: "",
    age: "",
    email: "",
    phone_no: "",
    password: "",
    cpassword: "",
  });

  var name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, age, email, phone_no, password, cpassword } = values;
    const res = await fetch("/registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fname,
        age,
        email,
        phone_no,
        password,
        cpassword,
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
      toast.error("Kindly select age.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 403) {
      toast.error("Kindly enter email.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 404) {
      toast.error("Kindly enter phone-no.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 405) {
      toast.error("Kindly enter password.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 406) {
      toast.error("Kindly enter confirm-password.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 427) {
      toast.error("Phone-no contains only 10 digit.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 429) {
      toast.error("Age can't be less than 40 and greater than 100.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 413) {
      toast.error("Already Exist", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 411) {
      toast.error("password can't be less than 5.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 422) {
      toast.error("Confirm password and password should be same.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 201) {
      navigate("/login");
      toast.success("Successfully registerd.", {
        position: "top-left",
        theme: "colored",
        hideProgressBar: "false",
      });
    }
  };

  return (
    <>
      {/* <Navbar3 /> */}
      <div>
        {/* <section className="h-full"> */}
        <div className="bg-img1">
          <div className="container">
            <form method="post" action="" className="login-form">
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
                  REGISTER
                </h1>
                <p
                  className="text-black-50 mb-5"
                  style={{ textAlign: "center", marginTop: "-20px" }}
                >
                  Please select your type for registration
                </p>

                <div style={{ height: "45px", marginBottom: "3rem" }}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    className="radi-btns-choice"
                  >
                    <FormControlLabel
                      value="user"
                      name="user"
                      control={<Radio />}
                      label="User"
                      onClick={() => setHide(true) || setShow(false)}
                    />
                    <FormControlLabel
                      value="professional"
                      control={<Radio />}
                      name="provider"
                      label="Professional"
                      onClick={() => setShow(true) || setHide(false)}
                    />
                  </RadioGroup>
                </div>

                {hide ? (
                  <>
                    {/* <div className="text-blank mb-3 w-full my-5"> */}
                    <input
                      type="text"
                      id=""
                      name="fname"
                      value={values.fname}
                      onChange={handleChange}
                      // className="form-control form-control mb-3"
                      placeholder="Enter your Name"
                    />
                    <input
                      type="number"
                      name="age"
                      placeholder="Select Age"
                      max={100}
                      min={40}
                      autoComplete="off"
                      value={values.age}
                      onChange={handleChange}
                      // className="form-control form-control mb-3"
                    />

                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      id=""
                      // className="form-control form-control mb-3"
                      placeholder="Enter your email"
                    />

                    <input
                      type="text"
                      name="phone_no"
                      placeholder="Enter Contact no"
                      autoComplete="off"
                      value={values.phone_no}
                      onChange={handleChange}
                      // className="form-control form-control mb-3"
                    />

                    <input
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      id=""
                      // className="form-control "
                      placeholder="Password"
                    />

                    <input
                      type="password"
                      name="cpassword"
                      value={values.cpassword}
                      onChange={handleChange}
                      id=""
                      placeholder="Confirm Password"
                      // className="form-control form-control mb-3"
                    />
                    {/* </div> */}
                    {/* <button
                    className="btn btn-outline-dark btn-lg px-5"
                    type="submit"
                    onClick={handleSubmit}
                    style={{ marginTop: "3rem" }}
                  >
                    Register
                  </button> */}
                    <div className="regis-btns">
                      <button
                        type="submit"
                        className="btn btn-outline-dark btn-lg px-5"
                        style={{ marginTop: "3rem" }}
                        onClick={handleSubmit}
                      >
                        Register
                      </button>
                    </div>
                  </>
                ) : null}

                {show ? (
                  <>
                    {/* <div className="form-outline form-black mb-3 my-5"> */}
                    <input
                      type="text"
                      id=""
                      name="p_name"
                      value={provider.p_name}
                      onChange={input_handle}
                      // className="form-control form-control mb-3"
                      placeholder="Enter your Name"
                    />
                    <select
                      // className="form-select"
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
                      <option value="Appliances">Appliances(repair)</option>
                      <option value="Painter">Painter</option>
                      <option value="Doctor">Doctor</option>
                    </select>

                    <input
                      type="email"
                      name="p_email"
                      placeholder="Enter your email"
                      autocomplete="off"
                      value={provider.p_email}
                      onChange={input_handle}
                      // className="form-control form-control mb-3"
                    />

                    <input
                      type="text"
                      name="p_mno"
                      placeholder="contact no"
                      autoComplete="off"
                      value={provider.p_mno}
                      onChange={input_handle}
                      // className="form-control form-control mb-3"
                    />

                    <input
                      type="password"
                      name="p_password"
                      value={provider.p_password}
                      onChange={input_handle}
                      id=""
                      // className="form-control form-control mb-3"
                      placeholder="Password"
                    />

                    <input
                      type="password"
                      name="p_cpassword"
                      value={provider.p_cpassword}
                      onChange={input_handle}
                      id=""
                      placeholder="Confirm Password"
                      // className="form-control form-control mb-3"
                    />

                    <textarea
                      col="30"
                      row="10"
                      type="digit"
                      name="p_add"
                      id=""
                      value={provider.p_add}
                      onChange={input_handle}
                      placeholder="Address"
                      // className="form-control form-control mb-3"
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

                    <input
                      type="file"
                      id=""
                      name="p_file"
                      onChange={img_upload}
                      placeholder="Upload Documents"
                      style={{ height: "50px" }}
                      // className="form-control form-control mb-3"
                    />
                    <p>
                      <b>[ Upload any Id-proof ]</b>
                    </p>

                    {/* </div> */}
                    {/* <button
                    className="btn btn-outline-dark btn-lg px-5"
                    type="submit"
                    onClick={send_p_data}
                    style={{ marginTop: "3rem" }}
                  >
                    Register
                  </button> */}
                    <div>
                      <button
                        type="submit"
                        className="btn btn-outline-dark btn-lg px-5"
                        style={{ marginTop: "1rem" }}
                        onClick={send_p_data}
                      >
                        Register
                      </button>
                    </div>
                  </>
                ) : null}
                {/* </div> */}

                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                  <p className="mb">
                    Already have an Account.?
                    <Link to="/login">
                      <a href="." className="text-black-50 fw-bold">
                        Sign In
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
      </div>
      <Footer />
    </>
  );
};
export default Registration1;
