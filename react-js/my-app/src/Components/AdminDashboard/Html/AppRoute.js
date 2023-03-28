import React from "react";
import Customer from "./Customer";
import Dash from "./Dash";
import Order from "./Order";
import { Route, Routes } from "react-router-dom";
// import Servicepages from "./Servicepages";
import ServiceMain from "./ServiceMain";
import ProviderPage from "./ProviderPage";
import ProviderOrder from "./ProviderOrder";
import Welcomepage from './Welcomepage';
import ReviewsPage from "./ReviewsPage";
// import AdminLogin from "./AdminLogin";
// import AddservicePage from "./AddservicePage";
// import AddServices from './AddServices';

const AppRoute = () => {
  return (
    <div className="PageContent" style={{ width: "100%" }}>
      <Routes>
        <Route exact path="/" element={<Welcomepage />} />
        <Route exact path="/dash" element={<Dash />}></Route>
        <Route exact path="/orders" element={<Order />}></Route>
        <Route exact path="/customers" element={<Customer />}></Route>
        <Route exact path="/providerpage" element={<ProviderPage />}></Route>
        <Route exact path="/services/*" element={<ServiceMain />} />
        <Route exact path="/providerorder" element={<ProviderOrder />} />
        <Route ecact path="/reviewPage" element={<ReviewsPage />} />
      </Routes>

      {/* <Routes>
        <Route exact path="/services/addservice" element={<AddservicePage />} />
      </Routes> */}
    </div>
  );
};

export default AppRoute;
