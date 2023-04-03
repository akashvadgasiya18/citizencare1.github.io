import React, { useState } from "react";
import i1 from "./card_img.png";
import "./Payment.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ListItem, ListItemText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const getdata = useSelector((state) => state.cartreducer.carts);
  const { s_name, price } = getdata[0];
  console.log("price : ", price);
  console.log("name : ", s_name);
  const totalPrice = getdata.reduce((price, item) => price + item.price, 0);

  const [order, setOrder] = useState({
    fname: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
    state: "",
    country: "",
  });

  var name, value;
  const handle_Change = (e) => {
    name = e.target.name;
    value = e.target.value;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, email, address, city, zipcode, state, country } = order;
    const res = await fetch("/checkoutpage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fname,
        email,
        address,
        city,
        zipcode,
        state,
        country,
        s_name,
        price,
      }),
    });
    const data = await res.json();
    console.log("All data ",data);
    if (!data) {
      toast.error("All fields are required.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 417) {
      toast.error("All fields are required.", {
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
      navigate("/");
      toast.success("Your order confirme..", {
        position: "top-left",
        theme: "colored",
        hideProgressBar: "false",
      });
    }
  };

  return (
    <>
      <div className="pay-container">
        <form action="" method="POST">
          <div className="row">
            <div className="col">
              <h3 className="title">
                <Link to="/cart">
                  <FaArrowLeft
                    style={{
                      marginRight: "10px",
                      fontSize: "20px",
                      cursor: "pointer",
                      color: "black",
                    }}
                  />
                </Link>
                Services
              </h3>
              <div>
                {getdata.map((product, index) => (
                  <ListItem key={index} sx={{ py: 1, px: 0 }}>
                    <img src={product.doc_img} alt="" />
                    <ListItemText primary={product.s_name} />
                    <Typography variant="body2">{product.price}</Typography>
                  </ListItem>
                ))}

                <ListItem sx={{ py: 1, px: 0 }}>
                  <ListItemText
                    variant="subtitle1"
                    style={{ fontWeight: 800, fontSize: "25px" }}
                  >
                    <b>TOTAL</b>
                  </ListItemText>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 800, fontSize: "25px" }}
                  >
                    RS. {totalPrice}
                  </Typography>
                </ListItem>
              </div>
            </div>

            <div className="col">
              <h3 className="title">payment</h3>

              <div className="inputBox">
                <span>cards accepted :</span>
                <img src={i1} alt="" />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>full name :</span>
                  <input
                    type="text"
                    name="fname"
                    id=""
                    value={order.fname}
                    onChange={handle_Change}
                  />
                </div>
                <div className="inputBox">
                  <span>email :</span>
                  <input
                    type="email"
                    name="email"
                    id=""
                    value={order.email}
                    onChange={handle_Change}
                    placeholder="email"
                    required
                  />
                </div>
              </div>

              <div className="inputBox">
                <span>address :</span>
                <input
                  type="text"
                  name="address"
                  value={order.address}
                  onChange={handle_Change}
                  className="name-input"
                  placeholder="room - street - locality"
                  required
                />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>city :</span>
                  <input
                    type="text"
                    name="city"
                    value={order.city}
                    onChange={handle_Change}
                    placeholder="Ahmedabad"
                    required
                  />
                </div>
                <div className="inputBox">
                  <span>zip code :</span>
                  <input
                    type="text"
                    name="zipcode"
                    value={order.zipcode}
                    onChange={handle_Change}
                    placeholder="123456"
                    required
                  />
                </div>
              </div>

              <div className="flex">
                <div className="inputBox">
                  <span>state :</span>
                  <input
                    type="text"
                    name="state"
                    value={order.state}
                    onChange={handle_Change}
                    placeholder="gujarat"
                    required
                  />
                </div>
                <div className="inputBox">
                  <span>Country</span>
                  <input
                    type="text"
                    value={order.country}
                    onChange={handle_Change}
                    name="country"
                    placeholder=""
                    required
                  />
                </div>
              </div>

              <div className="inputBox">
                <span>name on card :</span>
                <input
                  type="text"
                  name="c_name"
                  className="name-input"
                  placeholder="Name of card holder"
                  required
                />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>credit card number :</span>
                  <input
                    type="number"
                    name="c_number"
                    placeholder="1111-2222-3333-4444"
                    required
                  />
                </div>
                <div className="inputBox">
                  <span>exp month :</span>
                  <input type="text" name="c_month" placeholder="mm" required />
                </div>
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>exp year :</span>
                  <input
                    type="number"
                    name="c_year"
                    placeholder="yyyy"
                    required
                  />
                </div>
                <div className="inputBox">
                  <span>CVV :</span>
                  <input type="text" name="c_cvv" placeholder="1234" required />
                </div>
              </div>
              <div className="inputBox">
                <input
                  type="submit"
                  value="proceed to checkout"
                  className="submit-btn"
                  onClick={handleSubmit}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default PaymentPage;
