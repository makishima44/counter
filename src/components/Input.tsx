import { ChangeEventHandler } from "react";

type InputPropsType = {
  title: string;
  value: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const InputBlock = ({ title, value, onChange }: InputPropsType) => {
  return (
    <div className={"inputBlock"}>
      <span>{title}</span>
      <input type="number" value={value} onChange={onChange} />
    </div>
  );
};
