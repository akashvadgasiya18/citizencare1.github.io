export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

export const DEL = (_id) => {
  return {
    type: "RMV_CART",
    payload: _id,
  };
};

export const SERVICE_REQUEST = "SERVICE_REQUEST";
export const SERVICE_SUCCESS = "SERVICE_SUCCESS";
export const SERVICE_FAIL = "SERVICE_FAIL";

export const SINGLE_SERVICE_REQUEST = "SINGLE_SERVICE_REQUEST";
export const SINGLE_SERVICE_SUCCESS = "SINGLE_SERVICE_SUCCESS";
export const SINGLE_SERVICE_FAIL = "SINGLE_SERVICE_FAIL";

export const USERS_REQUEST = "USERS_REQUEST";
export const USERS_SUCCESS = "USERS_SUCCESS";
export const USERS_FAIL = "USERS_FAIL";

export const ORDER_REQUEST = "ORDER_REQUEST";
export const ORDER_SUCCESS = "ORDER_SUCCESS";
export const ORDER_FAIL = "ORDER_FAIL";
 
export const PROVIDERS_REQUEST = "PROVIDERS_REQUEST";
export const PROVIDERS_SUCCESS = "PROVIDERS_SUCCESS";
export const PROVIDERS_FAIL = "PROVIDERS_FAIL";

export const REVIEW_REQUEST = "REVIEW_REQUEST";
export const REVIEW_SUCCESS = "REVIEW_SUCCESS";
export const REVIEW_FAIL = "REVIEW_FAIL";

export const BOOKING_REQUEST = "BOOKING_REQUEST";
export const BOOKING_SUCCESS = "BOOKING_SUCCESS";
export const BOOKING_FAIL = "BOOKING_FAIL";
