import React, { BaseSyntheticEvent, useState } from "react";
import { IProduct } from "../../interfaces/ProductInterfaces";
import Button from "../Button";
import "./styles.scss";
import ProductService from "../../services/product";

interface FilterModalProps {
  id?: string;
  onClose: VoidFunction;
  setStock: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

const FilterModal: React.FC<FilterModalProps> = ({
  id = "filter-modal",
  onClose,
  setStock,
}) => {
  const [inStock, setInStock] = useState<boolean>(false);
  const [outStock, setOutStock] = useState<boolean>(false);

  const handleOutsideClick = (e: BaseSyntheticEvent) => {
    if (e.target.id === id) {
      onClose();
    }
  };

  const handleFilter = async () => {
    const response = await ProductService.listProducts("stock");

    if ((inStock && outStock) || (!inStock && !outStock)) {
      setStock(response.products.reverse());
      onClose();
      return;
    }
    if (inStock) {
      const filteredProducts = response.products.filter(
        (product: IProduct) => product.quantity > 0
      );
      setStock(filteredProducts.reverse());
    } else if (outStock) {
      const filteredProducts = response.products.filter(
        (product: IProduct) => product.quantity <= 0
      );
      setStock(filteredProducts.reverse());
    }
    onClose();
  };

  const clearFilter = async () => {
    const response = await ProductService.listProducts("stock");
    setStock(response.products.reverse());
    onClose();
  };

  return (
    <div
      id="filter-modal"
      className="filter-modal"
      onClick={handleOutsideClick}
    >
      <div className="filter-modal-content">
        <div className="filter-modal-content-selectors">
          <label>
            <input
              type="checkbox"
              checked={inStock}
              onChange={() => setInStock(!inStock)}
            />
            Produtos em estoque
          </label>
          <label>
            <input
              type="checkbox"
              checked={outStock}
              onChange={() => setOutStock(!outStock)}
            />
            Produtos fora de estoque
          </label>
        </div>
        <div className="filter-modal-content-buttons">
          <Button onClick={() => handleFilter()}>Filtrar</Button>
          <Button color="#FF7777" onClick={() => clearFilter()}>
            Limpar filtro
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
