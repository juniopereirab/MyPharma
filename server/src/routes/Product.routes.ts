import { Router } from "express";
import ProductController from "../controllers/ProductController";

const router = Router();

const productController = new ProductController();

router.post("/", productController.create);
router.get("/:filter", productController.listProducts);
router.get("/:productId", productController.read);
router.patch("/:productId", productController.update);
router.delete("/:productId", productController.delete);

export default router;
