import { Router } from "express";
import ProductController from "../controllers/ProductController";

const router = Router();

const productController = new ProductController();

router.post("/product", productController.create);
router.get("/product/:productId", productController.read);
router.patch("/product/:productId", productController.update);
router.delete("/product/:productId", productController.delete);

export default router;
