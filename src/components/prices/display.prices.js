import React, { useEffect } from "react";
import { connect } from "react-redux";

import { requestPrice } from "../../actions/price.actions";
import { getPrice, getCurrencySymbol } from "../../selectors/price.selectors";
import { getPriceLoading } from "../../selectors/loading.selectors";

import CurrencyLabel from "../shared/currency.label";

const DisplayPrices = ({
  price,
  currencySymbol,
  isPriceLoading,
  requestPrice
}) => {
  useEffect(() => {
    requestPrice();
  }, []);

  return (
    <div>
      <h1>Price:</h1>
      {isPriceLoading ? (
        "loading..."
      ) : (
        <CurrencyLabel currencySymbol={currencySymbol} price={price} />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  price: getPrice(state),
  currencySymbol: getCurrencySymbol(state),
  isPriceLoading: getPriceLoading(state)
});

const mapDispatchToProps = dispatch => ({
  requestPrice: () => dispatch(requestPrice())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayPrices);
