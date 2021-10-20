import { Request, Response } from "express";
import { container } from "tsyringe";
import { PutProductOnShelfUseCase } from "./PutProductOnShelfUseCase";

class PutProductOnShelfController{

    async handle (request:Request,response:Response):Promise<Response>{

        const {shelf_id,product_id} = request.body

        const putProductOnShelfUseCase = container.resolve(PutProductOnShelfUseCase)

        await putProductOnShelfUseCase.execute({shelf_id,product_id})

        return response.status(200).send("Successfully inserted product")
    }
}

export {PutProductOnShelfController}