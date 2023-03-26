import React from "react";
import { Route, Routes } from "react-router-dom";
import AddservicePage from "./AddservicePage";
import EditServices from "./EditServices";
import Servicepages from "./Servicepages";

const ServiceRoute = () => {
  return (
    <div className="PageContent" style={{ width: "auto" }}>
      <Routes>
        <Route exact path="/" element={<Servicepages />} />
        <Route exact path="/Addservicepage" element={<AddservicePage />} />
        <Route exact path="/editservicepage/:id" element={<EditServices />} />
      </Routes>
    </div>
  );
};

export default ServiceRoute;
