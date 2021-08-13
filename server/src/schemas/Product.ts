import { Document, Schema, model } from "mongoose";

interface IProduct extends Document {
  bar_code: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image?: string;
}

const productSchema = new Schema<IProduct>({
  bar_code: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});

const Product = model<IProduct>("Product", productSchema);
export default Product;
