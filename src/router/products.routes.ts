import { Router } from "express";
import { CreateProductController } from "../modules/product/useCases/createProduct/CreateProductController";
import { FindPRoductByIDController } from "../modules/product/useCases/findProductByID/FindProductByIDController";

const productsRoutes = Router()

const createProductController = new CreateProductController();
const findProductBYIDController = new FindPRoductByIDController();


productsRoutes.post('/',createProductController.handle)
productsRoutes.get('/findProduct',findProductBYIDController.handle)
export {productsRoutes}