import { Router } from "express";
import { CreateProductController } from "../modules/product/useCases/createProduct/CreateProductController";

const productsRoutes = Router()

const createProductController = new CreateProductController();

productsRoutes.post('/',createProductController.handle)

export {productsRoutes}