import { Router } from "express";
import { CreateProductController } from "../modules/product/useCases/createProduct/CreateProductController";
import { FindPRoductByIDController } from "../modules/product/useCases/findProductByID/FindProductByIDController";
import { ListAllProductsController } from "../modules/product/useCases/listAllProducts/ListAllProductsController";

const productsRoutes = Router()

const createProductController = new CreateProductController();
const findProductBYIDController = new FindPRoductByIDController();
const listAllProductsController = new ListAllProductsController();

productsRoutes.post('/',createProductController.handle)
productsRoutes.get('/findProduct',findProductBYIDController.handle)
productsRoutes.get('/listAll',listAllProductsController.handle)

export {productsRoutes}