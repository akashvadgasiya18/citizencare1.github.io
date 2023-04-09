import React from "react";
import "../../css/Home.css";
import Footer from "../../Components/Footer/Footer";
import Featured from "../../Components/Feature/Feature";
import Heading from "../../Components/Common/Heading";
import Banner from "../../Components/Banner/Banner";
import Section1 from "../../Components/How_Work/Section1";
import Section2 from "../../Components/How_Work/Section2";
import Navbar5 from "../../Components/Navbar/Navbar5";
import BacktoTop from "../../Components/Common/BacktoTop";
import Service from "../Service/Service";

const Home = () => {
  return (
    <>
      <Navbar5></Navbar5>
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

      {/* ----------------------- service cards ------------------------ */}

      <Footer></Footer>
      <BacktoTop />
    </>
  );
};

export default Home;
