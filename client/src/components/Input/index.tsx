import React, { BaseSyntheticEvent } from "react";
import "./styles.scss";

interface InputProps {
  type: string;
  value: string | number;
  onChange: (e: BaseSyntheticEvent) => void;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      className="main-input"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={0}
    />
  );
};

export default Input;
