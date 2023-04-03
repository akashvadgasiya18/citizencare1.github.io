import React from "react";
import i1 from "./card_img.png";
import "./Payment.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ListItem, ListItemText, Typography } from "@mui/material";

const PaymentPage = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log("getdata item :", getdata);
  const totalPrice = getdata.reduce((price, item) => price + item.price, 0);

  return (
    <>
      <div className="pay-container">
        <form action="">
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
                  <input type="text" placeholder="Name" required/>
                </div>
                <div className="inputBox">
                  <span>email :</span>
                  <input type="email" placeholder="email" required />
                </div>
              </div>

              <div className="inputBox">
                <span>address :</span>
                <input
                  type="text"
                  className="name-input"
                  placeholder="room - street - locality"
                  required
                />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>city :</span>
                  <input type="text" placeholder="Ahmedabad" required/>
                </div>
                <div className="inputBox">
                  <span>zip code :</span>
                  <input type="text" placeholder="123456" required/>
                </div>
              </div>

              <div className="flex">
                <div className="inputBox">
                  <span>state :</span>
                  <input type="text" placeholder="gujarat" required/>
                </div>
                <div className="inputBox">
                  <span>Country</span>
                  <input type="text" placeholder="" required/>
                </div>
              </div>

              <div className="inputBox">
                <span>name on card :</span>
                <input
                  type="text"
                  className="name-input"
                  placeholder="Name of card holder"
                  required
                />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>credit card number :</span>
                  <input type="number" placeholder="1111-2222-3333-4444" required/>
                </div>
                <div className="inputBox">
                  <span>exp month :</span>
                  <input type="text" placeholder="mm" required/>
                </div>
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>exp year :</span>
                  <input type="number" placeholder="yyyy" required/>
                </div>
                <div className="inputBox">
                  <span>CVV :</span>
                  <input type="text" placeholder="1234" required/>
                </div>
              </div>
              <div className="inputBox">
                <input
                  type="submit"
                  value="proceed to checkout"
                  className="submit-btn"
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
