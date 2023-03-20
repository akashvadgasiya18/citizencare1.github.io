import React from "react";
import "animate.css";

const Welcomepage = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        textAlign: "center",
        display: "flex",
        marginTop: "15rem",
      }}
    >
      <h2
        className="animate__animated animate__fadeInDown"
        style={{ fontFamily: "Poppins", fontWeight: "700" }}
      >
        Hi, Welcome to My Profile
      </h2>
    </div>
  );
};

export default Welcomepage;
