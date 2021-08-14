import Icon from "../../assets/images/icon.png";
import Buttons from "./Buttons";
import { AiOutlineSearch } from "react-icons/ai";
import "./styles.scss";
import { BaseSyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  page?: string;
  isMainPage?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ page = "", isMainPage = true }) => {
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

  const showSearch = () => {
    if (isMainPage) {
      return (
        <>
          <input
            className={inputVisible ? "navbar-input" : "navbar-input invisible"}
            type="text"
            value={searchTerm}
            onChange={(e: BaseSyntheticEvent) => setSearchTerm(e.target.value)}
          />
          <AiOutlineSearch size={32} onClick={() => handleSearch()} />
        </>
      );
    }
  };
  return (
    <div className="navbar">
      <Link to="/">
        <img src={Icon} alt="my pharma icon" />
      </Link>
      <div className={inputVisible ? "invisible" : "navbar-buttons-container"}>
        <Buttons currentPage={page} />
      </div>
      {showSearch()}
    </div>
  );
};

export default Navbar;
