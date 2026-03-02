import { Router } from "express";

import usersController from "../../../controllers/user.controller";

const router = Router();

router
    .route("/")
    .get(usersController.list.bind(usersController))
    .post(usersController.create.bind(usersController));

router
    .route("/:id")
    .get(usersController.getById.bind(usersController))
    .put(usersController.update.bind(usersController))
    .delete(usersController.delete.bind(usersController));

export default router;
