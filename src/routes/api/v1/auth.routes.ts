import { Router } from "express";

import usersController from "../../../controllers/user.controller";
import jwtMiddleware from "../../../middlewares/jwt.middleware";

const router = Router();

router.post("/signup", usersController.signup.bind(usersController));
router.post("/login", usersController.login.bind(usersController));
router.get("/me", jwtMiddleware, usersController.me.bind(usersController));

export default router;
