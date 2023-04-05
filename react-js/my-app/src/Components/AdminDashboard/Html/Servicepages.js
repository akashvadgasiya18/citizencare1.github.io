import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Typography } from "antd";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../css/servicepage.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import img from '../../../../../Backend/assets/image/1680286832811_IMG-20211017-WA0030.jpg'
import { listService } from "../../../Redux/Actions/ServiceAction";

const Servicepages = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const serviceList = useSelector((state) => state.serviceList);
  const { error, service } = serviceList;
  useEffect(() => {
    dispatch(listService());
  }, [dispatch]);
  const handel = async (id) => {
    const res = await fetch("/delete_service", {
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
      navigate("/dashmain/services");
      toast.success("Successfully deleted.", {
        position: "top-left",
        theme: "colored",
        hideProgressBar: "false",
      });
      window.location.reload(true);
    }
  };
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  return (
    <>
      <div className="home-container">
        <div style={{ width: "100%" }}>
          <Typography.Title
            style={{ textAlign: "left", margin: "30px 35px", fontSize: "30px" }}
          >
            Service Page
          </Typography.Title>
          <div className="addservice-btn">
            <Link to="/dashmain/services/Addservicepage">
              <Button variant="primary">
                <i class="fa-sharp fa-solid fa-plus mr-2"></i>Add Service
              </Button>
            </Link>
          </div>

          {/* --------------------------- tabel ------------------------------------- */}
          {error ? (
            <h2>{error}</h2>
          ) : (
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
                        <th>Image</th>
                        <th>Service Name</th>
                        <th>Price(per)</th>
                        <th>Rating</th>
                        <th>Likes</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {service.map((item) => {
                        return (
                          <tr item={item}>
                            <td>
                              <img
                                src={`http://localhost:3001/assets/image/${item.doc_img}`}
                                alt=""
                                style={{ height: "3rem" }}
                              />
                            </td>
                            <td>{item.s_name}</td>
                            <td>₹ {item.price}</td>
                            <td>★{item.rating}</td>
                            <td>{item.likes}</td>
                            <td>
                              <Link
                                to={`/dashmain/services/editservicepage/${item._id}`}
                              >
                                <Button variant="primary">
                                  <i
                                    class="fa-solid fa-pen edit-icons mr-2"
                                    style={{ fontSize: "12px" }}
                                  ></i>
                                  Edit
                                </Button>
                              </Link>
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
          )}
        </div>
      </div>
    </>
  );
};
export default Servicepages;
