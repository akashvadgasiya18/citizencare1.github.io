import Header from "./Header";
import React from "react";
import "../css/Header.css";
// import Sidemenu from "./Sidemenu";
// import Footers from "./Footers";
import AppRoute from "./AppRoute";
import Slidebar1 from "./Slidebar1";
import { Hidden } from "@mui/material";
// import AppRoute from './AppRoute';

const Main = () => {
  return (
    <div className="App">
      <Header />
      <div className="SideMenuAndPageContent">
        <Hidden mdDown>
          <Slidebar1 />
        </Hidden>
        <AppRoute />
      </div>
      {/* <Footers /> */}
    </div>
  );
};

export default Main;
