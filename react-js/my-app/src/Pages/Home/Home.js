import React from "react";
import "../../css/Home.css";
import Footer from "../../Components/Footer/Footer";
import Featured from "../../Components/Feature/Feature";
import Heading from "../../Components/Common/Heading";
// import Items from "../../Components/ServiceItem/Items";
import Banner from "../../Components/Banner/Banner";
import Section1 from "../../Components/How_Work/Section1";
import Section2 from "../../Components/How_Work/Section2";
// import { CartProvider } from "react-use-cart";
// import Review from "../../Components/Reviews/Review"
import Navbar5 from "../../Components/Navbar/Navbar5";
import BacktoTop from "../../Components/Common/BacktoTop";
import Service from "../Service/Service";
// import CleaningPage from "../../ServicePages/CleaningPage";
// import ChangePassword from "../ChangePassword";
// import Services from '../../Components/ServicePages/Services'
// import Review from "../../Components/Reviews/Review"
// import ChackOut from "../../Components/PaymentPage/ChackOut"

const Home = () => {
  return (
    <>
      <Navbar5></Navbar5>
      {/* <Main /> */}
      {/* <Review /> */}
      <Banner />

      {/*----- icon cards ---------------*/}

      <Featured></Featured>
      <br />
      <br />

      {/* ----------- heading middle --------------------- */}
      <Heading
        title="How to work this site ?"
        subtitle="Steps follow to works"
      />

      {/*------------------ section --------------------  */}
      <Section1 />

      <Service />
      
      <br />
      <br />
      <br />
      <Heading title="Why choose this site ?" subtitle="" />
      <Section2 />

      {/* <Heading title="You want to give suggestions.. ?" subtitle="" />
      <Review /> */}

      {/* ----------------------- service cards ------------------------ */}

      <Footer></Footer>
      <BacktoTop />
    </>
  );
};

export default Home;
