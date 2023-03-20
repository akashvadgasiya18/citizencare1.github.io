import React from "react";
// import {ImageSlider} from "./ImageSlider";

function Dots({ activeIndex, onclick, ImageSlider }) {
  return (
    <div className="all-dots">
      {ImageSlider.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;