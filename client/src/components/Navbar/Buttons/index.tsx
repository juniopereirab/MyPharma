import { useState } from "react";
import IndividualButton from "./IndividualButton";
import "./styles.scss";

const Buttons = () => {
  const [selectedButton, setSelectedButton] = useState<string>("Produtos");

  return (
    <>
      <IndividualButton
        onClick={() => setSelectedButton("Produtos")}
        selected={selectedButton === "Produtos"}
      >
        Produtos
      </IndividualButton>
      <IndividualButton
        onClick={() => setSelectedButton("Estoque")}
        selected={selectedButton === "Estoque"}
      >
        Estoque
      </IndividualButton>
    </>
  );
};

export default Buttons;
