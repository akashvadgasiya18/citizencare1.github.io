import React from "react";
import "animate.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Welcomepage = () => {
  const navigate = useNavigate();
  const verification = async () => {
    try {
      const res = await fetch("/dashmain" , {
        method: "GET",
        headers : {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await res.json();
      console.log(data);
      if(!res.status === 200)
      {
        const error = new Error(res.error);
        throw error;
        // window.alert("err");
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };
  // useEffect(() => { 
  //   verification();
  // });
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
        Hi, Welcome, Admin
      </h2>
    </div>
  );
};

export default Welcomepage;
