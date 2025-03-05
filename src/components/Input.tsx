import { ComponentPropsWithoutRef } from "react";

type InputPropsType = {
  label?: string;
} & ComponentPropsWithoutRef<"input">;

export const InputBlock = ({ label, ...props }: InputPropsType) => {
  return (
    <div className={"inputBlock"}>
      <span>{label}</span>
      <input type="number" {...props} />
    </div>
  );
};
