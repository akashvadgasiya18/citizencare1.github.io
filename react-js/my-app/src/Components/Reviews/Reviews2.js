import React, { useEffect } from "react";
import { Avatar, Typography } from "@mui/material";
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
                  <h5 style={{ display: "inline-flex" }}>
                    <Avatar
                      src="/broken-image.jpg"
                      style={{
                        cursor: "pointer",
                        marginRight: "10px",
                        height: "30px",
                        width: "30px",
                      }}
                    />
                    {item.uname}
                  </h5>
                  <br></br>
                  <p>{item.n_date}</p>
                  <span className=" d-flex gap-1">
                    <Rating value={item.rate} />
                  </span>
                  <Typography variant="body2" className="my-2">
                    ❝ {item.description} ❞
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
