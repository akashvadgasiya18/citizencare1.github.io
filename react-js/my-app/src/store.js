import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootred from "./Redux/reducers/main";
import { composeWithDevTools } from "@redux-devtools/extension";

const initialstate = {};
const middleware = [thunk];
const store = createStore(
  rootred,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
