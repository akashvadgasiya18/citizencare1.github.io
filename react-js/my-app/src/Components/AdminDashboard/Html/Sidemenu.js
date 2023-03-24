// import {
//     AppstoreOutlined,
//     ShoppingCartOutlined,
//     UserOutlined,
//     WalletOutlined,
//     LeftCircleOutlined
//   } from "@ant-design/icons";
// import {FaRegImage} from 'react-icons/fa';
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/sidemenu.css";

function Sidemenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        style={{ display: "block" }}
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashbaord",
            // icon: <AppstoreOutlined style={{ fontSize: 20 }}/>,
            key: "/dashboards/dash",
          },
          {
            label: "Orders",
            key: "/dashboards/orders",
            // icon: <ShoppingCartOutlined style={{ fontSize: 20 }}/>,
          },
          {
            label: "Customers",
            key: "/dashboards/customers",
            // icon: <UserOutlined style={{ fontSize: 20 }}/>,
          },
          {
            label: "Services",
            key: "/dashboards/services",
            // icon: <FaRegImage style={{ fontSize: 20 }}/>
          },
          {
            label: "Transactions",
            key: "/dashboards/transaction",
            // icon: <WalletOutlined style={{ fontSize: 20 }}/>,
          },
          {
            label: "Log-out",
            key: "/logout",
            // icon: <LeftCircleOutlined style={{ fontSize: 25 }}/>,
          },
        ]}
      ></Menu>
    </div>
  );
}
export default Sidemenu;
