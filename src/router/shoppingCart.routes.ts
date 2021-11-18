import {Router} from 'express';
import { FindAllShoppingCartController } from '../modules/shoppingCart/useCases/findAllShoppingCart/FindAllShoppingCartController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const shoppingCartRoutes = Router();

const findAllShoppingCartController = new FindAllShoppingCartController();

shoppingCartRoutes.get("/findAllShoppingCart", ensureAuthenticated ,findAllShoppingCartController.handle)

export {shoppingCartRoutes}