import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcomepage from "../../UserDashboard/Html/Welcomepage";
import ProviderEdit from "./ProviderEdit";
import ProviderOrder from "./ProviderOrder";
import ProviderPasschange from "./ProviderPasschange";

const ProviderRoute = () => {
  return (
    <div className="PageContent" style={{ width: "100%" }}>
      <Routes>
        <Route exact path="/" element={<Welcomepage />}></Route>
        <Route exact path="/provideredit" element={<ProviderEdit />}></Route>
        <Route exact path="/providerorders" element={<ProviderOrder />}></Route>
        <Route exact path="/prochangePassword" element={<ProviderPasschange />}></Route>
      </Routes>
    </div>
  );
};

export default ProviderRoute;
