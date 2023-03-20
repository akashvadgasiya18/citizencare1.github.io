import React from "react";
import { CartProvider } from "react-use-cart";
import Navbar5 from "../Navbar/Navbar5";
import CartMain from "../Cart/CartMain";

const Cart = () => {
  return (
    <>
      <CartProvider>
        <Navbar5 />
        <CartMain />
      </CartProvider>
    </>
  );
};

export default Cart;
