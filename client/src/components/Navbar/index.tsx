import Icon from "../../assets/images/icon.png";
import Buttons from "./Buttons";
import { AiOutlineSearch } from "react-icons/ai";
import "./styles.scss";
import { BaseSyntheticEvent, useState } from "react";
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

  const handleSearch = async () => {
    const query = isStockPage ? "stock" : "available";
    if (!inputVisible) {
      setInputVisible(true);
    } else {
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
      }

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
