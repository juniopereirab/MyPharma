import { Request, Response } from "express";
import ProductService from "../services/ProductService";

class ProductController {
  async create(req: Request, res: Response): Promise<Response> {
    const { bar_code, name, description, price, quantity, image } = req.body;
    try {
      const product = await ProductService.create({
        bar_code,
        name,
        description,
        price,
        quantity,
        image,
      });

      return res
        .status(200)
        .json({ message: "Product created successfully", product });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { bar_code, name, description, price, quantity, image } = req.body;
    const { productId } = req.params;
    try {
      const newProduct = await ProductService.update(productId, {
        bar_code,
        name,
        description,
        price,
        quantity,
        image,
      });

      return res
        .status(200)
        .json({ message: "Product updated successfully", newProduct });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async read(req: Request, res: Response): Promise<Response> {
    const { productId } = req.params;
    try {
      const product = await ProductService.read(productId);

      return res.status(200).json({ message: "Product found", product });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { productId } = req.params;
    try {
      await ProductService.delete(productId);

      return res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async listProducts(req: Request, res: Response): Promise<Response> {
    try {
      const products = ProductService.listProducts();

      return res
        .status(200)
        .json({ message: "Found available products", products });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async listStock(req: Request, res: Response): Promise<Response> {
    try {
      const stock = ProductService.listStock();

      return res.status(200).json({ message: "Found all products", stock });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

export default ProductController;
