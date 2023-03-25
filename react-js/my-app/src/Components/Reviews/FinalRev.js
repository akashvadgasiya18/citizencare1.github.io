import React, { useEffect } from "react";
import Rating from "../ServiceItem/Rating";
import { useDispatch, useSelector } from "react-redux";
import { reviewService } from "../../Redux/Actions/ReviewAction";
import "./Review.css";

const FinalRev = () => {
  const dispatch = useDispatch();
  const reviewList = useSelector((state) => state.reviewList);
  const { reviwer } = reviewList;

  useEffect(() => {
    dispatch(reviewService());
  }, [dispatch]);
  return (
    <>
      <div>
        <section>
          <div className="container">
            <div className="cards">
              {reviwer.map((item, index) => {
                return (
                  <div className="cardd" key={index}>
                    <h3>{item.uname}</h3>
                    <span
                      className=" d-flex gap-1"
                      style={{ justifyContent: "center" }}
                    >
                      <Rating value={item.rate} />
                    </span>
                    <p>{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FinalRev;
