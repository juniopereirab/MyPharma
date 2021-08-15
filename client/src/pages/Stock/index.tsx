import React, { useEffect, useState } from "react";
import "./styles.scss";

import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/Button";
import FilterButton from "../../components/FilterButton";
import { IProduct } from "../../interfaces/ProductInterfaces";

import ProductService from "../../services/product";
import { Link } from "react-router-dom";
import FilterModal from "../../components/FilterModal";

const Stock: React.FC = () => {
  const [stock, setStock] = useState<Array<IProduct>>([]);
  const [filterModalVisible, setFilterModalVisible] = useState<boolean>(false);

  useEffect(() => {
    const getStock = async () => {
      const response = await ProductService.listProducts("stock");
      setStock(response.products.reverse());
    };
    getStock();
  }, []);
  return (
    <>
      <Navbar page="Estoque" isStockPage={true} setProducts={setStock} />
      <div className="stock-scroll">
        <div className="stock-buttons">
          <Link to="/create-product">
            <Button>Cadastrar produto</Button>
          </Link>
          <FilterButton onClick={() => setFilterModalVisible(true)} />
        </div>
        <div className="stock-list">
          {stock.map(({ _id, image, name, price, quantity }, index) => (
            <Link to={`/edit-product/${_id}`} key={index}>
              <ProductCard
                key={index}
                image={image}
                title={name}
                price={price}
                isStock={true}
                quantity={quantity}
              />
            </Link>
          ))}
        </div>
      </div>
      {filterModalVisible ? (
        <FilterModal
          onClose={() => setFilterModalVisible(false)}
          setStock={setStock}
        />
      ) : null}
    </>
  );
};

export default Stock;
