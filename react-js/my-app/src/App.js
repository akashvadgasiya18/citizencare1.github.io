import React from "react";
import "../src/App.css";
// import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
// import Service from "./Pages/Service/Service";
// import Registration1 from "./Components/Registration/Registration1";
import Registration1 from "./Components/Registration/Registration1";
import Login1 from "./Components/Login/Login1";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import ChangePassword from "./Pages/ChangePassword";
// import Main from "./Components/AdminDashboard/Html/Main";
// import AppRoute from "./Components/AdminDashboard/Html/AppRoute";
// import Main from "./Components/AdminDashboard/Html/Main";
// import Main from "./Components/AdminDashboard/Html/Main";
// import ServicePage from "./Components/ServicePages/ServicePage";
// import Customer from "./Components/AdminDashboard/Html/Customer";
// import Dash from "./Components/AdminDashboard/Html/Dash";
// import Order from "./Components/AdminDashboard/Html/Order";
import Mainpage from "./Components/UserDashboard/Html/Mainpage";
import ServicePage from "./Components/ServicePages/ServicePage";
import Pagenotfound from "./Pages/Pagenotfound";
import Logout from "./Components/Logout/Logout";
import { ToastContainer } from "react-toastify";
import ChackOut from "./Components/PaymentPage/ChackOut";
import Items from "./Components/ServiceItem/Items";
import AboutMain from "./Pages/About/AboutMain";
import ServiceMains from "./Pages/Service/ServiceMains";
import AdminLogin from "./Components/AdminDashboard/Html/AdminLogin";
import Main from "./Components/AdminDashboard/Html/Main";
import ProviderMain from "./Components/ProviderDashboards/Html/ProviderMain";

const App = () => {
  // const Admin = window.localStorage.getItem("isAdmin");
  // const Provider = window.localStorage.getItem("isProvider");

  return (
    <>
      <Router>
        {/* <Navbar /> */}
        {/* <SlideBar /> */}
        {/* <Footer /> */}

        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/about" element={<AboutMain />} />
          <Route exact path="/service" element={<ServiceMains />} />
          <Route exact path="/contact" element={<Contact></Contact>} />
          <Route exact path="/login" element={<Login1></Login1>} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route exact path="/registration" element={<Registration1 />} />

          <Route exact path="/providerDash/*" element={<ProviderMain />} />
          <Route exact path="/dashboard" element={<AdminLogin />} />
          <Route exact path="/profile/*" element={<Mainpage />} />
          <Route exact path="/dashmain/*" element={<Main />} />

          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/changepassword" element={<ChangePassword />} />
          <Route exact path="/checkoutpage" element={<ChackOut />} />
          <Route exact path="/details" element={<Items />} />

          <Route exact path="/details/:id" element={<ServicePage />}></Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
