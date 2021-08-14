import { Router } from "express";
import ProductRouter from "./Product.routes";

const router = Router();

router.use("/api/product", ProductRouter);

export default router;
