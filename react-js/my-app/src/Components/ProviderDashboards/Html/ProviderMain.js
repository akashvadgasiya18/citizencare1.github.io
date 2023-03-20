import { Hidden } from "@mui/material";
import React from "react";
import ProviderHeader from "./ProviderHeader";
import ProviderRoute from "./ProviderRoute";
import ProviderSlidbar from "./ProviderSlidbar";
import "../../AdminDashboard/css/Header.css"

const ProviderMain = () => {
  return (
    <div className="App">
      <ProviderHeader />
      <div className="SideMenuAndPageContent">
        <Hidden mdDown>
          <ProviderSlidbar />
        </Hidden>
        <ProviderRoute />
      </div>
    </div>
  );
};

export default ProviderMain;
