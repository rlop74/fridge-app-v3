import { Router } from "express";
import itemRouter from "./items.routes";
import usersRouter from "./users.routes";
import authRouter from "./auth.routes";

const router = Router();


router.use("/items", itemRouter);
router.use("/users", usersRouter);
router.use("/auth", authRouter);

export default router;
