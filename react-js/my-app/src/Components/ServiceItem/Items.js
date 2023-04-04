import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
// import Data1 from "../../Components/ServiceItem/Data1"
// import ServiceItems from "../../Components/ServiceItem/ServiceItems";
// import Heading from "../Common/Heading";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listService } from "../../Redux/Actions/ServiceAction";
import { Link } from "react-router-dom";
// import img from '../../assets/details/'
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
