import React from "react";
import { Route, Routes } from "react-router-dom";
import PassChange from "../Html/PassChange";
import UserMain from "./UserMain";
// import UserDetailPage from "./UserDetailPage";
// import UserOrder from "./UserOrder";
import Welcomepage from "../Html/Welcomepage";
// import EditUserOrder from "./EditUserOrder";
import OrderEditRoute from "./OrderEditRoute";
// import PasswordMain from "./PasswordMain"

const Approute2 = () => {
  return (
    <div className="PageContent" style={{ width: "100%" }}>
      <Routes>
        <Route exact path="/" element={<Welcomepage />}></Route>
        <Route exact path="/usersdetail/*" element={<UserMain />}></Route>
        <Route exact path="/userorders/*" element={<OrderEditRoute />}></Route>
        <Route exact path="/changePassword" element={<PassChange />}></Route>
      </Routes>
    </div>
  );
};

export default Approute2;
