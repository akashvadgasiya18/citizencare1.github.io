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
