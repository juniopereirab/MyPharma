import React from "react";

interface ButtonProps {
  selected: boolean;
  onClick: VoidFunction;
}

const IndividualButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  selected,
}) => {
  return (
    <button
      onClick={onClick}
      className={selected ? "nav-button selected" : "nav-button"}
    >
      {children}
    </button>
  );
};

export default IndividualButton;
