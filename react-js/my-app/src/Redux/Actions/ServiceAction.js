import axios from "axios";
import {
  SERVICE_REQUEST,
  SERVICE_SUCCESS,
  SERVICE_FAIL,
  USERS_REQUEST,
  USERS_SUCCESS,
  USERS_FAIL,
  PROVIDERS_REQUEST,
  PROVIDERS_SUCCESS,
  PROVIDERS_FAIL,
  SINGLE_SERVICE_REQUEST,
  SINGLE_SERVICE_SUCCESS,
  SINGLE_SERVICE_FAIL,
  BOOKING_REQUEST,
  BOOKING_SUCCESS,
  BOOKING_FAIL,
} from "./action";

// ------------------- BOOKING DETAILS GET -----------------------------------------

export const userBooking = () => async (dispatch) => {
  try {
    dispatch({ type: BOOKING_REQUEST });
    const { data } = await axios.get("/bookingdetails");
    dispatch({
      type: BOOKING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOKING_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// ------------------------------ single service get -------------------------------

export const SinglelistService = (_id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_SERVICE_REQUEST });
    const { data } = await axios.get(`/details/${_id}`);
    dispatch({
      type: SINGLE_SERVICE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_SERVICE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// ----------------------- all details fetch in cards frontend ------------------

<<<<<<< HEAD
export const listService = () => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_REQUEST });
    const { data } = await axios.get(`/details`);
    dispatch({
      type: SERVICE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SERVICE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
=======
export const listService =
  () =>
  async (dispatch) => {
    try {
      dispatch({ type: SERVICE_REQUEST });
      const { data } = await axios.get(`/details`);
      dispatch({
        type: SERVICE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SERVICE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
>>>>>>> decc59a332647bf6edd22edac8190adef66759f7

// --------------- user details fetch in admin dashboards ---------

export const userDetails = () => async (dispatch) => {
  try {
    dispatch({ type: USERS_REQUEST });
    const { data } = await axios.get("/userdatas");
    dispatch({
      type: USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// ------------------------------- user single details -----------------------

export const userSingleDetails = () => async (dispatch) => {
  try {
    dispatch({ type: USERS_REQUEST });
    const { data } = await axios.get("/user_detail");
    dispatch({
      type: USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// ------------------------------ User history get -------------------------------

export const UserhistoryService = (email) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_SERVICE_REQUEST });
    const { data } = await axios.get(`/userorders/${email}`);
    dispatch({
      type: SINGLE_SERVICE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_SERVICE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


// ---------------------- provider details fetch in admin dashboards ----------------

export const providersDetails = () => async (dispatch) => {
  try {
    dispatch({ type: PROVIDERS_REQUEST });
    const { data } = await axios.get("/providersdatas");
    dispatch({
      type: PROVIDERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROVIDERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// ------------------------------- provider single details -----------------------

export const providerSingleDetails = () => async (dispatch) => {
  try {
    dispatch({ type: PROVIDERS_REQUEST });
    const { data } = await axios.get("/provider_detail");
    dispatch({
      type: PROVIDERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROVIDERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
