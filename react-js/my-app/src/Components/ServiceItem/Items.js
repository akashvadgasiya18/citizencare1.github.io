import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
// import Data1 from "../../Components/ServiceItem/Data1"
// import ServiceItems from "../../Components/ServiceItem/ServiceItems";
// import Heading from "../Common/Heading";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listService } from "../../Redux/Actions/ServiceAction";
import "../../Components/ServiceItem/service-item.css";
import ServiceItems from "./ServiceItems";
import "./Search.css";


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
  const [search, setSearch] = useState("");
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
              {/* ------------ search bar ------------------ */}
              <form>
                <div class="search-sre-container">
                  <div class="search_ser_wrap search_ser_wrap_1">
                    <div class="search_ser_box">
                      <input
                        type="text"
                        class="input"
                        placeholder="search..."
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                      />
                      <div class="btn btn_common">
                        <i class="fas fa-search"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <br />
              <br />
              <br></br>
              {service
                .filter((item) => {
                  if (search === " ") {
                    return item;
                  } else if (
                    item.s_name
                      .toLowerCase()
                      .includes(search.toLocaleLowerCase())
                  ) {
                    return item;
                  }
                })
                .map((item) => {
                  return (
                    <ServiceItems
                      key={item._id}
                      // key={index}
                      item={item}
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
