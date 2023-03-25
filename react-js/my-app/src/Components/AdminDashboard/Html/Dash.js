import React, { useEffect } from "react";
import { GiProgression, GiProfit } from "react-icons/gi";
import { BsFillCartCheckFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
// import Data1 from "../../ServiceItem/Data1";
// import DoughnutChart from "../Charts/DoughnutChart";
import "../css/Dash.css";
import { useDispatch, useSelector } from "react-redux";
import { listService } from "../../../Redux/Actions/ServiceAction";

const Dash = () => {
  const dispatch = useDispatch();
  const serviceList = useSelector((state) => state.serviceList);
  const { error, service } = serviceList;

  useEffect(() => {
    dispatch(listService());
  }, [dispatch]);

  // const dispatch1 = useDispatch();

  return (
    <div>
      <div className="home-container">
        <div className="box-contain">
          <div className="box-icon">
            <GiProgression />
          </div>
          <div className="box-data">
            <span>Sales</span>
            <h1>+28%</h1>
          </div>
        </div>

        <div className="box-contain">
          <div className="box-icon">
            <HiUsers />
          </div>
          <div className="box-data">
            <span>New Customers</span>
            <h1>+24</h1>
          </div>
        </div>
        <div className="box-contain">
          <div className="box-icon">
            <GiProfit />
          </div>
          <div className="box-data">
            <span>Profit</span>
            <h1>+56%</h1>
          </div>
        </div>
        <div className="box-contain">
          <div className="box-icon">
            <BsFillCartCheckFill />
          </div>
          <div className="box-data">
            <span>New Orders</span>
            <h1>+26</h1>
          </div>
        </div>
        {error ? (
          <h2>{error}</h2>
        ) : (
          <div
                style={{
                  display: "flex",
                  width: "95%",
                  justifyContent: "center",
                  justifyItems: "center",
                  alignItems: "center",
                  marginTop:'6rem',
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
                    <th>Image</th>
                    <th>Service Name</th>
                    <th>Price(per)</th>
                    <th>rating</th>
                    {/* <th>Action</th> */}
                  </tr>
                </thead>
                <tbody>
                  {service.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <img
                            src={item.img}
                            alt=""
                            style={{ height: "3rem" }}
                          />
                        </td>
                        <td>{item.s_name}</td>
                        <td>₹ {item.price}</td>
                        <td> {item.rating}</td>
                        {/* <td>
                          <i
                            class="fa-solid fa-pen "
                            style={{ cursor: "pointer", marginRight: "30px" }}
                          ></i>
                          <i
                            class="fa-solid fa-trash"
                            style={{ color: "#ce3d3d", cursor: "pointer" }}
                            onClick={() => dlt(item._id)}
                          ></i>
                        </td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dash;
