import {Router} from "express";
import { CreateShelfController } from "../modules/shelf/useCases/createShelf/CreateShelfController";

const shelvesRoutes = Router()

const createShelfController = new CreateShelfController();

shelvesRoutes.post('/',createShelfController.handle)

export { shelvesRoutes }