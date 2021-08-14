import React, { useEffect, useState } from "react";
import "./styles.scss";

import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/Button";
import FilterButton from "../../components/FilterButton";
import { IProduct } from "../../interfaces/ProductInterfaces";

import ProductService from "../../services/product";
import { Link } from "react-router-dom";

const Stock: React.FC = () => {
  const [stock, setStock] = useState<Array<IProduct>>([]);
  const [filterModal, setFilterModal] = useState<boolean>(false);

  useEffect(() => {
    const getStock = async () => {
      const response = await ProductService.listProducts("stock");
      setStock(response.products.reverse());
    };
    getStock();
  }, []);
  return (
    <>
      <Navbar page="Estoque" />
      <div className="product-scroll">
        <div className="product-buttons">
          <Link to="/create-product">
            <Button>Cadastrar produto</Button>
          </Link>
          <FilterButton onClick={() => setFilterModal(true)} />
        </div>
        <div className="product-list">
          {stock.map(({ image, name, price, quantity }, index) => (
            <ProductCard
              key={index}
              image={image}
              title={name}
              price={price}
              isStock={true}
              quantity={quantity}
            />
          ))}
        </div>
      </div>
      {filterModal ? <h1>HELLO</h1> : null}
    </>
  );
};

export default Stock;
