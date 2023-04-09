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
  REVIEW_REQUEST,
  REVIEW_SUCCESS,
  REVIEW_FAIL,
  SINGLE_SERVICE_REQUEST,
  SINGLE_SERVICE_SUCCESS,
  SINGLE_SERVICE_FAIL,
  BOOKING_REQUEST,
  BOOKING_SUCCESS,
  BOOKING_FAIL,
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAIL,
} from "../Actions/action";

// ------------------- booking --------------------------------------------

export const bookingservicereducer = (state = { booking: [] }, action) => {
  switch (action.type) {
    case BOOKING_REQUEST:
      return { booking: [] };

    case BOOKING_SUCCESS:
      return { booking: action.payload };

    case BOOKING_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const orderPaidreducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case BOOKING_REQUEST:
      return { orders: [] };

    case BOOKING_SUCCESS:
      return { orders: action.payload };

    case BOOKING_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const singleservicereducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case SINGLE_SERVICE_REQUEST:
      return { ...state };

    case SINGLE_SERVICE_SUCCESS:
      return { product: action.payload };

    case SINGLE_SERVICE_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const servicereducer = (state = { service: [] }, action) => {
  switch (action.type) {
    case SERVICE_REQUEST:
      return { service: [] };

    case SERVICE_SUCCESS:
      return { service: action.payload };

    case SERVICE_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const usersreducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USERS_REQUEST:
      return { users: [] };

    case USERS_SUCCESS:
      return { users: action.payload };

    case USERS_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const singleusersreducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case USERS_REQUEST:
      return { user: [] };

    case USERS_SUCCESS:
      return { user: action.payload };

    case USERS_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const userhistoryreducer = (state = { orderList: [] }, action) => {
  switch (action.type) {
    case ORDER_REQUEST:
      return { ...state };

    case ORDER_SUCCESS:
      return { orderList : action.payload };

    case ORDER_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const providerhistoryreducer = (state = { orderLists: [] }, action) => {
  switch (action.type) {
    case ORDER_REQUEST:
      return { ...state };

    case ORDER_SUCCESS:
      return { orderLists : action.payload };

    case ORDER_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};


export const providersreducer = (state = { providers: [] }, action) => {
  switch (action.type) {
    case PROVIDERS_REQUEST:
      return { providers: [] };

    case PROVIDERS_SUCCESS:
      return { providers: action.payload };

    case PROVIDERS_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const singleproviderreducer = (state = { provider: [] }, action) => {
  switch (action.type) {
    case PROVIDERS_REQUEST:
      return { provider: [] };

    case PROVIDERS_SUCCESS:
      return { provider: action.payload };

    case PROVIDERS_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const reviewreducer = (state = { reviwer: [] }, action) => {
  switch (action.type) {
    case REVIEW_REQUEST:
      return { reviwer: [] };

    case REVIEW_SUCCESS:
      return { reviwer: action.payload };

    case REVIEW_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};
