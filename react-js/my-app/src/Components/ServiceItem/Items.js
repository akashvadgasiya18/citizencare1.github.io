import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
// import Data1 from "../../Components/ServiceItem/Data1"
import ServiceItems from "../../Components/ServiceItem/ServiceItems";
// import Heading from "../Common/Heading";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listService } from "../../Redux/Actions/ServiceAction";

const Items = () => {
  // const [Products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const serviceList = useSelector((state) => state.serviceList);
  const { error, service } = serviceList;

  useEffect(() => {
    dispatch(listService());
    // const fetchProducts = async () => {
    //   const { data } = await axios.get("/details");
    //   setProducts(data);
    //   console.log("All data :", data);
    // };
    // fetchProducts();
  }, [dispatch]);

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
              {service.map((item,index) => (
                <ServiceItems
                  key={index}
                  // key={index}
                  item={item}
                  // img={item.img}
                  // s_name={item.s_name}
                  // price={item.price}
                  // rating={item.rating}
                  // likes={item.likes}
                  // desc={item.desc}
                />
              ))}
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};

export default Items;
