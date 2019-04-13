import React from "react";

import { requestPrice } from "../../actions/price.actions";
import { getPrice } from "../../selectors/price.selectors";

import CurrencyLabel from "../shared/currency.label";

const DisplayPrices = ({ price, requestPrice }) => {
  return (
    <div>
      <h1>Price:</h1>
      <CurrencyLabel currencySymbol="£" price={1.90911} />
    </div>
  );
};

const mapStateToProps = state => {
  return { price: getPrice(state) };
};

const mapDispatchToProps = dispatch_ => {
  return {
    requestPrice: () => dispatch(requestPrice())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayPrices);
