import React from "react";
import "./styles.scss";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";

const Products: React.FC = () => {
  return (
    <>
      <Navbar page="Produtos" />
      <div className="product-scroll">
        <div className="product-list">
          <ProductCard
            image="data:image/jpeg;base64,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"
            title="Smartwatch"
            price={4999}
          />
          <ProductCard
            image="data:image/jpeg;base64,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"
            title="Smartwatch"
            price={4999}
          />
          <ProductCard
            image="data:image/jpeg;base64,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"
            title="Smartwatch"
            price={4999}
          />
          <ProductCard
            image="data:image/jpeg;base64,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"
            title="Smartwatch"
            price={4999}
            isStock={true}
            quantity={50}
          />
        </div>
      </div>
    </>
  );
};

export default Products;
