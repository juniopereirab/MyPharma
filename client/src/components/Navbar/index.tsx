import Icon from "../../assets/images/icon.png";
import Buttons from "./Buttons";
import { AiOutlineSearch } from "react-icons/ai";
import "./styles.scss";
import { BaseSyntheticEvent, useState } from "react";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [inputVisible, setInputVisible] = useState<boolean>(false);

  const handleSearch = () => {
    if (!inputVisible) {
      setInputVisible(true);
    } else {
      // Fazer a busca.
      setInputVisible(false);
    }
  };
  return (
    <div className="navbar">
      <img src={Icon} alt="my pharma icon" />
      <div className={inputVisible ? "invisible" : "navbar-buttons-container"}>
        <Buttons />
      </div>
      <input
        className={inputVisible ? "navbar-input" : "navbar-input invisible"}
        type="text"
        value={searchTerm}
        onChange={(e: BaseSyntheticEvent) => setSearchTerm(e.target.value)}
      />
      <AiOutlineSearch size={32} onClick={() => handleSearch()} />
    </div>
  );
};

export default Navbar;
