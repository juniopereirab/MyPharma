import React, { useState, useEffect } from "react";
import "./styles.scss";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import { IProduct } from "../../interfaces/ProductInterfaces";

import ProductService from "../../services/product";
import { Link } from "react-router-dom";

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
          {products.map(({ _id, image, name, price }, index) => (
            <Link key={index} to={`/product/${_id}`}>
              <ProductCard
                key={index}
                image={image}
                title={name}
                price={price}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
