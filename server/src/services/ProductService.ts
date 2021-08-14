import Product from "../schemas/Product";
import {
  IProductCreate,
  IProductUpdate,
} from "../interfaces/ProductInterfaces";

class ProductService {
  async create({
    bar_code,
    name,
    description,
    price,
    quantity,
    image = "",
  }: IProductCreate) {
    try {
      const product = await Product.create({
        bar_code,
        name,
        description,
        price,
        quantity,
        image,
      });

      return product;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async update(productId: string, dataToUpdate: IProductUpdate) {
    try {
      const product = await Product.findById(productId);
      if (!product) {
        throw new Error("Product not found");
      }

      await product.updateOne(dataToUpdate);
      const updatedProduct = await Product.findById(productId);
      return updatedProduct;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async read(productId: string) {
    try {
      const product = await Product.findById(productId);
      if (!product) {
        throw new Error("Product not found");
      }

      return product;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async delete(productId: string) {
    try {
      await Product.findByIdAndDelete(productId);

      return;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async listProducts(query: {}) {
    try {
      const products = await Product.find(query);

      return products;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new ProductService();
