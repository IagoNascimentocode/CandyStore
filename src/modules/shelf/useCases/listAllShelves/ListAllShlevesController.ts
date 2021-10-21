import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllShelvesUseCase } from "./ListAllShelvesUseCase";

class ListAllShelvesController{

    async handle(request:Request,response:Response):Promise<Response>{
    
        const listAllShelvesUseCase = container.resolve(ListAllShelvesUseCase)
        
        const shelves = await listAllShelvesUseCase.execute()

        return response.status(200).json(shelves)
    }
}

export {ListAllShelvesController}