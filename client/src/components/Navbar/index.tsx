import Icon from "../../assets/images/icon.png";
import Buttons from "./Buttons";
import { AiOutlineSearch } from "react-icons/ai";
import "./styles.scss";
import React, { BaseSyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../interfaces/ProductInterfaces";
import ProductService from "../../services/product";

interface NavbarProps {
  page?: string;
  isMainPage?: boolean;
  setProducts?: React.Dispatch<React.SetStateAction<IProduct[]>>;
  isStockPage?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  page = "",
  isMainPage = true,
  isStockPage = false,
  setProducts,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [inputVisible, setInputVisible] = useState<boolean>(false);

  const handleSearch = async (e?: React.KeyboardEvent<HTMLInputElement>) => {
    const query = isStockPage ? "stock" : "available";

    if (e?.key === "Enter" || e === undefined) {
      const response = await ProductService.listProducts(query);
      const filteredResults = response.products.filter(
        (product: IProduct) =>
          product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
          product.description
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase()) !== -1 ||
          product.bar_code.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
            -1
      );
      if (setProducts) {
        setProducts(filteredResults.reverse());
        setInputVisible(false);
      }
    }
  };

  const handleInput = () => {
    if (!inputVisible) {
      setInputVisible(true);
    } else {
      handleSearch();
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
            onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
              handleSearch(e)
            }
            placeholder="Buscar"
          />
          <AiOutlineSearch size={32} onClick={() => handleInput()} />
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
