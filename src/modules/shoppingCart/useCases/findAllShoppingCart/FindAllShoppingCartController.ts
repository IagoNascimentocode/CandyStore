import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllShoppingCartUseCase } from "./FindAllShoppingCartUseCase";

class FindAllShoppingCartController{

    async handle(request:Request,response:Response):Promise<Response>{

        const findAllShoppingCartUseCase = container.resolve(FindAllShoppingCartUseCase)
        
        const allShoppingCart = await findAllShoppingCartUseCase.execute()

        return response.status(200).json(allShoppingCart)
    }

}

export {FindAllShoppingCartController}