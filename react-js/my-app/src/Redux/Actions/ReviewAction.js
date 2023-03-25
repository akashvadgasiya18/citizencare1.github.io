import axios from "axios";
import { REVIEW_REQUEST, REVIEW_SUCCESS, REVIEW_FAIL } from "./action";

export const reviewService = () => async (dispatch) => {
  try {
    dispatch({ type: REVIEW_REQUEST });
    const { data } = await axios.get("/reviewdata");
    dispatch({
      type: REVIEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
