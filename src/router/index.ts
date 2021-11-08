import { Router } from "express";
import { productsRoutes } from "./products.routes";
import { usersRoutes } from "./users.routes";
import { shelvesRoutes } from "./shelves.routes";
import { storeRouter } from "./store.routes";
import { shoppingCartRoutes } from "./shoppingCart.routes";

const router = Router();

router.use('/users', usersRoutes);
router.use('/product',productsRoutes);
router.use('/shelf',shelvesRoutes);
router.use('/store',storeRouter);
router.use('/shoppingCart',shoppingCartRoutes);

export {router}