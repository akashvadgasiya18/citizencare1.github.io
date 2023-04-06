import React from "react";
import "animate.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSingleDetails } from "../../../Redux/Actions/ServiceAction";

const Welcomepage = () => {
  const dispatch = useDispatch();
  const singleData = useSelector((state) => state.singleData);
  const { user } = singleData;

  useEffect(() => {
    dispatch(userSingleDetails());
  }, [dispatch]);

  const navigate = useNavigate();
  const verification = async () => {
    try {
      const res = await fetch("/profile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
      window.location.reload();
    }
  };
  useEffect(() => {
    verification();
  });
  return (
    <div
      style={{
        justifyContent: "center",
        textAlign: "center",
        display: "block",
        marginTop: "15rem",
      }}
    >
      <h2
        className="animate__animated animate__fadeInDown"
        style={{ fontFamily: "Poppins", fontWeight: "700" }}
      >
        Hi, Welcome
        <span style={{ color: "green", fontWeight: "700" }}> {user.fname}</span>
      </h2>
    </div>
  );
};

export default Welcomepage;
