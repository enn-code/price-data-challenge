import axios from "axios";

import { baseUrl } from "../config/config";
import CONSTANTS from "./constants.actions";

export const requestPrice = () => dispatch => {
  dispatch({ type: CONSTANTS.FETCH_PRICE_REQUESTED });

  axios
    .get(`${baseUrl}/price`)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: CONSTANTS.FETCH_PRICE_SUCCEEDED,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: CONSTANTS.FETCH_PRICE_FAILED,
        errorMessage: err.message
      });
    });
};

export const requestPriceUpdate = newPrice => dispatch => {
  console.log("requestPriceUpdate");

  dispatch({ type: CONSTANTS.UPDATE_PRICE_REQUESTED });

  axios
    .post(`${baseUrl}/price`, {
      new_price: newPrice
    })
    .then(res => {
      dispatch(requestPrice());

      dispatch({
        type: CONSTANTS.UPDATE_PRICE_SUCCEEDED,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: CONSTANTS.UPDATE_PRICE_FAILED,
        errorMessage: err.message
      });
    });
};

export const requestOccupancyData = () => dispatch => {
  dispatch({ type: CONSTANTS.FETCH_OCCUPANCY_DATA_REQUESTED });

  axios
    .get(`${baseUrl}/occupancy-curve`)
    .then(res => {
      dispatch({
        type: CONSTANTS.FETCH_OCCUPANCY_DATA_SUCCEEDED,
        payload: { x_axis: res.data.x_axis, y_axis: res.data.data.occupancy }
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: CONSTANTS.FETCH_OCCUPANCY_DATA_FAILED,
        errorMessage: err.message
      });
    });
};
