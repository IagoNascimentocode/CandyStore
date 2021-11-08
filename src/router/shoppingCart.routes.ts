import {Router} from 'express';
import { FindAllShoppingCartController } from '../modules/shoppingCart/useCases/findAllShoppingCart/FindAllShoppingCartController';

const shoppingCartRoutes = Router();

const findAllShoppingCartController = new FindAllShoppingCartController();

shoppingCartRoutes.get("/findAllShoppingCart", findAllShoppingCartController.handle)

export {shoppingCartRoutes}