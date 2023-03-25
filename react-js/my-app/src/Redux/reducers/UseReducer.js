import { LOGIN_SUCCESS, LOGOUT } from "../Actions/action";

const user = JSON.parse(localStorage.getItem("user"));
export const initialState = user
  ? { isLoggedIn: true }
  : { isLoggedIn: false, user: null };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedOut: true,
        user: null,
      };
    default: {
      return state;
    }
  }
};
