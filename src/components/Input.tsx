import React, { ChangeEvent } from "react";

type InputPropsType = {
  title: string;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const InputBlock = ({ title, value, onChange }: InputPropsType) => {
  return (
    <div className={"inputBlock"}>
      <span>{title}</span>
      <input type="number" value={value} onChange={onChange} />
    </div>
  );
};
