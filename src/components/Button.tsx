import React from "react";

type ButtonPropsType = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  name: string;
};

export const Button = ({ name, disabled, onClick }: ButtonPropsType) => {
  return (
    <button disabled={disabled} onClick={onClick} className={"button"}>
      {name}
    </button>
  );
};
