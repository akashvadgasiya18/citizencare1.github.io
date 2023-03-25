import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import Rating from "../ServiceItem/Rating";
import "./Review.css";

import { useDispatch, useSelector } from "react-redux";
import { reviewService } from "../../Redux/Actions/ReviewAction";

const Reviews2 = () => {
  const dispatch = useDispatch();
  const reviewList = useSelector((state) => state.reviewList);
  const { error, reviwer } = reviewList;

  useEffect(() => {
    dispatch(reviewService());
  }, [dispatch]);
  
  return (
    <>
      <div className="review-div">
        {error ? (
          <h2>{error}</h2>
        ) : (
          <div className="cards gap-3">
            {reviwer.map((item, index) => {
              return (
                <div className="rev-crd">
                  <h3>{item.uname}</h3>
                  <span className=" d-flex gap-1">
                    <Rating value={item.rate} />
                  </span>
                  <Typography variant="body2" className="my-2">
                    {item.description}
                    <br />
                  </Typography>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Reviews2;
