import React, { useState, useEffect } from "react";
import "./styles.scss";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import { IProduct } from "../../interfaces/ProductInterfaces";

import ProductService from "../../services/product";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Array<IProduct>>([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await ProductService.listProducts("available");
      setProducts(response.products.reverse());
    };
    getProducts();
  }, []);
  return (
    <>
      <Navbar page="Produtos" />
      <div className="product-scroll">
        <div className="product-list">
          {products.map(({ image, name, price }, index) => (
            <ProductCard key={index} image={image} title={name} price={price} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
