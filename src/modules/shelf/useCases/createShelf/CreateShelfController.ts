import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateShelfUseCase } from "./CreateShelfUseCase";

class CreateShelfController {

    async handle(request:Request,response:Response):Promise<Response>{

        const {name,product_id} = request.body

        const createShelfUseCase = container.resolve(CreateShelfUseCase)
    
        const shelf = await createShelfUseCase.execute({name,product_id})

        return response.status(201).json(shelf)
    
    }
}

export {CreateShelfController}