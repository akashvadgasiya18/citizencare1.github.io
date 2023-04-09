import React from "react";
import { Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ProviderhistoryService ,providerSingleDetails } from "../../../Redux/Actions/ServiceAction";

const ProviderOrder = () => {
  const dispatch = useDispatch();
  const singleProvider = useSelector((state) => state.singleProvider);
  const { provider } = singleProvider;
  const providerhistory = useSelector((state) => state.providerhistory);
  const { orderLists } = providerhistory;
  console.log(orderLists);

  useEffect(() => {
    dispatch(providerSingleDetails());
  }, [dispatch]);

  const p_email = provider.p_email;
  useEffect(() => {
    dispatch(ProviderhistoryService(p_email));
  }, [p_email]);
  return (
    <>
      <p> {provider.p_email} </p>
      <div>
        <div>
          <Typography.Title
            style={{
              textAlign: "left",
              margin: "30px 35px",
              fontSize: "30px",
              fontFamily: "Poppins",
            }}
          >
            Order Details
          </Typography.Title>
          {/* <p>{user.email}</p> */}
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
                      <th>Payment_id</th>
                      <th>Service name</th>
                      <th>Address</th>
                      <th>Date</th>
                      <th>Scheduale</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {orderList.map((item, idx) => {
                      return (
                        <>
                          <tr key={idx}>
                            <td>{item.paymentId}</td>
                            <td>{item.service[0].s_name}</td>
                            <td>
                              {item.address.line1} , {item.address.line2} ,
                              {item.address.postal_code}
                            </td>
                            <td>{item.date}</td>
                            <td>{item.scheduale}</td>
                            <td>{item.total}</td>
                          </tr>
                        </>
                      );
                    })} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderOrder;
