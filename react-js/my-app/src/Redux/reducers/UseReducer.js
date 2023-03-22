// export const initialState = null;
// export const reducer = (state, action) => {
//   if (action.type === "USER") {
//     return action.payload;
//   }
//   return state;
// };
import { LOGIN_SUCCESS, LOGOUT  } from "../Actions/action";

const user = JSON.parse(localStorage.getItem("user"));
export const initialState = user
  ? { isLoggedIn: true }
  : { isLoggedOut: false }

export const reducer = (state = initialState , action) =>
{
  // const { type, payload } = action;
  switch(action.type)
  {
    case LOGIN_SUCCESS:
    {
      return {
        ...state,
        // action.payload,
        isLoggedIn: true,
      }
      // return {initialState:action.payload};
    }
    case LOGOUT:
    {
      return {
        ...state,
        // action.payload,
        isLoggedOut: true,
      }
      // return action.payload;
      // {err: action.payload};
    }
    default:
    {
      return state;
    }
  }
  // return state;
}