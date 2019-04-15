export const getPrice = state => state.prices.currentPrice.price;
export const getCurrencySymbol = state =>
  state.prices.currentPrice.currencySymbol;
export const getPriceUpdateError = state =>
  state.prices.updatePrice.errorMessage;
