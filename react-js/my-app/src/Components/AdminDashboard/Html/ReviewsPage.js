import { Typography } from "antd";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { reviewService } from "../../../Redux/Actions/ReviewAction";
import Rating from "../../ServiceItem/Rating";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import nothing from "../../../images/nothing.png";

const ReviewsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reviewList = useSelector((state) => state.reviewList);
  const { reviwer } = reviewList;

  useEffect(() => {
    dispatch(reviewService());
  }, [dispatch]);
  const handel = async (id) => {
    const res = await fetch("/delete_review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
      }),
    });
    if (res.status === 429) {
      toast.error("Something went wrong.", {
        position: "top-center",
        theme: "colored",
        hideProgressBar: "false",
      });
    } else if (res.status === 201) {
      window.location.reload();
      navigate("/dashmain/reviewPage");
      toast.success("Successfully deleted.", {
        position: "top-left",
        theme: "colored",
        hideProgressBar: "false",
      });
      window.location.reload(true);
    }
  };

  return (
    <>
      {reviwer.length ? (
        <div className="home-container">
          <div style={{ width: "100%" }}>
            <Typography.Title
              style={{
                textAlign: "left",
                margin: "30px 35px",
                fontSize: "30px",
              }}
            >
              Customer Reviews
            </Typography.Title>
            {/* <div className="addservice-btn">
            <Link to="/dashboards/services/Addservicepage">
              <Button variant="primary">Add Service</Button>
            </Link>
          </div> */}

            {/* --------------------------- tabel ------------------------------------- */}

            <div>
              <div
                style={{
                  display: "flex",
                  width: "95%",
                  justifyContent: "center",
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                <div
                  class="header_fixed ml-3"
                  style={{
                    justifyContent: "center",
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                >
                  <table>
                    <thead className="text-dark">
                      <tr>
                        <th>Customer Name</th>
                        <th>Rating</th>
                        <th>Description</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reviwer.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.uname}</td>
                            <td>
                              <Rating value={item.rate} />
                            </td>
                            <td>❝ {item.description} ❞</td>
                            <td>
                              <Button
                                variant="danger"
                                className="ml-3"
                                onClick={() => handel(item._id)}
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Typography.Title
            style={{
              textAlign: "left",
              margin: "30px 35px",
              fontSize: "30px",
            }}
          >
            Customer Reviews
          </Typography.Title>
          <div>
            <img
              src={nothing}
              alt=""
              style={{ width: "60%", marginTop: "20px" }}
            />
          </div>
        </>
      )}
    </>
  );
};

export default ReviewsPage;
