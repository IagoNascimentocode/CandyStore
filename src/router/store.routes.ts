import Router from "express"
import { CreateStoreController } from "../modules/store/useCase/createStore/CreateStoreController";
import { ListAllStoreController } from "../modules/store/useCase/listAllStore/ListAllStorecontroller";
import { ListStoreAndShelvesController } from "../modules/store/useCase/ListStoreAndShleves/ListStoreAndShelvesController";
import { PutshelfOnStoreController } from "../modules/store/useCase/putShelfOnStore/PutShelfOnStoreController";
import { shelvesRoutes } from "./shelves.routes";

const storeRouter = Router();

const createStoreController = new CreateStoreController();
const listStoreAndShelvesController = new ListStoreAndShelvesController();
const putShelfOnStoreController = new PutshelfOnStoreController();
const listAllStoreController = new ListAllStoreController();

storeRouter.post('/createStore',createStoreController.handle)
storeRouter.get('/listAll',listAllStoreController.handle)
storeRouter.get('/listStore',listStoreAndShelvesController.handle)
storeRouter.post('/insertShelf',putShelfOnStoreController.handle)

export {storeRouter}