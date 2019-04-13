import React from "react";

import { twoDecimals } from "../../utils/conversions.utils";

const CurrencyLabel = ({ currencySymbol, price }) => {
  return (
    <div>
      {currencySymbol}
      {twoDecimals(price)}
    </div>
  );
};

export default CurrencyLabel;
