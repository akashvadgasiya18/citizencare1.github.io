import React from "react";
import { NavLink } from "react-router-dom";
import "../css/sidemenu.css";
import {
  AppstoreOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { FaListUl, FaThumbsUp, FaUserTie } from "react-icons/fa";

const Slidebar1 = ({ Children }) => {
  const menuItems = [
    {
      label: "Dashbaord",
      icon: <AppstoreOutlined style={{ fontSize: 20 }} />,
      path: "/dashmain/dash",
    },
    {
      label: "Booking",
      path: "/dashmain/orders",
      icon: <ShoppingCartOutlined style={{ fontSize: 20 }} />,
    },
    {
      label: "Customers",
      path: "/dashmain/customers",
      icon: <UserOutlined style={{ fontSize: 20 }} />,
    },
    {
      label: "Provider",
      path: "/dashmain/providerpage",
      icon: <FaUserTie style={{ fontSize: 20 }} />,
    },
    {
      label: "Services",
      path: "/dashmain/services",
      icon: <FaListUl style={{ fontSize: 20 }} />,
    },
    {
      label: "Reviews",
      path: "/dashmain/reviewPage",
      icon: <FaThumbsUp style={{ fontSize: 20 }} />,
    },
    {
      label: "Back",
      path: "/",
      icon: (
        <ArrowLeftOutlined
          style={{ fontSize: 20, color: "black", fontWeight: 700 }}
        />
      ),
    },
  ];
  return (
    <>
      <div className="slid-container">
        <div className="sliders">
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

export default Slidebar1;
