import { combineReducers } from "redux";
import { cartreducer } from "./reducer";
import {
  servicereducer,
  usersreducer,
  providersreducer,
  reviewreducer,
  singleusersreducer,
  singleproviderreducer,
  singleservicereducer,
  bookingservicereducer,
} from "./ServiceReducer"; //,productdetailsreducer

const rootred = combineReducers({
  cartreducer,
  serviceList: servicereducer,
  userList: usersreducer,
  providersList: providersreducer,
  reviewList: reviewreducer,
  singleData: singleusersreducer,
  singleProvider: singleproviderreducer,
  singleService: singleservicereducer,
  bookList: bookingservicereducer,
});

export default rootred;
