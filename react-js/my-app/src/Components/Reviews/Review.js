import React, { useState } from "react";
import "../ServicePages/Services.css";
// import { styled } from "@mui/material/styles";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
// import { useState } from "react";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function App() {
  const [choice, setChoice] = useState();
  const [ser, setser] = useState({
    uname: "",
    rate: "",
    description: "",
  });

  var name, value;
  const input_hand = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setser({ ...ser, [name]: value });
  };

  const send_review_data = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("uname", ser.uname);
    formData.append("rate", choice);
    formData.append("description", ser.description);

    try {
      await axios.post("/add_review", formData);
      alert("Successfully Added.");
    } catch (err) {
      if (err.response.status === 417) {
        alert("All fields are required.");
      } else if (err.response.status === 419) {
        alert("user not exists.");
      }
    }
  };

  return (
    <>
      <div className="product-div">
        <div className="product-div-left">
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h1>Your Opinion ..??</h1>
          </div>

          {/* <div
              style={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              {Array(5)
                .fill()
                .map((_, index) =>
                  number >= index + 1 || hoverStar >= index + 1 ? (
                    <AiFillStar
                      onMouseOver={() => !number && setHoverStar(index + 1)}
                      onMouseLeave={() => setHoverStar(undefined)}
                      style={{
                        color: "orange",
                        fontSize: "40px",
                      }}
                      onClick={() => setNumber(index + 1)}
                    />
                  ) : (
                    <AiOutlineStar
                      onMouseOver={() => !number && setHoverStar(index + 1)}
                      onMouseLeave={() => setHoverStar(undefined)}
                      style={{ color: "orange", fontSize: "40px" }}
                      onClick={() => setNumber(index + 1)}
                    />
                  )
                )}
            </div> */}
          <div>
            <form action="" method="POST">
              <div
                style={{
                  marginTop: "2rem",
                  width: "70%",
                  // display:'flex',
                  justifyContent: "center",
                  margin: "auto",
                }}
              >
                <Form.Control
                  type="text"
                  className="mb-3 my-4"
                  name="uname"
                  value={ser.uname}
                  onChange={input_hand}
                  placeholder="Enter email or username"
                />

                <Form.Select
                  value={choice}
                  onChange={(e) => setChoice(e.target.value)}
                >
                  {/* <option>select Rating</option> */}
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>

                <Form.Control
                  as="textarea"
                  name="description"
                  value={ser.description}
                  onChange={input_hand}
                  placeholder="Leave a comment here"
                  style={{ height: "100px", marginTop: "20px" }}
                />
                <Button
                  variant="success"
                  className="review-buttons"
                  style={{ marginTop: "20px", width: "100%" }}
                  type="submit"
                  onClick={send_review_data}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div>Akash vadgasiya</div>
      </div>
    </>
  );
}
