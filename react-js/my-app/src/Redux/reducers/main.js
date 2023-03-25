import { combineReducers } from "redux";
import { cartreducer } from "./reducer";
import {
  servicereducer,
  usersreducer,
  providersreducer,
  reviewreducer,
  singleusersreducer,
} from "./ServiceReducer"; //,productdetailsreducer

const rootred = combineReducers({
  cartreducer,
  serviceList: servicereducer,
  userList: usersreducer,
  providersList: providersreducer,
  reviewList: reviewreducer,
  singleData: singleusersreducer,
});

export default rootred;
