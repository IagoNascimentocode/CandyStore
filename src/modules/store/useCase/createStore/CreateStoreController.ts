import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateStoreUseCase } from "./CreateStoreUseCase";

class CreateStoreController{

    async handle(request:Request,response:Response):Promise<Response>{

        const { name, category} =  request.body;

        const createStoreUseCase = container.resolve(CreateStoreUseCase)

        const store = await createStoreUseCase.execute({name,category})

        return response.status(201).json(store)
    }
}
export {CreateStoreController}