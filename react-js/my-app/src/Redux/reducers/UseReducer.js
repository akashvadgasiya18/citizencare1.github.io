// export const initialState = null;
// export const reducer = (state, action) => {
//   if (action.type === "USER") {
//     return action.payload;
//   }
//   return state;
// };
import { LOGIN_SUCCESS, LOGOUT } from "../Actions/action";

const user = JSON.parse(localStorage.getItem("user"));
export const initialState = user
  ? { isLoggedIn: true }
  : { isLoggedIn: false, user: null };

export const reducer = (state = initialState, action) => {
  // const { type, payload } = action;
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
      };
    // return {initialState:action.payload};
    case LOGOUT:
      return {
        ...state,
        // action.payload,
        isLoggedOut: true,
        user: null,
        // return action.payload;
        // {err: action.payload};
      };
    default: {
      return state;
    }
  }
  // return state;
};
