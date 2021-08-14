import { Router } from "express";
import ProductController from "../controllers/ProductController";

const router = Router();

const productController = new ProductController();

router.post("/", productController.create);
router.get("/:productId", productController.read);
router.patch("/:productId", productController.update);
router.delete("/:productId", productController.delete);
router.get("/all", productController.listProducts);
router.get("/stock", productController.listStock);

export default router;
