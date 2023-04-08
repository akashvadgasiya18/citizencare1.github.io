import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BacktoTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTop && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            backgroundColor: "black",
            color: "white",
            width: "50px",
            fontSize: "25px",
            border: "2px solid ",
            borderRadius: "50%",
          }}
          onClick={scrollUp}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default BacktoTop;
