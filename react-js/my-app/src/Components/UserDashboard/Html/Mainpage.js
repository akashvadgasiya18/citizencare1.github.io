import React from "react";
import Approute2 from "./Approute2";
import "../../AdminDashboard/css/Header.css";
// import Footers from "../../AdminDashboard/Html/Footers";
import Slidebar from "./Slidebar";
import { Hidden } from "@mui/material";
import UserHeader from "./UserHeader";
// import Slidebar from "../../AdminDashboard/Html/Slidebar1";

const Mainpage = () => {
  return (
    <div className="App">
      <UserHeader />
      <div className="SideMenuAndPageContent">
        <Hidden mdDown>
          <Slidebar />
        </Hidden>
        <Approute2 />
      </div>
      {/* <Footers /> */}
    </div>
  );
};

export default Mainpage;
