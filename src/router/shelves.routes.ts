import {Router} from "express";
import { CreateShelfController } from "../modules/shelf/useCases/createShelf/CreateShelfController";
import { ListShelfAndProductsController } from "../modules/shelf/useCases/listShelfAndProducts/ListShelfAndProductController";
import { PutProductOnShelfController } from "../modules/shelf/useCases/putProductOnShelf/PutProductOnShelfcontroller";

const shelvesRoutes = Router()

const createShelfController = new CreateShelfController();
const listShelfAndProductsController = new ListShelfAndProductsController();
const putProductOnShelfController = new PutProductOnShelfController();

shelvesRoutes.post('/',createShelfController.handle)
shelvesRoutes.get('/listShelf',listShelfAndProductsController.handle)
shelvesRoutes.put('/insertProduct',putProductOnShelfController.handle)

export { shelvesRoutes }