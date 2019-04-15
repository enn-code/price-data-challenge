import CONSTANTS from "../actions/constants.actions";

const priceReducer = (state = {}, action) => {
  switch (action.type) {
    case CONSTANTS.FETCH_PRICE_REQUESTED:
      return {
        ...state,
        currentPrice: {
          isLoading: true
        }
      };
    case CONSTANTS.FETCH_PRICE_SUCCEEDED:
      return {
        ...state,
        currentPrice: {
          isLoading: false,
          price: action.payload.price,
          currencySymbol: action.payload.currency_symbol
        }
      };
    case CONSTANTS.FETCH_PRICE_FAILED:
      return {
        ...state,
        currentPrice: {
          isLoading: false,
          price: state.currentPrice.price,
          errorMessage: action.errorMessage
        }
      };

    case CONSTANTS.UPDATE_PRICE_REQUESTED:
      return {
        ...state,
        updatePrice: {
          isLoading: true
        }
      };
    case CONSTANTS.UPDATE_PRICE_SUCCEEDED:
      return {
        ...state,
        updatePrice: {
          isLoading: false,
          data: action.payload
        }
      };
    case CONSTANTS.UPDATE_PRICE_FAILED:
      return {
        ...state,
        updatePrice: {
          isLoading: false,
          errorMessage: action.errorMessage
        }
      };
    default:
      return state;
  }
};

export default priceReducer;
