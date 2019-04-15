import React from "react";

const NumericalInput = ({ currentValue, handleOnChange }) => {
  return (
    <input
      type="number"
      value={currentValue}
      onChange={e => handleOnChange(e.target.value)}
    />
  );
};

export default NumericalInput;
