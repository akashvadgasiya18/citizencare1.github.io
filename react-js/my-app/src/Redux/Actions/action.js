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

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

export const SERVICE_REQUEST = "SERVICE_REQUEST";
export const SERVICE_SUCCESS = "SERVICE_SUCCESS";
export const SERVICE_FAIL = "SERVICE_FAIL";

export const USERS_REQUEST = "USERS_REQUEST";
export const USERS_SUCCESS = "USERS_SUCCESS";
export const USERS_FAIL = "USERS_FAIL";

export const PROVIDERS_REQUEST = "PROVIDERS_REQUEST";
export const PROVIDERS_SUCCESS = "PROVIDERS_SUCCESS";
export const PROVIDERS_FAIL = "PROVIDERS_FAIL";

export const SERVICE_DETAILS_REQUEST = "SERVICE_DETAILS_REQUEST";
export const SERVICE_DETAILS_SUCCESS = "SERVICE_DETAILS_SUCCESS";
export const SERVICE_DETAILS_FAIL = "SERVICE_DETAILS_FAIL";
