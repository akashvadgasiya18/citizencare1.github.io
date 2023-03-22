import React from "react";
import "../css/Pagenotfound.css";
// import Navbar5 from "../Components/Navbar/Navbar5";
import { Link } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>we are sorry!! Page not found</h2>
          <p className="mb-5">
            The page which you want to show is not temporary available.
          </p>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </>
  );
};

export default Pagenotfound;
