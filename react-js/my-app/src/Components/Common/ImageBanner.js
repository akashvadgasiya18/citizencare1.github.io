import React from "react";
import "../../Components/Common/ImageBanner.css";
import "animate.css";

const ImageBanner = ({ title }) => {
  return (
    <>
      <div className="bg-images">
        <div className="animate__animated animate__fadeInDown">{title}</div>
      </div>
    </>
  );
};

export default ImageBanner;
