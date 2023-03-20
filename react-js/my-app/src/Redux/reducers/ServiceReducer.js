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
  SERVICE_DETAILS_REQUEST,
  SERVICE_DETAILS_SUCCESS,
  SERVICE_DETAILS_FAIL,
} from "../Actions/action";

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

export const productdetailsreducer = (state = { deatil: [] }, action) => {
  switch (action.type) {
    case SERVICE_DETAILS_REQUEST:
      return { ...state };

    case SERVICE_DETAILS_SUCCESS:
      return { detail: action.payload };

    case SERVICE_DETAILS_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};
