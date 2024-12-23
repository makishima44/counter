import { MouseEventHandler } from "react";

type ButtonPropsType = {
  name: string;
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ name, disabled, onClick }: ButtonPropsType) => {
  return (
    <button disabled={disabled} onClick={onClick} className={"button"}>
      {name}
    </button>
  );
};
