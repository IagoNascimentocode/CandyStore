import Router from "express"
import { CreateStoreController } from "../modules/store/useCase/createStore/CreateStoreController";
import { ListStoreAndShelvesController } from "../modules/store/useCase/ListStoreAndShleves/ListStoreAndShelvesController";
import { PutshelfOnStoreController } from "../modules/store/useCase/putShelfOnStore/PutShelfOnStoreController";

const storeRouter = Router();

const createStoreController = new CreateStoreController();
const listStoreAndShelvesController = new ListStoreAndShelvesController();
const putShelfOnStoreController = new PutshelfOnStoreController();

storeRouter.post('/createStore',createStoreController.handle);
storeRouter.get('/listStore',listStoreAndShelvesController.handle);
storeRouter.post('/insertShelf',putShelfOnStoreController.handle);

export {storeRouter}