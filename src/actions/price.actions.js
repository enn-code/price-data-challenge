import axios from "axios";

import { baseUrl } from "../config/config";
import CONSTANTS from "./constants.actions";

export const requestPrice = () => dispatch => {
  dispatch({ type: CONSTANTS.FETCH_PRICE_REQUESTED });

  console.log("axios request");

  // fetch("http://localhost:5000/price", {
  //   // mode: "no-cors", // used browser extension as a temporary proxy for localhost requests
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // })
  //   .then(response => {
  //     // Do something with response
  //     console.log(response);
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log(data);
  //     dispatch({
  //       type: CONSTANTS.FETCH_PRICE_SUCCEEDED,
  //       price: data
  //     });
  //   });

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
        message: err
      });
    });
};
