import { combineReducers } from "redux";
import { cartreducer } from "./reducer";
import {
  servicereducer,
  usersreducer,
  providersreducer,
  productdetailsreducer
} from "./ServiceReducer"; //,productdetailsreducer

const rootred = combineReducers({
  cartreducer,
  serviceList: servicereducer,
  serviceDetails : productdetailsreducer,
  userList: usersreducer,
  providersList: providersreducer,
});

export default rootred;
