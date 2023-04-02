export const url = "http://localhost:3001";

const orderData = () => {
  return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
};
export default orderData;
