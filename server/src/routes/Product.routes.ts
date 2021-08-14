import { Router } from "express";
import ProductController from "../controllers/ProductController";
import uploadConfig from "../config/upload";
import multer from "multer";

const router = Router();
const upload = multer(uploadConfig);

const productController = new ProductController();

router.post("/", upload.single("image"), productController.create);
router.get("/:filter", productController.listProducts);
router.get("/:productId", productController.read);
router.patch("/:productId", productController.update);
router.delete("/:productId", productController.delete);

export default router;
