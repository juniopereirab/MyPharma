import { Router } from "express";
import ProductRouter from "./Product.routes";

const router = Router();

router.use("/api", [ProductRouter]);

export default router;
