import { Router } from "express";
import ProductController from "../controllers/ProductController";
import uploadConfig from "../config/upload";
import multer from "multer";

const router = Router();
const upload = multer(uploadConfig);

const productController = new ProductController();

router.post("/", upload.single("image"), productController.create);
router.get("/filter/:filter", productController.listProducts);
router.get("/getById/:productId", productController.read);
router.patch(
  "/edit/:productId",
  upload.single("image"),
  productController.update
);
router.patch("/buy/:productId", productController.buy);
router.delete("/:productId", productController.delete);

export default router;
