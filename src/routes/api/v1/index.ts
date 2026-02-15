import { Router } from "express";
import itemRouter from "./items.routes";

const router = Router();


router.use("/items", itemRouter);

export default router;
