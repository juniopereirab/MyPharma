import React, { BaseSyntheticEvent } from "react";
import "./styles.scss";

interface ButtonProps {
  color?: string;
  onClick?: (e: BaseSyntheticEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ children, color, onClick }) => {
  return (
    <button
      className="main-button"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
};

export default Button;
