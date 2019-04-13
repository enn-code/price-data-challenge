import CONSTANTS from "./constants.actions";

const requestPrice = () => {
  return {
    type: CONSTANTS.FETCH_PRICE_REQUESTED
  };
};

export default {
  requestPrice
};
