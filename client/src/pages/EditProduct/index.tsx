import React, { BaseSyntheticEvent, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import CurrencyInput from "../../components/CurrencyInput";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import PhotoChanger from "../../components/PhotoChanger";
import { IProductUpdate } from "../../interfaces/ProductInterfaces";
import ProductService from "../../services/product";
import "./styles.scss";

const EditProduct: React.FC = () => {
  const history = useHistory();
  const { id }: { id: string } = useParams();
  const [image, setImage] = useState<Blob | string | undefined>(undefined);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    const getData = async () => {
      const { product } = await ProductService.read(id);
      setImage(product.image);
      setName(product.name);
      setPrice(product.price * 100);
      setDescription(product.description);
      setQuantity(product.quantity);
    };
    getData();
  }, [id]);

  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    let dataToUpdate: IProductUpdate = {
      name,
      price: price / 100,
      description,
      quantity,
      image,
    };

    await ProductService.update(id, dataToUpdate);
    history.push("/stock");
  };

  const handleDelete = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    await ProductService.delete(id);
    history.push("/stock");
  };

  return (
    <>
      <Navbar isMainPage={false} />
      <div className="edit-product-scroll">
        <div className="edit-product-container">
          <div className="edit-photo">
            <PhotoChanger
              value={image}
              onChange={(e: BaseSyntheticEvent) => setImage(e.target.files[0])}
            />
          </div>
          <div className="edit-form">
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
              placeholder="Pre??o"
            />
            <textarea
              placeholder="Descri????o do Produto"
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
            <div className="edit-buttons">
              <Button onClick={(e: BaseSyntheticEvent) => handleSubmit(e)}>
                Editar
              </Button>
              <Button
                color="#FF7777"
                onClick={(e: BaseSyntheticEvent) => handleDelete(e)}
              >
                Deletar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
