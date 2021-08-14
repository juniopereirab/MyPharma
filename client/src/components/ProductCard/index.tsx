import React from "react";
import "./styles.scss";
import formatter from "../../utils/formatCurrency";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  isStock?: boolean;
  quantity?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  isStock,
  quantity,
}) => {
  return (
    <div className="product-card">
      <img src={image} alt="product asset" />
      <div className="product-information">
        <span>{title}</span>
        {isStock ? (
          <span id="quantity-information">Quantidade: {quantity}</span>
        ) : (
          <span>{formatter.format(price)}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
