import CONSTANTS from "../actions/constants.actions";

const priceReducer = (state = {}, action) => {
  switch (action.type) {
    case CONSTANTS.FETCH_PRICE_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case CONSTANTS.FETCH_PRICE_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        currentPrice: {
          price: action.payload.price,
          currencySymbol: action.payload.currency_symbol
        }
      };
    default:
      return state;
  }
};

export default priceReducer;
