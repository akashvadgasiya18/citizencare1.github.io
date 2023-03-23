export const initialState = null;
export const reducer = (state, action) => {
  if (action.type === "USER") {
    return action.payload;
  }
  return state;
};

// const user = JSON.parse(localStorage.getItem("user"));
// export const initialState = user
//   ? { isLoggedIn: true }
//   : { isLoggedOut: false }

// export const reducer = (state = initialState , action) =>
// {
//   switch(action.type)
//   {
//     case LOGIN_SUCCESS:
//     {
//       return {
//         ...state,
//         isLoggedIn: true,
//       }
//     }
//     case LOGOUT:
//     {
//       return {
//         ...state,
//         isLoggedOut: true,
//       }
//     }
//     default:
//     {
//       return state;
//     }
//   }
// };