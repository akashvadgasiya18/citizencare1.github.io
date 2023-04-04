import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CheckSuccess() {
  const navigate = useNavigate();
  useEffect(() => {
    toast.success("Payment Done.", {
        position: "top-left",
        theme: "colored",
        hideProgressBar: "false",
      });
      navigate("/");
  });
  return <div></div>;
}

export default CheckSuccess;
