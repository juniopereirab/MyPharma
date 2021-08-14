import { useState } from "react";
import { Link } from "react-router-dom";
import IndividualButton from "./IndividualButton";
import "./styles.scss";

interface ButtonsProps {
  currentPage: string;
}

const Buttons: React.FC<ButtonsProps> = ({ currentPage }) => {
  const [selectedButton, setSelectedButton] = useState<string>(currentPage);

  return (
    <>
      <Link to="/">
        <IndividualButton
          onClick={() => setSelectedButton("Produtos")}
          selected={selectedButton === "Produtos"}
        >
          Produtos
        </IndividualButton>
      </Link>
      <Link to="/stock">
        <IndividualButton
          onClick={() => setSelectedButton("Estoque")}
          selected={selectedButton === "Estoque"}
        >
          Estoque
        </IndividualButton>
      </Link>
    </>
  );
};

export default Buttons;
