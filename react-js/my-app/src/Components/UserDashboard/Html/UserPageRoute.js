import React from "react";
import { Route, Routes } from "react-router-dom";
import Editprofile from "./Editprofile";
import UserDetailPage from "./UserDetailPage";

const UserPageRoute = () => {
  return (
    <div className="PageContent" style={{ width: "auto" }}>
      <Routes>
        <Route exact path="/" element={<UserDetailPage />} />
        <Route exact path="/edituserdetail" element={<Editprofile />}></Route>
      </Routes>
    </div>
  );
};

export default UserPageRoute;
