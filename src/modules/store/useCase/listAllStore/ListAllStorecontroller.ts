import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllStoreUseCase } from "./ListAllStoreUseCase";

class ListAllStoreController {
    
    async handle(request:Request,response:Response):Promise<Response>{
        
        const listAllStoreUseCase = container.resolve(ListAllStoreUseCase)

        const stores = await listAllStoreUseCase.execute()

        return response.status(200).json(stores)
        
    }
}

export {ListAllStoreController}