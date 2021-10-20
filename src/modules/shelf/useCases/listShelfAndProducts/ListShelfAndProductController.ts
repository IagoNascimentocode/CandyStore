import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListShelfAndProductsUseCase } from "./ListShlefAndProductsUseCase";

class ListShelfAndProductsController{

    async handle(request:Request,response:Response): Promise<Response>{

        const shelf_id = request.body

        const listShelfAndProductsUseCase = container.resolve(ListShelfAndProductsUseCase)

        const shelf = await listShelfAndProductsUseCase.execute(shelf_id)

        return response.status(200).json(shelf)

    }
}

export {ListShelfAndProductsController}
