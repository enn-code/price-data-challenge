import React from "react";

const UpdateButton = ({ handleOnClick, buttonText }) => {
  return <button onClick={handleOnClick}>{buttonText || "UPDATE"}</button>;
};

export default UpdateButton;
