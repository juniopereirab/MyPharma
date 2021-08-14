import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./styles.scss";

import ProductService from "../../services/product";
import { IProduct } from "../../interfaces/ProductInterfaces";
import Navbar from "../../components/Navbar";
import Placeholder from "../../assets/images/placeholder-image.jpg";
import formatter from "../../utils/formatCurrency";
import Button from "../../components/Button";

const ProductDetail: React.FC = () => {
  const history = useHistory();
  const { id }: { id: string } = useParams();
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    const getData = async () => {
      const response = await ProductService.read(id);
      setProduct(response.product);
    };
    getData();
  }, [id]);

  const handleBuy = async () => {
    await ProductService.buy(id);
    history.push("/");
  };

  return (
    <>
      <Navbar isMainPage={false} />
      <div className="product-detail-scroll">
        <div className="product-detail-container">
          <img
            src={
              product?.image
                ? `http://localhost:3333/files/${product.image}`
                : Placeholder
            }
            alt="product asset"
          />
          <div className="product-detail-info">
            <div className="product-detail-info-title">
              <span>{product?.name}</span>
              <span>{formatter.format(Number(product?.price))}</span>
            </div>
            <p>{product?.description}</p>
          </div>
          <div className="product-detail-button">
            <span>Quantidade: {product?.quantity}</span>
            <Button onClick={() => handleBuy()}>Comprar</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
