import React from "react";
import s from "./Button.module.css";

type ButtonPropsType = {
  name: string;
  onClick: () => void;
  disabled: boolean;
};

export const Button = ({ name, disabled, onClick }: ButtonPropsType) => {
  return (
    <button disabled={disabled} onClick={onClick} className={s.buttonStyle}>
      {name}
    </button>
  );
};
