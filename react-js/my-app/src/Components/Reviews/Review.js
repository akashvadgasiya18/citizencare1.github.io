import "./Review.css";
import React from "react";
import { styled } from "@mui/material/styles";
import img2 from "../../images/Advice.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function App() {
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);

  const reviewSubmit =()=>{
    window.alert("Review Submitted..");
  }
  
  return (
    <>
      <div className="review-container">
        <div className="review-contact-box">
          {/* <form method="post" action=""> */}
            <div className="left">
              <div className="product">
                <h1>Your Opinion ..??</h1>
              </div>

              <div className="star-product">
                {Array(5)
                  .fill()
                  .map((_, index) =>
                    number >= index + 1 || hoverStar >= index + 1 ? (
                      <AiFillStar
                        onMouseOver={() => !number && setHoverStar(index + 1)}
                        onMouseLeave={() => setHoverStar(undefined)}
                        style={{ color: "orange", fontSize: "40px" }}
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
                <Form.Group style={{ marginTop: "20px" }}>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email or username"
                  />
                </Form.Group>
                <Form.Control
                  as="textarea"
                  name="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px", marginTop: "20px" }}
                />
                <Button
                  variant="success"
                  className="review-buttons"
                  style={{ marginTop: "20px" }}
                  type="submit"      
                  onClick={reviewSubmit}          
                  >
                  Submit
                </Button>
              </div>
            </div>
            <div className="right">
              <Img alt="complex" src={img2} />
            </div>
          {/* </form> */}
        </div>
      </div>
    </>
  );
}
