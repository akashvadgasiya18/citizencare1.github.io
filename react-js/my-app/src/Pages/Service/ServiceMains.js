import React from "react";
import Navbar5 from "../../Components/Navbar/Navbar5";
import ImageBanner from "../../Components/Common/ImageBanner";
// import Service from "./Service";
import { CartProvider } from "react-use-cart";
import Items from "../../Components/ServiceItem/Items";
// import SearchBar from "./SearchBar";

const ServiceMains = () => {
  return (
    <>
      <Navbar5 />
      <ImageBanner title="Service Page" />
      <CartProvider>
        <Items />
      </CartProvider>
    </>
  );
};

export default ServiceMains;
