import React from "react";
import {
  AppstoreOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  LeftCircleOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "../../AdminDashboard/css/sidemenu.css";

const ProviderSlidbar = ({ Children }) => {
  const menuItems = [
    {
      label: "Provider",
      icon: <AppstoreOutlined style={{ fontSize: 20 }} />,
      path: "/providerDash/provideDetails",
    },
    {
      label: "Orders",
      path: "/providerDash/providerorders",
      icon: <ShoppingCartOutlined style={{ fontSize: 20 }} />,
    },
    {
      label: "ChangePassword",
      path: "/providerDash/prochangePassword",
      icon: <UserOutlined style={{ fontSize: 20 }} />,
    },
    {
      label: "Logout",
      path: "/logout",
      icon: <LeftCircleOutlined style={{ fontSize: 25 }} />,
    },
  ];
  return (
    <>
      <div className="slid-container">
        <div className="sliders" style={{ width: "100%" }}>
          {/* style={{ width: isOpen ? "18rem" :"4rem"}} */}
          <div className="slid-top-section">
            {/* <h1 className="logoss">logo</h1> */}
            {/* style={{marginLeft: isOpen ? "0rem":"0px"}} */}
            {/* onClick={toggle}  */}
          </div>
          {menuItems.map((item, index) => (
            <NavLink to={item.path} key={index} className="links">
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.label}</div>
              {/* style={{ display: isOpen ? "block":"none"}} */}
            </NavLink>
          ))}
        </div>
        <main>{Children}</main>
      </div>
    </>
  );
};

export default ProviderSlidbar;
