import React from "react";

type ButtonPropsType = {
  name: string;
  onClick: () => void;
  disabled: boolean;
};

export const Button = ({ name, disabled, onClick }: ButtonPropsType) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {name}
    </button>
  );
};
