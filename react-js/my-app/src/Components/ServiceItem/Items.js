import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
// import Data1 from "../../Components/ServiceItem/Data1"
// import ServiceItems from "../../Components/ServiceItem/ServiceItems";
// import Heading from "../Common/Heading";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listService } from "../../Redux/Actions/ServiceAction";
<<<<<<< HEAD
import { Link } from "react-router-dom";
// import img from '../../assets/details/'
import { ADD } from "../../Redux/Actions/action";
import Rating from "./Rating";
=======
// import { Link } from "react-router-dom";
// import { ADD } from "../../Redux/Actions/action";
// import Rating from "./Rating";
>>>>>>> c4d084e4d8d74467367af8dd6e7f040a390eefde
import "../../Components/ServiceItem/service-item.css";
import ServiceItems from "./ServiceItems";

const Items = () => {
  // const [Products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const serviceList = useSelector((state) => state.serviceList);
  const { error, service } = serviceList;

  useEffect(() => {
    dispatch(listService());
  }, [dispatch]);

  // console.log("Services : ", service);

  // const dispatch = useDispatch();

  // const send = (item) => {
  //   console.log(item);
  //   dispatch(ADD(item));
  // };

  return (
    <>
      {error ? (
        <h2>{error}</h2>
      ) : (
        <section>
          <Container>
            <Row>
              <div className="service-heading my-5">
                <span>Service Catalog</span>
                <h2 style={{ fontSize: "30px" }}>DIFFERENT TYPE OF SERVICES</h2>
              </div>
              {service.map((item) => {
                return (
<<<<<<< HEAD
                  // <ServiceItems
                  // key={item._id}
                  // key={index}
                  // item={item}
                  // imgpath={imgpath}
                  // imgpath={item.doc_img}
                  // s_name={item.s_name}
                  // price={item.price}
                  // rating={item.rating}
                  // likes={item.likes}
                  // desc={item.desc}
                  // />
                  <>
                    <Col lg="4" md="4" sm="6" className="mb-3">
                      <div className="car__item">
                        <div className="car__img">
                          {/* <img src={i1} alt="" /> */}
                          <img
                            src= {`http://localhost:3001/assets/image/${item.doc_img}`}                            alt="img1"
                            // className="w-100"
                          />
                        </div>
=======
                  <ServiceItems
                    key={item._id}
                    // key={index}
                    item={item}
                    // imgpath={imgpath}
                    // imgpath={item.doc_img}
                    // s_name={item.s_name}
                    // price={item.price}
                    // rating={item.rating}
                    // likes={item.likes}
                    // desc={item.desc}
                  />
                  // <>
                  //   <Col lg="4" md="4" sm="6" className="mb-3">
                  //     <div className="car__item" key={item._id}>
                  //       <div className="car__img">
                  //         {/* <img src={i1} alt="" /> */}
                  //         <img
                  //           // src={"http://localhost:3001/images/" + item.doc_img}
                  //           src={`../../../../Backend/public/details/${item.doc_img}`}
                  //           alt="img1"
                  //           // className="w-100"
                  //         />
                  //       </div>
>>>>>>> c4d084e4d8d74467367af8dd6e7f040a390eefde

                  //       <div className="car__item-content mt-4">
                  //         <h4 className="section__title text-center">
                  //           {item.s_name}
                  //         </h4>
                  //         <h6 className="rent__price text-center">
                  //           Rs. {item.price}.00{" "}
                  //           <span
                  //             style={{
                  //               fontFamily: "Poppins",
                  //               fontWeight: "500",
                  //             }}
                  //           >
                  //             / Day
                  //           </span>
                  //         </h6>

                  //         <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                  //           <span className=" d-flex align-items-center gap-1">
                  //             <Rating value={item.rating} />
                  //           </span>
                  //           <span
                  //             className=" d-flex align-items-center gap-1"
                  //             style={{
                  //               fontFamily: "Poppins",
                  //               fontWeight: "500",
                  //             }}
                  //           >
                  //             <i class="fa-solid fa-heart"></i>
                  //             {item.likes}
                  //           </span>
                  //         </div>

                  //         <button
                  //           className=" w-100 car__item-btn car__btn-rent"
                  //           onClick={() => send(item)}
                  //         >
                  //           <i
                  //             className="fa-solid fa-shopping-cart"
                  //             style={{ marginRight: "10px" }}
                  //           ></i>
                  //           Add to Service
                  //         </button>

                  //         <Link to={`/details/${item._id}`} items={item._id}>
                  //           <button className=" w-100 car__item-btn car__btn-details">
                  //             <i
                  //               className="fa-solid fa-eye"
                  //               style={{ marginRight: "5px" }}
                  //             ></i>
                  //             Preview
                  //           </button>
                  //         </Link>
                  //       </div>
                  //     </div>
                  //   </Col>
                  // </>
                );
              })}
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};

export default Items;
