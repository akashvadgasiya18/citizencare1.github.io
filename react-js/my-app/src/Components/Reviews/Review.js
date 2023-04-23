import React, { useState } from "react";
import "../ServicePages/Services.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import i1 from "../../images/Advice.png";
// import { useState } from "react";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function App() {
  // --------------------- post data ------------------------------------
  let date= new Date();
  date.setHours(0,0,0,0);

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date){
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() +1 ),
      padTo2Digits(date.getDate()),
    ].join('-');
  }

  const n_date =formatDate(new Date());
  const [choice, setChoice] = useState();
  const [ser, setser] = useState({
    uname: "",
    rate: "",
    description: "",
  });

  var name, value;
  const   input_hand = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setser({ ...ser, [name]: value });
  };

  const send_review_data = async (e) => {
    // console.log(n_date);
    e.preventDefault();
    const { uname, description } = ser;
    const res = await fetch("/add_review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        uname,
        rate: choice,
        description,
        n_date,
      }),
    });
    const data = await res.json();
    console.log(data);
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
      toast.error("Kindly select rate.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 403) {
      toast.error("Kindly enter description.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 419) {
      toast.error("Not exist", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 201) {
      window.location.reload();
      toast.success("Successfully stored.", {
        position: "top-left",
        theme: "colored",
        hideProgressBar: "false",
      });
    }
  };

  return (
    <>
      <div className="product-div" style={{ backgroundColor:"ghostwhite" }}>
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
                  <option>select Rating</option>
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
                  className="review-buttons"
                  style={{ marginTop: "20px", width: "100%",backgroundColor:'black',color:'white' }}
                  type="submit"
                  onClick={send_review_data}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="product-div-right">
          <div className="img-container">
            <img src={i1} alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
}
