import React from "react";
// import EditUserOrder from "./EditUserOrder";
import UserOrder from "./UserOrder";
import { Route, Routes } from "react-router-dom";
import EditUserOrder from "./EditUserOrder";

const OrderEditRoute = () => {
  return (
    <>
      <div className="App">
        <div className="SideMenuAndPageContent2">
          <Routes>
            <Route exact path="/" element={<UserOrder />} />
            <Route exact path="/editOrder/:id" element={<EditUserOrder />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
export default OrderEditRoute;
