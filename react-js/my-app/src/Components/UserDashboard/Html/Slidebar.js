import React from "react";
import { NavLink } from "react-router-dom";
import "../../AdminDashboard/css/sidemenu.css";
import {
  AppstoreOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  LeftCircleOutlined,
} from "@ant-design/icons";

const Slidebar = ({ Children }) => {
  const menuItems = [
    {
      label: "UsersInfo",
      icon: <AppstoreOutlined style={{ fontSize: 20 }} />,
      path: "/profile/usersdetail",
    },
    {
      label: "Booking Details",
      path: "/profile/userorders",
      icon: <ShoppingCartOutlined style={{ fontSize: 20 }} />,
    },
    {
      label: "ChangePassword",
      path: "/profile/changePassword",
      icon: <UserOutlined style={{ fontSize: 20 }} />,
    },
    {
      label: "Back",
      path: "/",
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

export default Slidebar;
