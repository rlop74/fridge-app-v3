import BaseController from "./base.controller"
import { Item } from "../models";

class ItemsController extends BaseController<Item> {
    constructor() {
        super(Item)
    }
}

const itemController = new ItemsController();


export default itemController;