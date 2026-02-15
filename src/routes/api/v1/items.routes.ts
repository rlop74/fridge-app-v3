import { Router } from "express";
import itemController from "../../../controllers/items.controller";

const router = Router();

router.post("/", itemController.create);
router.get("/", itemController.getAll);
router.delete("/:id", itemController.delete);

export default router;

// router
//     .route("/")
//     .get(itemController.list.bind(itemController))
//     .post(itemController.create.bind(itemController))

/***
 

import tasksController from "../../../controllers/tasks.controller";

const router = Router();

router
    .route("/")
    .get(tasksController.list.bind(tasksController))
    .post(tasksController.create.bind(tasksController));



 * 
 */
