import { Request, Response } from "express";
import ProductService from "../services/ProductService";

class ProductController {
  async create(req: Request, res: Response): Promise<Response> {
    const { bar_code, name, description, price, quantity } = req.body;
    const filename: string | undefined = req.file?.filename;
    try {
      const product = await ProductService.create({
        bar_code,
        name,
        description,
        price,
        quantity,
        image: filename,
      });

      return res
        .status(200)
        .json({ message: "Product created successfully", product });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { name, description, price, quantity, image } = req.body;
    const filename: string | undefined = req.file?.filename;
    const { productId } = req.params;

    try {
      const newProduct = await ProductService.update(productId, {
        name,
        description,
        price,
        quantity,
        image: filename ? filename : image,
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
    const { filter } = req.params;

    let query: {} = {};

    if (filter === "available") {
      query = {
        quantity: { $gt: 0 },
      };
    } else if (filter === "stock") {
      query = {};
    }

    try {
      const products = await ProductService.listProducts(query);

      return res.status(200).json({ message: "Found products", products });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async buy(req: Request, res: Response): Promise<Response> {
    const { productId } = req.params;

    try {
      const updateProduct = await ProductService.buy(productId);

      return res
        .status(200)
        .json({ message: "Buy product occured successfully", updateProduct });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

export default ProductController;
