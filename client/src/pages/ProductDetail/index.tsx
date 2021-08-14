import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.scss";

import ProductService from "../../services/product";
import { IProduct } from "../../interfaces/ProductInterfaces";
import Navbar from "../../components/Navbar";

const ProductDetail: React.FC = () => {
  const { id }: { id: string } = useParams();
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    const getData = async () => {
      const response = await ProductService.read(id);
      setProduct(response.product);
    };
    getData();
  }, [id]);
  return (
    <>
      <Navbar isMainPage={false} />
      <div className="product-detail-scroll">
        <div className="product-detail-container"></div>
      </div>
    </>
  );
};

export default ProductDetail;
