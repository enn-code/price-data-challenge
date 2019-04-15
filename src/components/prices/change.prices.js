import React, { useState } from "react";
import { connect } from "react-redux";
import { requestPriceUpdate } from "../../actions/price.actions";
import { getPrice } from "../../selectors/price.selectors";
import { getPriceUpdateLoading } from "../../selectors/loading.selectors";

import NumericalInput from "../shared/numerical.input";
import UpdateButton from "../shared/update.button";

const ChangePrices = ({ price, isPriceUpdateLoading, requestPriceUpdate }) => {
  const [priceInput, setPriceInput] = useState(price);
  const handleOnChange = value => {
    setPriceInput(value);
  };
  const handleOnClick = () => {
    console.log("handleOnClick");

    requestPriceUpdate(priceInput);
  };
  return (
    <div>
      <NumericalInput
        currentValue={priceInput}
        handleOnChange={handleOnChange}
      />
      {isPriceUpdateLoading ? (
        "please wait..."
      ) : (
        <UpdateButton handleOnClick={handleOnClick} />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  price: getPrice(state),
  isPriceUpdateLoading: getPriceUpdateLoading(state)
});

const mapDispatchToProps = dispatch => ({
  requestPriceUpdate: x => dispatch(requestPriceUpdate(x))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePrices);
