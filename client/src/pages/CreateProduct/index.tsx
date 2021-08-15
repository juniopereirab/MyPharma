import React, { BaseSyntheticEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import CurrencyInput from "../../components/CurrencyInput";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import PhotoChanger from "../../components/PhotoChanger";
import "./styles.scss";

import ProductService from "../../services/product";

const CreateProduct: React.FC = () => {
  const history = useHistory();
  const [image, setImage] = useState<Blob | null>(null);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [barCode, setBarCode] = useState<string>("");

  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    await ProductService.create({
      image,
      name,
      price: price / 100,
      description,
      quantity,
      bar_code: barCode,
    });
    history.push("/stock");
  };

  return (
    <>
      <Navbar isMainPage={false} />
      <div className="create-product-scroll">
        <div className="create-product-container">
          <div className="create-photo">
            <PhotoChanger
              value={image}
              onChange={(e: BaseSyntheticEvent) => setImage(e.target.files[0])}
            />
          </div>
          <div className="create-form">
            <Input
              type="text"
              value={name}
              onChange={(e: BaseSyntheticEvent) => setName(e.target.value)}
              placeholder="Nome do Produto"
            />
            <CurrencyInput
              value={price}
              max={100000000}
              onValueChange={(value: number) => {
                setPrice(value);
              }}
              placeholder="Preço"
            />
            <textarea
              placeholder="Descrição do Produto"
              rows={5}
              value={description}
              onChange={(e: BaseSyntheticEvent) =>
                setDescription(e.target.value)
              }
            />
            <Input
              type="number"
              value={quantity}
              onChange={(e: BaseSyntheticEvent) => setQuantity(e.target.value)}
              placeholder="Quantidade do Produto"
            />
            <Input
              type="text"
              value={barCode}
              onChange={(e: BaseSyntheticEvent) => setBarCode(e.target.value)}
              placeholder="Código de Barra"
            />
            <div className="create-buttons">
              <Button onClick={(e: BaseSyntheticEvent) => handleSubmit(e)}>
                Confirmar
              </Button>
              <Button color="#FF7777" onClick={() => history.push("/stock")}>
                Voltar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
