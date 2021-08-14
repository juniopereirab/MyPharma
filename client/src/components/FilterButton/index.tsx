import React from "react";
import { HiFilter } from "react-icons/hi";

interface FilterProps {
  onClick: VoidFunction;
}
const FilterButton: React.FC<FilterProps> = ({ onClick }) => {
  return (
    <HiFilter
      color="#A5A5A5"
      size={50}
      style={{ border: "1px solid #555555", borderRadius: "5px" }}
      onClick={onClick}
    />
  );
};

export default FilterButton;
