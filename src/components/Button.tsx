import { ComponentPropsWithoutRef, MouseEventHandler } from "react";

type ButtonPropsType = {} & ComponentPropsWithoutRef<"button">;

export const Button = ({ ...props }: ButtonPropsType) => {
  return <button {...props} className={"button"}></button>;
};
